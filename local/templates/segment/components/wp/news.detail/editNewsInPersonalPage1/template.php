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

<form name="iblock_add" action="/editelement/?edit=Y&CODE=<? echo $arResult['ID']; ?>" method="POST" enctype="multipart/form-data">
	<?=bitrix_sessid_post()?>

	<div class="col-sm-9 col-xs-12 content-margin" id="article">
<?
if (isset($_GET['errorStr']) && !empty($_GET['errorStr']))
{
?>
		<div class="block-default in block-shadow content-margin">
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
// pre($arResult);
?>
	<h1><? echo GetMessage('EDIT_NEWS_TITLE'); ?></h1>
	<div class="block-default in block-shadow content-margin ">
		<div class="row">

<?
//*********************************************************************************************************************************
$APPLICATION->IncludeFile('/tpl/include_area/defaultFields.php', array('name' => $arResult['NAME'], 'previewText' => $arResult['PREVIEW_TEXT'], 'detailText' => $arResult['DETAIL_TEXT']), array());
//*********************************************************************************************************************************	

//*********************************************************************************************************************************
$APPLICATION->IncludeFile('/tpl/include_area/dateActiveFrom.php', array('dateActiveFrom' => $arResult["ACTIVE_FROM"]), array());
//*********************************************************************************************************************************
?>

			<div class="col-xs-12">
				<div class="form-group">
					<label class="control-label mainlabel" for="lk_newsSource">???????????????? ??????????????</label>
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
//*********************************************************************************************************************************
// $APPLICATION->IncludeFile('/tpl/include_area/addPicture.php',
// 							array('previewPictureSrc' => $arResult["PREVIEW_PICTURE"]["SRC"],
// 									'previewPictureId' => $arResult["PREVIEW_PICTURE"]["ID"],
// 									'detailPictureSrc' => $arResult["DETAIL_PICTURE"]["SRC"],
// 									'detailPictureId' => $arResult["DETAIL_PICTURE"]["ID"]),
// 							array());
//*********************************************************************************************************************************

// $APPLICATION->IncludeFile('/tpl/include_area/tags.php', array('value' => $arResult['TAGS'], 'text' => 'size="'.$arResult["PROPERTY_LIST_FULL"]["TAGS"]["COL_COUNT"].'"'), array());

/*
?>

			<div class="col-xs-12">
				<div class="form-group">
					<label class="control-label mainlabel" for="newTag">????????</label>
					<div class='lk_userinfobtn'>
<?
									$APPLICATION->IncludeComponent(
										"bitrix:search.tags.input",
										"tagsInAddNews",
										array(
											"VALUE" => $arResult['TAGS'],
											"NAME" => "PROPERTY[TAGS][0]",
											"TEXT" => 'size="'.$arResult["PROPERTY_LIST_FULL"]["TAGS"]["COL_COUNT"].'"',
										), null, array("HIDE_ICONS"=>"Y")
									);
?>
					</div>
				</div>

				<input type="text" class="newTags" id="newTag" value=""> // ???????? ?????????? ????????????????????
				<div class="btn btn-blue btnplus minbr addTag" id='addNewTag'>
					<span class="plus text-center">+</span>???????????????? ??????
				</div>
			</div>
<?
*/
?>
		</div>

		<div class="seporator lksep"></div>
		<input type="submit" name="iblock_submit" value="??????????????????" class="btn btn-blue-full minbr" id='updateElement' />
		<button class="btn btn-blue-full minbr previewbtn">?????????????????????????????? ????????????????</button>
		<input type="hidden" name="iBlockId" value="<? echo $arResult['IBLOCK_ID']; ?>">
		<input type="hidden" name="iBlockType" value="<? echo $arResult['IBLOCK_TYPE_ID']; ?>">
		<div class="errorBlock hide" id='errorText500'>?????????? ???????????????????? ?????????? 500 ????????????</div>
	</div>
	<div class="previewBlock"></div>
	</div>
</form>

<script type="text/javascript">
	$('#addNewTag').on('click', function(){
		var newTag = $('#newTag').val();
		if ('' != newTag && ' ' != newTag && !!newTag[0] && ' ' != newTag[0])
		{
			var existsTags = $('.search-tags').val();
			$('#newTag').val('');
			$('.tagsList').append('<span class="tag btn btn-blue-full minbr">' + newTag + '</span>');

			console.log('et', existsTags[0]);
			if ('' != existsTags && ' ' != existsTags && !!existsTags[0] && ' ' != existsTags[0])
				$('.search-tags').val(existsTags + ', ' + newTag);
			else
				$('.search-tags').val(newTag);
		}
	});

	$('.tagsList').on('click', '.tag', function(){
		var tag = $(this).text() + ',';
		var existsTags = $('.search-tags').val() + ',';

		existsTags = existsTags.replace (new RegExp (tag, 'g'), '');
		var pos = existsTags.lastIndexOf(',');
		$('.search-tags').val(existsTags.slice(0, pos));
		$(this).remove();
	});
</script>
 