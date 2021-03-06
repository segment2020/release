<?php
$_SERVER["DOCUMENT_ROOT"] = "/home/bitrix/www";
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

use \Bitrix\Main\Loader;

if (!function_exists('delFromHits')) {
	function delFromHits()
	{
		global $DB;

		$strSql = "SELECT `IBLOCK_ELEMENT_ID` FROM `b_iblock_element_property` WHERE `IBLOCK_PROPERTY_ID` = '" . PROPERTY_ID_HIT_IN_CATALOG . "'";
		$elem = $DB->Query($strSql, false, "", array("ignore_dml"=>true));
		$counter = 0;
		while ($elId = $elem->GetNext())
		{
			$endDate = null;
			$strSql = "SELECT `VALUE` FROM `b_iblock_element_property` WHERE `IBLOCK_ELEMENT_ID` = '" . $elId['IBLOCK_ELEMENT_ID'] . "'
																		 AND `IBLOCK_PROPERTY_ID` = '" . PROPERTY_ID_COMPANY_ID_IN_CATALOG . "'";
			$company = $DB->Query($strSql, false, "", array("ignore_dml"=>true));
			if ($companyId = $company->GetNext())
			{
				$strSql = "SELECT `VALUE` FROM `b_iblock_element_property` WHERE `IBLOCK_ELEMENT_ID` = '" . $companyId['VALUE'] . "'
																		     AND `IBLOCK_PROPERTY_ID` = '" . PROPERTY_ID_END_DATE_HITS . "'";
				$dates = $DB->Query($strSql, false, "", array("ignore_dml"=>true));
				if ($date = $dates->GetNext())
					$endDate = $date['VALUE'];
			}

			if (null !== $endDate)
			{
				if (strtotime($endDate) < time())
				{
					if (Loader::includeModule('iblock'))
					{
						$property[PROPERTY_ID_HIT_IN_CATALOG] = array("VALUE" => '');
						CIBlockElement::SetPropertyValuesEx($elId['IBLOCK_ELEMENT_ID'], IBLOCK_ID_CATALOG, $property);
						++$counter;
					}
				}
			}
		}

		echo '<br>Обработано записей хитов: ' . $counter;
	}
}


if (!function_exists('checkMarkup')) {
	function checkMarkup()
	{
		global $DB;

		$strSql = "SELECT `ID`, `VALUE`, `IBLOCK_ELEMENT_ID`, `IBLOCK_PROPERTY_ID` FROM `b_iblock_element_property` 
																				   WHERE `IBLOCK_PROPERTY_ID` IN ('" . PROPERTY_ID_MARKED_TO_IN_NEWS_COMPANY . "',
																													'" . PROPERTY_ID_MARKED_TO_IN_NEWS_INDUSTRY . "', 
																													'" . PROPERTY_ID_MARKED_TO_IN_NEWS_NOVETLY . "')";
		$elemArr = $DB->Query($strSql, false, "", array("ignore_dml"=>true));
		$counter = 0;
		while ($element = $elemArr->GetNext())
		{
			if (time() > strtotime($element['VALUE']))
			{
				switch ($element['IBLOCK_PROPERTY_ID'])
				{
					case PROPERTY_ID_MARKED_TO_IN_NEWS_COMPANY:
					{
						$propId = PROPERTY_ID_MARKED_IN_NEWS_COMPANY;
						break;
					}

					case PROPERTY_ID_MARKED_TO_IN_NEWS_INDUSTRY:
					{
						$propId = PROPERTY_ID_MARKED_IN_NEWS_INDUSTRY;
						break;
					}

					case PROPERTY_ID_MARKED_TO_IN_NEWS_NOVETLY:
					{
						$propId = PROPERTY_ID_MARKED_IN_NEWS_NOVETLY;
						break;
					}
				}

				$strSql = "DELETE FROM `b_iblock_element_property` WHERE `IBLOCK_PROPERTY_ID` = '" . $propId . "' AND `IBLOCK_ELEMENT_ID` = '" . $element['IBLOCK_ELEMENT_ID'] . "'";
				$res = $DB->Query($strSql, false, "", array("ignore_dml"=>true));

				$strSql = "DELETE FROM `b_iblock_element_property` WHERE `ID` = '" . $element['ID'] . "'";
				$res = $DB->Query($strSql, false, "", array("ignore_dml"=>true));

				++$counter;
			}
		}

		echo '<br>Обработано выделенных записей: ' . $counter;
	}
}

