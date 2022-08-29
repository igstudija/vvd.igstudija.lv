<?php

function table($table_id,$table_type=NULL) {

        $json = file_get_contents('table-data/' . $table_id . '-settings.json');
        $items = json_decode($json, JSON_NUMERIC_CHECK);

        $table_cols = $items["columns"];
        $table_defs = $items["tabledef"];

        include('templates/table.php');
    
}