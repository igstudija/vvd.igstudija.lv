<?php

function menu() {

    if (isset($_GET['s'])) {

        if($_GET['s']=="b"){
            $s="backoffice";
        } elseif($_GET['s']=="p" || $_GET['s']=="k") {
             $s="public";
        }

        $xml = file_get_contents('settings/menu-' . $s . '.json');
        $items = json_decode($xml, JSON_NUMERIC_CHECK);

        $menuitems = $items["menuitem"];

        include('templates/menu.php');
    } else {
         $xml = file_get_contents('settings/menu-public.json');
        $items = json_decode($xml, JSON_NUMERIC_CHECK);

        $menuitems = $items["menuitem"];

        include('templates/menu.php');
    }
}
