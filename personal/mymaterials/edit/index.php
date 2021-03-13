<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Редактировать материал");
?>
<div class="container-fluid">
	<div class="row">

		<?
		$APPLICATION->IncludeFile('/tpl/include_area/newPersonalPageLeftSide.php', array(), array()); 
		 
            if (isset($_REQUEST['elementId']) && !empty($_REQUEST['elementId'])) {
				$res = CIBlockElement::GetByID($_GET["elementId"]); 
                if ($ar_res = $res->GetNext()) {
                    $APPLICATION->IncludeFile('/tpl/include_area/newEditElement.php', array(
						"iBlockId" => $ar_res['IBLOCK_ID'],
						"iBlockType" => $ar_res['IBLOCK_TYPE_ID'],
						"iBlockIsActive" => $ar_res["ACTIVE"],
					));
                }
            } elseif (isset($_GET['iBlockId']) && !empty($_GET['iBlockId'])) {
                $APPLICATION->SetTitle("Добавить материал");
                $APPLICATION->IncludeFile('/tpl/include_area/newCreateElement.php', array(
                    "iBlockId" => IBLOCK_ID_ALL_MATERIALS,
                    "jsonDataId" => PROPERTY_ID_JSON_DATA_IN_ALL_MATERIALS,
                    "moveToId" => PROPERTY_ID_MOVE_TO_IN_ALL_MATERIALS 
                ));
            }
		?>
	</div>
</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>