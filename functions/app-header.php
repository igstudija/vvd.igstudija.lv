<?php

function app_header() {

    if (isset($_GET['s'])) {

        if($_GET['s']=="b"){
            $s="backoffice";
        } elseif($_GET['s']=="p") {
             $s="public";
        } elseif($_GET['s']=="k") {
             $s="consultant";
        } 
        
       include('components/'.$s.'-header.php');
       
    } else {
        include('components/public-header.php');
    }
}