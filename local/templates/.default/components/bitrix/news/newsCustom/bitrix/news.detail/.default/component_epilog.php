<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

$res = CIBlockElement::GetByID($arResult["ID"]);
if ($ar_res = $res->GetNext()) 
	$previewPicPath = CFile::GetPath($ar_res["PREVIEW_PICTURE"]); 


if ($arResult["DETAIL_PICTURE"]["SRC"])
	$picture_src = $arResult["DETAIL_PICTURE"]["SRC"];
else if (isset($arResult['PROPERTIES']['imgString']['VALUE']) && !empty($arResult['PROPERTIES']['imgString']['VALUE'])) { 
	$picture_src = $arResult['PROPERTIES']['imgString']['VALUE'];
}
else if (!empty($previewPicPath)) { 
	$picture_src = $previewPicPath;
} 


$APPLICATION->SetPageProperty('og-image', '<meta property="og:image" content="https://' . SITE_SERVER_NAME . $picture_src.'">' );

if (!empty($arResult['PREVIEW_TEXT']))
$APPLICATION->SetPageProperty('og-description', '<meta property="og:description" content="'.$arResult['PREVIEW_TEXT'].'">' ); 

?>