<?php 
$t = NULL;
$t=isset($_GET['t']);


if ($t!=1){?>

<?php if ($hide_tools!=1){?>
<div class="row">
    <div class="col text-end pb-3">
        <button id="download-xlsx" class="btn btn-sm btn-primary">Lejupielādēt XLSX</button>
    </div>
</div>
<?php } ?>

<div id="<?php echo $table_id; ?>-table"></div>

<?PHP /*
<table class="table table-hover mb-3 w-100" id="<?php echo $table_id; ?>-table">
    <thead>
        <tr>
            <?php foreach ($table_cols as $table_col) { ?>
                <th scope="col"><?php echo $table_col['title']; ?></th>
            <?php } ?>
        </tr>
    </thead>
    <?php
    if ($table_type == 'form') {
        $table_data = file_get_contents('table-data/' . $table_id . '.json');
        $data_items = json_decode($table_data, JSON_NUMERIC_CHECK);
        $rows = $data_items['data'];
        ?>



        <?php foreach ($rows as $rowkey => $row) { ?>
            <tr>

                <?php foreach ($table_cols as $table_col) { ?>
                    <td>
                        <?php if (array_key_exists('type', $table_col)) { ?>

                            <?php
                            if (array_key_exists('placeholder', $table_col['field_elements'])) {
                                $placeholder = $table_col['field_elements']['placeholder'];
                            } else {
                                $placeholder = NULL;
                            }
                            ?>
                            <?php
                            if (array_key_exists('id', $rows)) {
                                $id = $row['id'];
                            } else {
                                $id = NULL;
                            }
                            ?>
                            <?php
                            if (array_key_exists('options', $table_col)) {
                                $options = array($row['id'] => $table_col['options']);
                            } else {
                                $options = NULL;
                            }
                            ?>

                        <?php form_field($table_col['type'], array("name" => $table_col['field_elements']['name'], "placeholder" => $placeholder, "id" => $row['id'], "value" => $row[$table_col['slug']]), $options); ?>

                <?php } else { ?>
                    <?php echo $row[$table_col['slug']]; ?>
                <?php } ?>
                    </td>
        <?php } ?>

            </tr>
    <?php } ?>

<?php } ?>
</table> 
*/?>


 <?php $jstime = date("YmdHi", filemtime($_SERVER['DOCUMENT_ROOT'] . "/table-data/".$table_id.".js")); ?>
     <script src="table-data/<?php echo $table_id; ?>.js?v=<?php echo $jstime; ?>"></script>

<?php /*
<script>
    new Tabulator("#<?php echo $table_id; ?>-table", {
    layout: "fitColumns",
        <?php echo $table_data; ?>,
                    columns: [
        <?php
        $num_of_items = count($table_cols);
        $num_count = 0;
        foreach ($table_cols as $table_col) { ?>

                {
                
        <?php foreach ($table_col as $c=>$col) { ?>
                <?php echo $c; ?>: "<?php echo $col; ?>",
        <?php } ?>
        
        title: "<?php echo $table_col['title']; ?>",
                field: "<?php echo $table_col['slug']; ?>"
                }<?php
            $num_count = $num_count + 1;
            if ($num_count < $num_of_items) {
                echo ',';
            }
            ?>

        <?php } ?>
            ]
    });
</script>

*/?>




<?php
/*

  <script>
  $(document).ready(function () {
  $('#<?php echo $table_id; ?>-table').DataTable({

  responsive: true,

  "fnDrawCallback": function (oSettings) {
  if ($('#<?php echo $table_id; ?>-table tr').length < <?php echo $table_defs['pageLength']+1;?>) {
  $('.dataTables_paginate').hide();
  }
  },



  <?php  if (array_key_exists("pageLength",$table_defs)){?>
  "pageLength": <?php echo $table_defs['pageLength'];?>,
  <?php } ?>

  <?php if (array_key_exists("language",$table_defs)){?>
  language: {
  url: 'https://cdn.datatables.net/plug-ins/1.12.1/i18n/<?php echo $table_defs['language'];?>.json'
  },
  <?php } ?>

  <?php if (array_key_exists("lengthChange",$table_defs)){?>
  "lengthChange": <?php echo $table_defs['lengthChange'];?>,
  <?php } ?>

  <?php if (array_key_exists("autoWidth",$table_defs)){?>
  "autoWidth": <?php echo $table_defs['autoWidth'];?>,
  <?php } ?>

  "columns": [

  <?php
  $num_of_items = count($table_cols);
  $num_count = 0;
  foreach($table_cols as $table_col){?>
  {"data": "<?php echo $table_col['slug']; ?>"}<?php $num_count = $num_count + 1;
  if ($num_count < $num_of_items) {
  echo ',';
  } ?>
  <?php } ?>

  ],

  "columnDefs": [

  <?php
  $num_of_items = count($table_cols);
  $num_count = 0;
  $n=0;
  foreach($table_cols as $table_col){  ?>
  {
  <?php foreach($table_col['columnDefs'] as $key => $def){  ?>
  "<?php echo $key;?>":"<?php echo $def;?>",
  <?php } ?>
  "targets": <?php echo $n; ?>
  }<?php $num_count = $num_count + 1;
  if ($num_count < $num_of_items) {
  echo ',';
  } ?>
  <?php $n++; } ?>


  ]
  <?php if($table_type != 'form'){ ?>
  ,
  <?php echo $table_data;?>
  <?php } ?>

  });
  });

  </script>

 */?>

<?php } else {?>
     
     
     <table class="table table-hover mb-3 w-100" id="<?php echo $table_id; ?>-table">
    <thead>
        <tr>
            <?php foreach ($table_cols as $table_col) { ?>
                <th scope="col"><?php echo $table_col['title']; ?></th>
            <?php } ?>
        </tr>
    </thead>
    <?php
    if ($table_type == 'form') {
        $table_data = file_get_contents('table-data/' . $table_id . '.json');
        $data_items = json_decode($table_data, JSON_NUMERIC_CHECK);
        $rows = $data_items['data'];
        ?>



        <?php foreach ($rows as $rowkey => $row) { ?>
            <tr>

                <?php foreach ($table_cols as $table_col) { ?>
                    <td>
                        <?php if (array_key_exists('type', $table_col)) { ?>

                            <?php
                            if (array_key_exists('placeholder', $table_col['field_elements'])) {
                                $placeholder = $table_col['field_elements']['placeholder'];
                            } else {
                                $placeholder = NULL;
                            }
                            ?>
                            <?php
                            if (array_key_exists('id', $rows)) {
                                $id = $row['id'];
                            } else {
                                $id = NULL;
                            }
                            ?>
                            <?php
                            if (array_key_exists('options', $table_col)) {
                                $options = array($row['id'] => $table_col['options']);
                            } else {
                                $options = NULL;
                            }
                            ?>

                        <?php form_field($table_col['type'], array("name" => $table_col['field_elements']['name'], "placeholder" => $placeholder, "id" => $row['id'], "value" => $row[$table_col['slug']]), $options); ?>

                <?php } else { ?>
                    <?php echo $row[$table_col['slug']]; ?>
                <?php } ?>
                    </td>
        <?php } ?>

            </tr>
    <?php } ?>

<?php } ?>
</table> 
     
<?php } ?>
