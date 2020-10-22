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

// pre($arParams);
// pre($arResult);
if (!empty($arResult["ITEMS"])) {
if ($arParams['IBLOCK_ID'] == 15) {
	$linkname = 'Все обзоры';
	$titlename = 'Обзор компании';
} elseif ($arParams['IBLOCK_ID'] == IBLOCK_ID_GALLERY_PHOTO) {
	$linkname = 'Все альбомы';
	$titlename = 'Фотоальбом компании';
} else {
	$linkname = 'Все альбомы';
	$titlename = 'Видеоальбом компании';
}
?>

<div class="block-default block-shadow content-margin innerphotoblock nobgimg">
	<div class="block-title clearfix">
		<span>
			<a class="bigRed" href="<? echo $arResult['SECTION_PAGE_URL']; ?>?companyId=<? echo $arResult["ITEMS"][0]['PROPERTIES']['companyId']['VALUE']; ?>">
				<? echo $arResult['NAME']; ?>
			</a>
		</span>
		<a class="floatright" href="<? echo $arResult['SECTION_PAGE_URL']; ?>?companyId=<? echo $arResult["ITEMS"][0]['PROPERTIES']['companyId']['VALUE']; ?>">
			<?=$linkname?>
			<i class="icon-icons_main-10"></i>
		</a>
	</div>
	<div class="row">
	<?
	foreach($arResult["ITEMS"] as $arItem)
	{
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));

		$showCounter = (isset($arItem['SHOW_COUNTER']) && !empty($arItem['SHOW_COUNTER']))? $arItem["SHOW_COUNTER"]: 0;

		$msgCounter = !empty($arItem['PROPERTIES']['FORUM_MESSAGE_CNT']['VALUE'])? $arItem['PROPERTIES']['FORUM_MESSAGE_CNT']['VALUE']: 0;

		if ($arItem["PREVIEW_PICTURE"]["SRC"])
			$file = CFile::ResizeImageGet($arItem["PREVIEW_PICTURE"]["ID"], array('width'=>297, 'height'=>120), BX_RESIZE_IMAGE_EXACT, true);
	?>
		<div class="col-sm-4 col-xs-12">
			<div class="line">
				<a href="<? echo $arItem["DETAIL_PAGE_URL"]; ?>">
					<div class="centerimg" style="background-image: url('<? echo $arItem["PREVIEW_PICTURE"]["SRC"]; ?>');">
						<? if ($arItem['DISPLAY_PROPERTIES']['companyId']['DISPLAY_VALUE']) 
						{ ?>
							<div class="firmblock"><?=$titlename?> <?=strip_tags($arItem['DISPLAY_PROPERTIES']['companyId']['DISPLAY_VALUE']);?></div>
						<? } ?>
					</div>
					<div class="bottomtext">
						<div class="infotvc">
							<span class="infotime"><? echo $arItem['DATE_CREATE']; ?></span>
							<span class="infoview"><i class="icon-icons_main-05"></i><? echo $showCounter; ?></span>
							<span class="infocomment"><i class="icon-icons_main-04"></i><? echo $msgCounter; ?></span>
						</div>
						<div class="titleblock"><? echo $arItem["NAME"]; ?></div>
					</div>
				</a>
			</div>
		</div>
	<?
	}
	?>
	</div> <!-- end div class="row"> -->
</div>	
<? } ?>




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
