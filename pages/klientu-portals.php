
<div class="alert alert-warning d-flex align-items-center" role="alert">
  
    <span class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2">
        <i class="fa-solid fa-triangle-exclamation"></i>
    </span>
    
  <div>
    Drīz beidzas Atļaujas Nr.7656484 termiņš
  </div>
</div>

<div class="row">
    <div class="col-4">

        <div class="card widget">
            <h5 class="card-header"><i class="fa-solid fa-file-signature"></i> Iesniegumi</h5>
            <div class="card-body">

                <?php table('sakums-iesniegumi','',1);?>

            </div>
        </div>

    </div>
    
    <div class="col-4">

        <div class="card widget">
            <h5 class="card-header"><i class="fa-solid fa-award"></i> Atļaujas</h5>
            <div class="card-body">

<?php table('sakums-atlaujas','',1);?>
            </div>
        </div>

    </div>
    
    <div class="col-4">

        <div class="card widget">
            <h5 class="card-header"><i class="fa-solid fa-list-check"></i> Pārskati</h5>
            <div class="card-body">
<?php table('sakums-parskati','',1);?>
            </div>
        </div>

    </div>

</div>
