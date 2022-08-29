<?php

function form($form) {

        $xml = file_get_contents('settings/' . $form . '.json');
        $items = json_decode($xml, JSON_NUMERIC_CHECK);

        $form_fields = $items["form_field"];
        
       

        include('templates/form.php');
    
}