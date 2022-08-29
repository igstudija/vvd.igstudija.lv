<?php

function accordion($accordion) {

  
    
        $xml = file_get_contents('settings/' . $accordion . '.json');
        $items = json_decode($xml, JSON_NUMERIC_CHECK);

        $accordions = $items["accordion"];

        include('templates/accordion.php');
    
}