// Расчёт рейтинга.
if (!function_exists('ratingCalc')) {
	function ratingCalc()
	{
		mail("irina@segment.ru", "ratingCalc cronStart", 'Отработка скрипта  топ100', "From: irina@segment.ru");

		// return true;
		$ratio = array(IBLOCK_ID_COMPANY => 1, IBLOCK_ID_NEWS_COMPANY => 2, IBLOCK_ID_STOCK => 3, IBLOCK_ID_NEWS_INDUSTRY => 2, IBLOCK_ID_VIEWPOINT => 5,
						IBLOCK_ID_GALLERY_PHOTO => 1, IBLOCK_ID_GALLERY_VIDEO => 1, IBLOCK_ID_EVENTS => 9, IBLOCK_ID_PRODUCTS_REVIEW => 4,
						IBLOCK_ID_BRANDS => 5, IBLOCK_ID_LICENSE => 5, IBLOCK_ID_NOVETLY => 2, IBLOCK_ID_BANNERS => 6, IBLOCK_ID_CATALOGS_PDF => 4, IBLOCK_ID_CATALOG => 4);

		global $DB;

		if (Loader::includeModule('iblock')) {
			$arSelect = Array("ID");
			$arFilter = Array("IBLOCK_ID" => IntVal(IBLOCK_ID_COMPANY), "ACTIVE" => "Y");
			$res = CIBlockElement::GetList(Array(), $arFilter, false, array(), $arSelect);
			while ($company = $res->GetNextElement()) {
				$rating = array();
				$finalRating = $totalView = 0;
				$idArray = $company->GetFields();

				$strSql = "SELECT IBLOCK_ID, NUM_VIEWS, CUR_DATE, ELEMENT_DATE_CREATE FROM `segment_views` WHERE `COMPANY_ID` = '" . $idArray['ID'] . "' AND `IBLOCK_ID` != '" . IBLOCK_ID_BANNERS . "'";
				$row = $DB->Query($strSql, false, "", array("ignore_dml"=>true));
				while ($result = $row->GetNext()) {
				// Посмотрим, как давно был просмотр.
				// $timePeriod = (int)strtotime('now') - (int)strtotime($result['CUR_DATE']);
				// $timePeriod = (int)($timePeriod / (3600 * 24));

					$difference = (int)strtotime('now') - (int)strtotime($result['ELEMENT_DATE_CREATE']);
					$daysNum = (int)($difference / (3600 * 24));

				// Учитываем только те просмотры, которые были за ближайший месяц.
				// if ($timePeriod <= DAYS_IN_MONHT)
				// {
						if (IBLOCK_ID_COMPANY == $result['IBLOCK_ID'] || IBLOCK_ID_LICENSE == $result['IBLOCK_ID'] || IBLOCK_ID_BRANDS == $result['IBLOCK_ID'])
						{
							$rating[$result['IBLOCK_ID']] += $result['NUM_VIEWS'];
						}
						else
						{
							if ($daysNum <= DAYS_IN_TWO_MONHT)
								$rating[$result['IBLOCK_ID']] += ($result['NUM_VIEWS'] * 1.5);
							elseif ($daysNum > DAYS_IN_TWO_MONHT && $daysNum <= DAYS_IN_ONE_YEAR)
								$rating[$result['IBLOCK_ID']] += $result['NUM_VIEWS'];
							elseif ($daysNum > DAYS_IN_ONE_YEAR && $daysNum <= DAYS_IN_THREE_YEARS)
								$rating[$result['IBLOCK_ID']] += ($result['NUM_VIEWS'] * 0.7);
							elseif ($daysNum > DAYS_IN_THREE_YEARS && $daysNum <= DAYS_IN_FIVE_YEARS)
								$rating[$result['IBLOCK_ID']] += ($result['NUM_VIEWS'] * 0.4);
							elseif ($daysNum > DAYS_IN_FIVE_YEARS)
								$rating[$result['IBLOCK_ID']] += ($result['NUM_VIEWS'] * 0.2);
						}

						$totalView += $result['NUM_VIEWS'];
				// } // end if ($timePeriod <= DAYS_IN_MONHT)
						//pre($rating[$result['IBLOCK_ID']]);

						// if (391436 == $idArray['ID'])
						// {
							// pre($result);
						// }
				}

				// if (391436 == $idArray['ID'])
				// {
					// pre($rating);
				// }

				foreach ($rating as $iBlockId => $value) {
					if (!empty($ratio[$iBlockId]))
						$finalRating += $value * $ratio[$iBlockId];
					else
						$finalRating += $value;
					
					// if (391436 == $idArray['ID'])
					// {
						// pre($finalRating);
					// }
				}

				// Учёт кликов по баннерам.
				$clicksNum = getClicksNumber(false, true, $idArray['ID']);
				$finalRating += ($clicksNum * $ratio[IBLOCK_ID_BANNERS]);

// if (391436 == $idArray['ID'])
// {
	// pre('+ клики:');
	// pre($clicksNum);
	// pre($clicksNum * $ratio[IBLOCK_ID_BANNERS]);
	// pre($finalRating);
// }
				// if (391436 == $idArray['ID'])
				// {
					$property[PROPERTY_ID_RATING] = array("VALUE" => $finalRating);
					$property[PROPERTY_ID_TOTAL_VIEW] = array('VALUE' => $totalView);
					// Установим новое значение для данного свойства данного элемента
					CIBlockElement::SetPropertyValuesEx($idArray['ID'], IBLOCK_ID_COMPANY, $property);

					// exit();
				// }
			} // end while ($company = $res->GetNextElement()) {
		}

		mail("irina@segment.ru", "ratingCalc cronStop", 'Отработка скрипта  топ100', "From: irina@segment.ru");
	}
}


delFromHits();
checkMarkup();
ratingCalc();

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");
?>