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

$res = CIBlockElement::GetByID($arResult["ID"]);
if ($ar_res = $res->GetNext()) 
	$previewPicPath = CFile::GetPath($ar_res["PREVIEW_PICTURE"]); 


viewsinc($arResult['ID'], $arResult['IBLOCK_ID'], $arResult['PROPERTIES']['companyId']['VALUE'], $arResult['DATE_CREATE']);


$msgCounter = (!empty($arResult['PROPERTIES']['FORUM_MESSAGE_CNT']['VALUE']))? $arResult['PROPERTIES']['FORUM_MESSAGE_CNT']['VALUE']: 0;
$showCounter = $arResult['SHOW_COUNTER']? $arResult['SHOW_COUNTER']: 0;


if ($arResult["DETAIL_PICTURE"]["SRC"])
	$file = CFile::ResizeImageGet($arResult["DETAIL_PICTURE"]["ID"], array('width'=>890, 'height'=>340), BX_RESIZE_IMAGE_PROPORTIONAL, true);
else if (!empty($previewPicPath)) { 
	$file = CFile::ResizeImageGet($ar_res["PREVIEW_PICTURE"], array('width'=>890, 'height'=>340), BX_RESIZE_IMAGE_PROPORTIONAL, true);
}
else 
	$file['src'] = ''; 

$companyName = null;
if (isset($arResult['DISPLAY_PROPERTIES']['companyId']['DISPLAY_VALUE']) && empty($arResult['DISPLAY_PROPERTIES']['companyId']['DISPLAY_VALUE']))
{
	$arSelect = array("NAME");
	$arFilter = array("IBLOCK_ID" => IBLOCK_ID_COMPANY, 'ID' => $arResult['PROPERTIES']['companyId']['VALUE']);
	$res = CIBlockElement::GetList(Array(), $arFilter, false, array(), $arSelect);
	if ($ob = $res->GetNextElement())
	{
		$arFields = $ob->GetFields();
		$companyName = $arFields['~NAME'];
	}
}
elseif (isset($arResult['DISPLAY_PROPERTIES']['companyId']['DISPLAY_VALUE']) && !empty($arResult['DISPLAY_PROPERTIES']['companyId']['DISPLAY_VALUE']))
	$companyName = $arResult['DISPLAY_PROPERTIES']['companyId']['DISPLAY_VALUE'];

$companyName = str_replace("&quot;", '"',  $companyName);
$companyName = html_entity_decode($companyName);
if (IBLOCK_ID_NOVETLY == $arResult['IBLOCK_ID'])
{
	if (null !== $companyName)
	{
		$title = 'Новинка компании ' . $companyName;
		$titleLink = 'Все новинки компании';
	}
	else
	{
		$title = 'Новинка';
		$titleLink = 'Все новинки';
	}
}
elseif (IBLOCK_ID_NEWS_COMPANY == $arResult['IBLOCK_ID'])
{
	if (null !== $companyName)
	{
		$title = 'Новость компании ' . $companyName;
		$titleLink = 'Все новости компании';
	}
	else
	{
		$title = 'Новость компаний';
		$titleLink = 'Все новости компании';
	}
}
elseif (IBLOCK_ID_NEWS_INDUSTRY == $arResult['IBLOCK_ID'])
{
	// if (null !== $companyName)
	// {
		// $title = 'Новость компании ' . $companyName;
		// $titleLink = 'Все новости компании';
	// }
	// else
	// {
		$title = 'Новость отрасли';
		$titleLink = 'Все новости отрасли';
	// }
}
?>

<div class="block-default in block-shadow content-margin detailblock clearfix"> 
	<h1><? echo $arResult["~NAME"]; ?></h1>

		<div class="detailinfofirm">
			<span class="detailinfo_author">Автор новости / ньюсмейкер</span> <? echo $companyName; ?>
		</div> 
		 
	<div class="infotvc">
		<span class="infotime"><? echo $arResult["DATE_CREATE"]; ?></span>
		<span class="infoview"><i class="icon-icons_main-05"></i><? echo $arParams['VIEWSCOUNT']; ?></span>
		<span class="infocomment"><i class="icon-icons_main-04"></i><? echo $msgCounter; ?></span>
	</div>
