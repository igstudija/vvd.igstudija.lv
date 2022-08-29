<div class="header d-flex align-items-center">
    <div  class="me-auto d-flex  align-items-center">
        <h1>Eko Osta, SIA</h1> 

        <button type="button" class="ms-3 btn btn-light"
                data-bs-toggle="tooltip" 
                data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip"
                data-bs-title="Pārslēgt uzņēmumu"  
               
                data-bs-nosaukums ="Mani uzņēmumi"
                data-toggle="modal" 
                data-target="#parslegt-uznemumu"
                
                >
            <i class="fa-solid fa-arrow-right-arrow-left"></i> Pārslēgt
        </button>

        <button type="button" class="ms-1 btn btn-primary-outline" 
                data-bs-toggle="tooltip" 
                data-bs-placement="bottom"
                data-bs-custom-class="custom-tooltip"
                data-bs-title="Pievienot uzņēmumu"
                >
            <i class="fa-solid fa-plus"></i>
        </button>

    </div>


    <div class="right-menu  d-flex">
        <div class="me-3"><a href="" class="btn btn-primary-outline"
                             data-bs-toggle="tooltip" 
                             data-bs-placement="bottom"
                             data-bs-custom-class="custom-tooltip"
                             data-bs-title="Meklēt"
                             ><i class="fa-solid fa-magnifying-glass"></i></a></div>

        <div class="me-3"><a href="" class="btn btn-primary-outline"
                             data-bs-toggle="tooltip" 
                             data-bs-placement="bottom"
                             data-bs-custom-class="custom-tooltip"
                             data-bs-title="Sarakste"
                             ><i class="fa-solid fa-comment"></i></a></div>
        <div class="dropdown">
            <button class="btn btn-primary-outline dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-user"></i>
                Jānis Bērziņš
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-gear"></i> Profils</a></li>
                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-building-user"></i> Mani uzņēmumi</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i> Iziet</a></li>
            </ul>
        </div>
    </div>
</div>



<?php
//modal($modal_id,$modal_title,$modal_size (optional))
modal("parslegt-uznemumu","Pārslēgt uzņēmumu", "modal-lg");?>
