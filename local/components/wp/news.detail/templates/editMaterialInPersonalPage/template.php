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
?>

<form name="iblock_add" action="/editelement/?edit=Y&CODE=<? echo $arResult['ID']; ?>" method="POST" enctype="multipart/form-data" class='addItemFromPersonalPage'>
	<?=bitrix_sessid_post()?> 
	<div class="col-sm-9 col-xs-12 content-margin" id="article">
<? 

if (isset($_GET['errorStr']) && !empty($_GET['errorStr']))
{
?>
		<div class="block-default in block-shadow content-margin ">
			<div class="row">
				<div class="col-xs-12">
					<? echo $_GET['errorStr']; ?>
				</div>
			</div>
		</div>
<?	
}

if (isset($_GET['msg']) && !empty($_GET['msg']))
{
?>
		<div class="block-default in block-shadow content-margin ">
			<div class="row">
				<div class="col-xs-12">
					<? echo $_GET['msg']; ?>
				</div>
			</div>
		</div>
<?
}
if ($arResult['ACTIVE'] == "Y") { 
	$iBlockIsActive = true;
} else { 
	$iBlockIsActive = false;
} 

?> 
	<h1><? echo $APPLICATION->sDocTitle;?></h1>
	<div class="block-default in block-shadow content-margin">  
		<div class="row">
			
<?       
//********************************************************************************************************************************* 
$APPLICATION->IncludeFile('/tpl/include_area/newFields.php', array(
	'createNewMaterial' => false,  
	'isActiveMaterial' => $iBlockIsActive,    
	'iBlockId' => $arResult['IBLOCK_ID'],
	'name' => $arResult['NAME'], 
	'createdBy' => $arResult['CREATED_BY'], 
	'date_x' => $arResult['TIMESTAMP_X'], 
	'previewText' => $arResult['PREVIEW_TEXT'], 
	'detailText' => $arResult['DETAIL_TEXT'],
	'previewPictureSrc' => $arResult["PREVIEW_PICTURE"]["SRC"],
	'previewPictureId' => $arResult["PREVIEW_PICTURE"]["ID"],
	'detailPictureSrc' => $arResult["DETAIL_PICTURE"]["SRC"],
	'detailPictureId' => $arResult["DETAIL_PICTURE"]["ID"],    
	'editorData' => $arResult["PROPERTIES"]["editorData"]["VALUE"]["TEXT"],
	'editorDataId' => $arResult["PROPERTIES"]["editorData"]["ID"],
	'moveToValue' => $arResult["PROPERTIES"]["moveTo"]["VALUE"],
	'moveToId' => $arResult["PROPERTIES"]["moveTo"]["ID"],  
	'companyId' => $arResult["PROPERTIES"]["companyId"]["VALUE"], 
	'companyToId' => $arResult["PROPERTIES"]["companyId"]["ID"],  
	'fromCompanyId' => $arResult["PROPERTIES"]["fromCompany"]["ID"], 
	'fromCompanyValue' => $arResult["PROPERTIES"]["fromCompany"]["VALUE"],  
	),
	array()); 
	   
	//********************************************************************************************************************************* 
	// $APPLICATION->IncludeFile('/tpl/include_area/newDateActiveFrom.php', array('dateActiveFrom' => ''), array());
	//********************************************************************************************************************************* 
	   
 	if ($arResult["IBLOCK_ID"] == IBLOCK_ID_VIEWPOINT) { ?> 
	 	<div class="col-xs-12">
			<div class="form-group">
				<label class="control-label mainlabel" for="lk_nameAuthor">?????? ????????????</label>
				<input type="text" class="form-control" id='lk_nameAuthor' name="PROPERTY[<?php echo $arResult['PROPERTIES']['name']['ID']; ?>][0]" value="<?php echo $arResult['PROPERTIES']['name']['VALUE']; ?>">
			</div>
		</div>

	<? }
	if (($arResult["IBLOCK_ID"] == IBLOCK_ID_NEWS_COMPANY) || ($arResult["IBLOCK_ID"] == IBLOCK_ID_NEWS_INDUSTRY) || ($arResult["IBLOCK_ID"] == IBLOCK_ID_VIEWPOINT) || ($arResult["IBLOCK_ID"] == IBLOCK_ID_PRODUCTS_REVIEW) || ($arResult["IBLOCK_ID"] == IBLOCK_ID_NOVETLY)) {  ?>  
		<div class="col-xs-12">
			<div class="form-group">
				<label class="control-label mainlabel" for="lk_newsSource">????????????????</label>
				<input type="text" class="form-control" id="lk_newsSource" name='PROPERTY[<? echo $arResult['PROPERTIES']['newsSource']['ID']; ?>][0]' value="<? echo $arResult['PROPERTIES']['newsSource']['VALUE']; ?>">
			</div>
		</div> 
		<div class="col-xs-12">
			<div class="form-group">
				<label class="control-label mainlabel" for="lk_photoSource">???????????????? ????????</label>
				<input type="text" class="form-control" id="lk_photoSource" name='PROPERTY[<? echo $arResult['PROPERTIES']['imgSource']['ID']; ?>][0]' value="<? echo $arResult['PROPERTIES']['imgSource']['VALUE']; ?>">
			</div>
		</div> 
	<?   
	}
	$APPLICATION->IncludeFile('/tpl/include_area/tags.php', array( 'value' => $arResult['TAGS'], 'text' => 'size="'.$arResult["PROPERTY_LIST_FULL"]["TAGS"]["COL_COUNT"].'"'), array()); ?>

		</div>  
		</div> 
		<!-- ???????????????? ????????????  -->
		<!-- <input type="submit" name="test-button" value="????????" class="btn btn-blue-full minbr" id='test-button' />   -->
		<!-- /end ???????????????? ????????????  -->
		<input type="submit" name="iblock_submit" value="??????????????????" class="btn btn-blue-full minbr" id='updateElement' /> 
		<button class="btn btn-blue-full minbr newPreviewbtn">?????????????????????????????? ????????????????</button> 
		<input type="hidden" name="iBlockId" value="<? echo $arResult['IBLOCK_ID']; ?>">
		<input type="hidden" name="iBlockType" value="<? echo $arResult['IBLOCK_TYPE_ID']; ?>">
		<div class="errorBlock hide" id='errorText500'>?????????? ???????????????????? ?????????? 500 ????????????</div>
		<div class="previewBlock"></div>
		</div>
	</div> 
</form> 


 