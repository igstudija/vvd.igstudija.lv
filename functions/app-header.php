<?php

function app_header() {

    if (isset($_GET['s'])) {

        if($_GET['s']=="b"){
            $s="backoffice";
        } elseif($_GET['s']=="p") {
             $s="public";
        }
        
       include('components/'.$s.'-header.php');
       
    }
}