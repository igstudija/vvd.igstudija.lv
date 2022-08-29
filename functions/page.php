<?php

function page() {

    if (isset($_GET['p'])) {

        $page = $_GET['p'];
        
       include('pages/'.$page.'.php');
       
    }
}