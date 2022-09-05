<?php

function page() {

    if (isset($_GET['p'])) {

        $p = $_GET['p']; 
        
        $xml = file_get_contents('settings/' . $p . '.json');
        $items = json_decode($xml, JSON_NUMERIC_CHECK);

        $accordions = NULL;
        if(array_key_exists("accordion", $items)){
        $accordions = $items["accordion"];
        }
        
        $page = NULL;
        if(array_key_exists("page", $items)){
        $page = $items["page"];
        }
        
        $tools = NULL;
        if(array_key_exists("tools", $items)){
        $tools = $items["tools"];
        }
        
        
        $form_fields = NULL;
        if(array_key_exists("form_field", $items)){
        $form_fields = $items["form_field"];
        }
        
        
        $payment = NULL;
        if(array_key_exists("payment", $items)){
        $payment = $items["payment"];
        }
        
        
        $breadcrumb = NULL;
        if(array_key_exists("breadcrumb", $items)){
        $breadcrumb = $items["breadcrumb"];
        }
        
        ?>




<?php if($breadcrumb!=NULL && $breadcrumb!= 'false') { include("templates/breadcrumb.php");} ?>

<?php if($tools!= 'false') { include("templates/tools.php");} ?>


<?php if($form_fields!=null) {?>
<div class="card mt-3 mb-3">
    <div class="card-body pt-1">

        <?php form($p); ?>

    </div>
</div>
<?php } ?>

<?php if($page!= NULL) { include("pages/".$p.".php");} ?>

<?php if($accordions!=null) { accordion($p);} ?>

<?php if($payment!=NULL && $payment!= 'false') { include("components/payment.php");} ?>     

<?php //if($tools!= 'false') { include("templates/tools.php");} ?>
      
       
   <?php }
}