<? 	
	if ('' !== $file['src'])
	{
?>
		<div class="mainphoto" style="background-image: url('<? echo $file["src"]; ?>');">
<?	
		if (isset($arResult['PROPERTIES']['imgString']['VALUE']) && !empty($arResult['PROPERTIES']['imgString']['VALUE']))
		{
?>
			<div class="mainphototitle">
				<? echo $arResult['PROPERTIES']['imgString']['VALUE']; ?>
			</div>
<?		}
?>
		</div>
<?	
	}
?>

<?
	if (!empty($arResult["PREVIEW_TEXT"])) { ?>
		<div class="descrcontent">
			<? echo $arResult["PREVIEW_TEXT"]; ?>
		</div>
<?	}
?>

	<!-- Детальный текст. -->
<?
	if (isset($arResult["DETAIL_TEXT"]) && !empty($arResult["DETAIL_TEXT"]))
	{
?>
		<div class="detailcontent newscontent">
			<? echo $arResult["DETAIL_TEXT"]; ?>
		</div>	
<?	}

?>

	<!-- Источники. -->
	
<?	
	if (isset($arResult['PROPERTIES']['newsSource']['VALUE']) && !empty($arResult['PROPERTIES']['newsSource']['VALUE']))
	{
		if (parse_url($arResult['PROPERTIES']['newsSource']['VALUE'], PHP_URL_SCHEME) != "") { 
			$domainSource = parse_url($arResult['PROPERTIES']['newsSource']['VALUE'], PHP_URL_HOST);
			$source = $arResult['PROPERTIES']['newsSource']['VALUE'];
		} else { 
			$domainSource = parse_url("http://".$arResult['PROPERTIES']['newsSource']['VALUE'], PHP_URL_HOST);
			$source = "http://".$arResult['PROPERTIES']['newsSource']['VALUE'];
		}
		
?>
	<noindex>
		<div class="sourceblock">
			<div class="title">Источник</div>
			<a class="link" href="<? echo $source; ?>" target="_blank" rel="noopener noreferrer">
				<? echo $domainSource ?>
			</a> 
		</div> 
	</noindex> 
<?	
	}
?>

<?
	if (isset($arResult['PROPERTIES']['imgSource']['VALUE']) && !empty($arResult['PROPERTIES']['imgSource']['VALUE']))
	{
		if (parse_url($arResult['PROPERTIES']['imgSource']['VALUE'], PHP_URL_SCHEME) != "") { 
			$domainSource = parse_url($arResult['PROPERTIES']['imgSource']['VALUE'], PHP_URL_HOST);
			$source = $arResult['PROPERTIES']['imgSource']['VALUE'];
		} else { 
			$domainSource = parse_url("http://".$arResult['PROPERTIES']['imgSource']['VALUE'], PHP_URL_HOST);
			$source = "http://".$arResult['PROPERTIES']['imgSource']['VALUE'];
		}
		;
?>
		 <noindex>
			<div class="sourceblock">
				<div class="title">Источник фото</div>
				<a class="link" href="<? echo $source; ?>" target="_blank" rel="noopener noreferrer">
					<? echo $domainSource ?>
				</a> 
			</div>
		</noindex> 
<?	
	}
?>

	<!-- Теги. -->	

<?	if (isset($arResult['TAGS']) && !empty($arResult['TAGS'])) { ?>
		<div class="tagblock">
			<span>Тэги:</span>
<?
			$tags = explode(',', $arResult['TAGS']);
			foreach ($tags as $tag) { ?>
				<?
				/*
				<a href="/search/?q=<? echo $tag; ?>&where=&how=r&from=&to="><? echo $tag; ?></a>
				<a href="<?=$arResult['IBLOCK']['SECTION_PAGE_URL']?>?companyfilter_ff%5BTAGS%5D=<? echo trim($tag); ?>&set_filter=Y">#<? echo trim($tag); ?>
				*/
				?>
				<a href="/search/tagSearch.php?tags=<? echo trim($tag); ?>">#<? echo trim($tag); ?></a>   
<?			} ?>
		</div>
<?	} ?>
</div>





<?
 