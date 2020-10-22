<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
	die();

$this->setFrameMode(true);

if (is_array($arResult["SOCSERV"]) && !empty($arResult["SOCSERV"]))
{
?>
<div class="bx-socialsidebar">
	<?
	//<div class="bx-block-title"><span class="lname"><?=GetMessage("SS_TITLE")? ></span></div>
	?>
	<div>
		<span class="lname">
			<?=GetMessage("SS_TITLE")?>
		</span>
	</div>
	<div class="bx-socialsidebar-group">
		<ul>
			<?foreach($arResult["SOCSERV"] as $socserv):?>
			<li><a class="<?=htmlspecialcharsbx($socserv["CLASS"])?> bx-socialsidebar-icon" target="-blank" href="<?=htmlspecialcharsbx($socserv["LINK"])?>"></a></li>
			<?endforeach?>
		</ul>
	</div>
</div>
<?
}
?>