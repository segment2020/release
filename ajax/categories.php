<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

// require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");


if (CModule::IncludeModule("iblock"))
{
	$string = '<option></option>';
	if (isset($_REQUEST['sectionId']) && (!empty($_REQUEST['sectionId'])))
	{
		$sectionId = intval($_REQUEST['sectionId']);

		// ������� ����� �� ��������������� ����� $blockId � ������� $sectionId.
		$items = GetIBlockSectionList(IBLOCK_ID_CATALOG, $sectionId, array("sort"=>"asc"));
		while($arItem = $items->GetNext())
			$string .= '<option value="' . $arItem["ID"] . '">' . $arItem["NAME"] . '</option>';

		echo $string;
	}
	elseif (isset($_REQUEST['subSectionId']) && (!empty($_REQUEST['subSectionId'])))
	{
		$subSectionId = intval($_REQUEST['subSectionId']);
		// echo $subSectionId;
		// ������� �������� �� ����� $ID ��������������� ����� $BID
		// $items = GetIBlockElementList($blockId, $subSectionId, Array("name" => "asc"));
		$items = GetIBlockSectionList(IBLOCK_ID_CATALOG, $subSectionId, Array("name" => "asc"));
		while($arItem = $items->GetNext())
			$string .= '<option value="' . $arItem["ID"] . '">' . $arItem["NAME"] . '</option>';

		echo $string;
	}
}
else
   ShowError("������ �� ����������");

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");
?>