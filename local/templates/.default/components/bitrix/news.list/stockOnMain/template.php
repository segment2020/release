<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);

//pre($arResult);
?>


<div class="block-title clearfix">
	<a class="notitlestyle" href="<? echo $arResult['SECTION_PAGE_URL']; ?>"><? echo $arResult['NAME']; ?></a><a class="floatright" href="<? echo $arResult['SECTION_PAGE_URL']; ?>">Все акции<i class="icon-icons_main-10"></i></a>
</div>

<?
$counter = 0;
$itemsNumber = count($arResult["ITEMS"]);
foreach($arResult["ITEMS"] as $arItem)
{
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));

	$dateCreate = FormatDate("d F Y", MakeTimeStamp($arItem["DATE_CREATE"]));

	$showCounter = (isset($arItem['SHOW_COUNTER']) && !empty($arItem['SHOW_COUNTER']))? $arItem["SHOW_COUNTER"]: 0;

	$msgCounter = !empty($arItem['PROPERTIES']['FORUM_MESSAGE_CNT']['VALUE'])? $arItem['PROPERTIES']['FORUM_MESSAGE_CNT']['VALUE']: 0;

	
	
	/*
	if ('1' === $arItem["PROPERTIES"]["showLogo"]['VALUE'])
	{
		$arSelect = array("PREVIEW_PICTURE");
		$arFilter = array("IBLOCK_ID" => IBLOCK_ID_COMPANY, 'ID' => $arItem['PROPERTIES']['companyId']['VALUE'], "ACTIVE" => "Y");
		$res = CIBlockElement::GetList(Array(), $arFilter, false, array(), $arSelect);
		if ($ob = $res->GetNextElement())
			$arFields = $ob->GetFields();

		$fileNum = $arFields['PREVIEW_PICTURE'];

		if ($fileNum)
			$file = CFile::ResizeImageGet($fileNum, array('width'=>70, 'height'=>70), BX_RESIZE_IMAGE_PROPORTIONAL, true);
	}
	elseif ($arItem["PREVIEW_PICTURE"]["SRC"])
	{
		$file = CFile::ResizeImageGet($arItem["PREVIEW_PICTURE"]["ID"], array('width'=>70, 'height'=>70), BX_RESIZE_IMAGE_PROPORTIONAL, true);
	}

	if (!isset($file['src']))
		$file['src'] = '';
*/


	$file['src'] = EMPTY_IMAGE_PATH;
	$arFields = array();
	// pre($arItem['PROPERTIES']['showLogo']); 

		if (!empty($arItem['PREVIEW_PICTURE']["ID"]) && $arItem['ID'] > 439817) // Грязный вонючий хак. Из-за переноса со старого сайта незьля было разобрать в старой базе условия вывода.  
			$file = CFile::ResizeImageGet($arItem['PREVIEW_PICTURE']["ID"], array('width'=>70, 'height'=>70), BX_RESIZE_IMAGE_PROPORTIONAL, true); 
		elseif (!empty($arItem['PROPERTIES']['companyId']['VALUE']))
		{ 
			$arSelect = array('PREVIEW_PICTURE');
			$arFilter = array("IBLOCK_ID" => IBLOCK_ID_COMPANY, 'ID' => $arItem['PROPERTIES']['companyId']['VALUE']);
			$res = CIBlockElement::GetList(Array(), $arFilter, false, array(), $arSelect);
			if ($ob = $res->GetNextElement())
				$arFields = $ob->GetFields();

			if (!empty($arFields['PREVIEW_PICTURE']))
				$file = CFile::ResizeImageGet($arFields['PREVIEW_PICTURE'], array('width'=>70, 'height'=>70), BX_RESIZE_IMAGE_PROPORTIONAL, true);
		} 



	$companyName = strip_tags($arItem['DISPLAY_PROPERTIES']['companyId']['DISPLAY_VALUE']);

	$class = '';
	if (!empty($arItem['PROPERTIES']['inTheTop']['VALUE']))
	{
		if (strtotime($arItem['PROPERTIES']['dateInTheTop']['VALUE']) > strtotime(date('now')) )
			$class = 'marked';
	}
	
	if ( (0 === $counter) || (0 === ($counter % 2)) )
	{
?>
		<div class="row">
<?	}
?>
			<div class="col-xs-12">
				<div class="tableblockitem">
					<a href="<? echo $arItem["DETAIL_PAGE_URL"]; ?>">
						<div class="imgblock floatleft nodisp1320">
							<img src="<? echo $file['src']; ?>">
						</div>
						<div class="textblock nomarginleft1320 <? echo $class; ?>">
							<div class="firmblock">
								Акция компании <span><? echo $companyName; ?></span>
							</div>
							<div class="titleblock">
								<? echo $arItem["NAME"]; ?>
							</div>
							<div class="infotvc">
								<span class="infotime"><? echo $dateCreate; ?></span>
								<span class="infoview"><i class="icon-icons_main-05"></i><? echo showviews($arItem['ID']); ?></span>
								<span class="infocomment"><i class="icon-icons_main-04"></i><? echo $msgCounter; ?></span>
							</div>
						</div>
					</a>
				</div>
		<div class="seporator">
		</div>
			</div>
