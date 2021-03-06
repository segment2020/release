<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>
<!--
<ul id="horizontal-multilevel-menu">
-->

<ul class="nav navbar-nav">

	<?
 
	//pre($arResult);

$previousLevel = 0;
foreach($arResult as $arItem):?>

	<?if ($previousLevel && $arItem["DEPTH_LEVEL"] < $previousLevel):?>
	<?= str_repeat("</ul></li>", ($previousLevel - $arItem["DEPTH_LEVEL"])); ?>
	<?endif?>

	<?	if ($arItem["IS_PARENT"])
	{
		if ($arItem["DEPTH_LEVEL"] == 1):?>
	<li class="dropdown dp-style"><a href="<?= $arItem["LINK"] ?>" class="<?if ($arItem[" SELECTED"]):?>root-item-selected
			<?else:?>root-item
			<?endif?> dropdown-toggle"><?= $arItem["TEXT"] ?>
		</a>
		<ul class="dropdown-menu">
			<?else:?>
			<li<?if ($arItem["SELECTED"]):?> class="item-selected"
				<?endif?>><a href="<?= $arItem["LINK"] ?>" class="parent"><?= $arItem["TEXT"] ?></a>
				<ul>
					<?endif?>

					<?	}
	else
	{
		if ($arItem["PERMISSION"] > "D"):?>

					<?if ($arItem["DEPTH_LEVEL"] == 1):?>
					<li class="dropdown dp-style"><a href="<?= $arItem["LINK"] ?>" class="<?if ($arItem[" SELECTED"]):?>root-item-selected
							<?else:?>root-item
							<?endif?>"><?= $arItem["TEXT"] ?>
						</a></li>
					<?else:?>
					<li<?if ($arItem["SELECTED"]):?> class="item-selected"
						<?endif?>><a href="<?= $arItem["LINK"] ?>"><?= $arItem["TEXT"] ?></a>
	</li>
	<?endif?>

	<?else:?>

	<?if ($arItem["DEPTH_LEVEL"] == 1):?>
	<li class="dropdown dp-style"><a href="" class="<?if ($arItem[" SELECTED"]):?>root-item-selected
			<?else:?>root-item
			<?endif?>" title="<?= GetMessage("MENU_ITEM_ACCESS_DENIED") ?>"><?= $arItem["TEXT"] ?>
		</a></li>
	<?else:?>
	<li><a href="" class="denied" title="<?= GetMessage("MENU_ITEM_ACCESS_DENIED") ?>"><?= $arItem["TEXT"] ?></a></li>
	<?endif?>

	<?endif?>

	<?	}
?>

	<?$previousLevel = $arItem["DEPTH_LEVEL"];?>

	<?endforeach?>

	<?if ($previousLevel > 1)://close last item tags?>
	<?= str_repeat("</ul></li>", ($previousLevel - 1)); ?>
	<?endif?>

</ul>


<div class="soc-icons__top">
	<a class="soc-icons fb-ico" href="https://www.facebook.com/segment.ru/" target="_blank" rel="noopener noreferrer"><img src="/tpl/svg/fb-ico.svg" alt=""></a>
	<a class="soc-icons vk-ico" href="https://vk.com/segment_official" target="_blank" rel="noopener noreferrer"><img src="/tpl/svg/vk-ico.svg" alt=""></a>
	<a class="soc-icons ok-ico" href="https://ok.ru/group/58748621553869" target="_blank" rel="noopener noreferrer"><img src="/tpl/svg/ok-ico.svg" alt=""></a>
	<a class="soc-icons tg-ico" href="https://www.instagram.com/segment.ru/" target="_blank" rel="noopener noreferrer"><img src="/tpl/svg/ins-ico.svg" alt=""></a>
	<a class="soc-icons tg-ico" href="https://t.me/segment_ru" target="_blank" rel="noopener noreferrer"><img src="/tpl/svg/tg-ico.svg" alt=""></a>
</div>

<div class="menu-clear-left"></div>
<?endif?>