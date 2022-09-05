<div class="tools d-flex">
    <button class="btn btn-outline-success me-3"><i class="fa-solid fa-check"></i> Saglabāt</button>
    <?php if ($_GET['s']=="p"){?>
     <button class="btn btn-success me-3"><i class="fa-solid fa-check-double"></i> Saglabāt & Iesniegt</button>
    <?php } ?>
    <div class="dropdown">
  <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Darbības
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#"><i class="fa-solid fa-print"></i> Drukāt</a></li>
    <li><a class="dropdown-item" href="#"><i class="fa-solid fa-file-excel"></i> Eksportēt uz Excel</a></li>
    <li><a class="dropdown-item" href="#">...</a></li>
  </ul>
</div>
    <button class="btn btn-outline-danger ms-3 ms-auto"><i class="fa-solid fa-trash-can"></i> Dzēst</button>
</div>