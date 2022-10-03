<?php include("functions.php"); ?> 
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">




        <link href="https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator.min.css" rel="stylesheet">

        <script type="text/javascript" src="https://unpkg.com/tabulator-tables@5.2.3/dist/js/tabulator.min.js"></script>




        <?php
        $date = new DateTime();
        $styletime = $date->getTimestamp();
        ?>
        <?php $styletime = date("YmdHi", filemtime($_SERVER['DOCUMENT_ROOT'] . "/css/style.css")); ?>
        <link href="css/style.css?v=<?php echo $styletime; ?>" rel="stylesheet">


        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous"></script>
        <script  src="https://code.jquery.com/jquery-3.6.0.min.js"  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="  crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.full.min.js"></script>

        <?php /* ?>
          <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.js"></script>
          <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/responsive/2.3.0/js/dataTables.responsive.min.js"></script>
          <?php */ ?>

        <script src="tiny-mce/tinymce.min.js" referrerpolicy="origin"></script>
        <script type="text/javascript" src="https://oss.sheetjs.com/sheetjs/xlsx.full.min.js"></script>    
    </head>
    <body>

        <?php menu(); ?>

        <button type="button" class="ms-3 btn btn-success template-switch"
                data-bs-toggle="tooltip" 
                data-bs-placement="left"
                data-bs-custom-class="custom-tooltip"
                data-bs-title="Pārslēgt sagataves"  

                data-toggle="modal" 
                data-target="#parslegt-sagataves"

                >
            <i class="fa-solid fa-swatchbook"></i>
        </button>
        <?php
//modal($modal_id,$modal_title,$modal_size (optional))
        modal("parslegt-sagataves", "Pārslēgt sagataves", "modal-lg");
        ?>

        <div class="wrapper">