<?	if (0 !== ($counter % 2))
	{		
?>
		</div> <!-- end div class="row"> -->
<?	}

	++$counter;
}?>

<?
	if (0 !== ($itemsNumber % 2))
	{
?>
		</div> <!-- end div class="row"> --> 
<?	}
?>



<?
/*

<div class="news-list">
<?if($arParams["DISPLAY_TOP_PAGER"]):?>
	<?=$arResult["NAV_STRING"]?><br />
<?endif;?>
<?foreach($arResult["ITEMS"] as $arItem):?>
	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>
	<p class="news-item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
		<?if($arParams["DISPLAY_PICTURE"]!="N" && is_array($arItem["PREVIEW_PICTURE"])):?>
			<?if(!$arParams["HIDE_LINK_WHEN_NO_DETAIL"] || ($arItem["DETAIL_TEXT"] && $arResult["USER_HAVE_ACCESS"])):?>
				<a href="<?=$arItem["DETAIL_PAGE_URL"]?>"><img
						class="preview_picture"
						border="0"
						src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>"
						width="<?=$arItem["PREVIEW_PICTURE"]["WIDTH"]?>"
						height="<?=$arItem["PREVIEW_PICTURE"]["HEIGHT"]?>"
						alt="<?=$arItem["PREVIEW_PICTURE"]["ALT"]?>"
						title="<?=$arItem["PREVIEW_PICTURE"]["TITLE"]?>"
						style="float:left"
						/></a>
			<?else:?>
				<img
					class="preview_picture"
					border="0"
					src="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>"
					width="<?=$arItem["PREVIEW_PICTURE"]["WIDTH"]?>"
					height="<?=$arItem["PREVIEW_PICTURE"]["HEIGHT"]?>"
					alt="<?=$arItem["PREVIEW_PICTURE"]["ALT"]?>"
					title="<?=$arItem["PREVIEW_PICTURE"]["TITLE"]?>"
					style="float:left"
					/>
			<?endif;?>
		<?endif?>
		<?if($arParams["DISPLAY_DATE"]!="N" && $arItem["DISPLAY_ACTIVE_FROM"]):?>
			<span class="news-date-time"><?echo $arItem["DISPLAY_ACTIVE_FROM"]?></span>
		<?endif?>
		<?if($arParams["DISPLAY_NAME"]!="N" && $arItem["NAME"]):?>
			<?if(!$arParams["HIDE_LINK_WHEN_NO_DETAIL"] || ($arItem["DETAIL_TEXT"] && $arResult["USER_HAVE_ACCESS"])):?>
				<a href="<?echo $arItem["DETAIL_PAGE_URL"]?>"><b><?echo $arItem["NAME"]?></b></a><br />
			<?else:?>
				<b><?echo $arItem["NAME"]?></b><br />
			<?endif;?>
		<?endif;?>
		<?if($arParams["DISPLAY_PREVIEW_TEXT"]!="N" && $arItem["PREVIEW_TEXT"]):?>
			<?echo $arItem["PREVIEW_TEXT"];?>
		<?endif;?>
		<?if($arParams["DISPLAY_PICTURE"]!="N" && is_array($arItem["PREVIEW_PICTURE"])):?>
			<div style="clear:both"></div>
		<?endif?>
		<?foreach($arItem["FIELDS"] as $code=>$value):?>
			<small>
			<?=GetMessage("IBLOCK_FIELD_".$code)?>:&nbsp;<?=$value;?>
			</small><br />
		<?endforeach;?>
		<?foreach($arItem["DISPLAY_PROPERTIES"] as $pid=>$arProperty):?>
			<small>
			<?=$arProperty["NAME"]?>:&nbsp;
			<?if(is_array($arProperty["DISPLAY_VALUE"])):?>
				<?=implode("&nbsp;/&nbsp;", $arProperty["DISPLAY_VALUE"]);?>
			<?else:?>
				<?=$arProperty["DISPLAY_VALUE"];?>
			<?endif?>
			</small><br />
		<?endforeach;?>
	</p>
<?endforeach;?>
<?if($arParams["DISPLAY_BOTTOM_PAGER"]):?>
	<br /><?=$arResult["NAV_STRING"]?>
<?endif;?>
</div>
