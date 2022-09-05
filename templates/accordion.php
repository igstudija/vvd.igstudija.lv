<div class="accordion accordion-flush" id="accordion-<?php echo $accordion; ?>">
  
   <?php foreach($accordions as $accordion_item){?> 
    <div class="accordion-item">
    <h2 class="accordion-header" id="<?php echo $accordion_item["section"]; ?>">
      <button 
          class="accordion-button <?php echo $accordion_item["collapsed"]; ?>" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#id-<?php echo $accordion_item["section"]; ?>" 
          aria-expanded="false" 
          aria-controls="id-<?php echo $accordion_item["section"]; ?>"
          >
        <?php echo $accordion_item["title"]; ?>
      </button>
    </h2>
    <div 
        id="id-<?php echo $accordion_item["section"]; ?>" 
        class="accordion-collapse collapse <?php echo $accordion_item["show"]; ?>" 
        aria-labelledby="heading-<?php echo $accordion_item["section"]; ?>" 
       <?php /* data-bs-parent="#accordion-<?php echo $accordion; ?>"*/?>
        >
      <div class="accordion-body">
        
              <?php 
              if(file_exists('components/accordion-parts/'.$accordion_item["section"].'.php')){
              include('components/accordion-parts/'.$accordion_item["section"].'.php');
              }
              ?>
          
      </div>
    </div>
  </div>
   <?php } ?>
    
</div>