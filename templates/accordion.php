<div class="accordion accordion-flush" id="accordion-<?php echo $accordion; ?>">

    <?php foreach ($accordions as $accordion_item) { ?> 
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

                    <?php if (isset($accordion_item["comments"])) { ?>
                        <span class="comments"><i class="fa-solid fa-comment"></i><?php echo $accordion_item["comments"]; ?></span>
                    <?php } ?>
                    <?php if (isset($accordion_item["status"]) == "ok") { ?>
                        <span class="status"><i class="fa-solid fa-circle-check"></i></span>
                    <?php } ?>

                </button>
            </h2>
            <div 
                id="id-<?php echo $accordion_item["section"]; ?>" 
                class="accordion-collapse collapse <?php echo $accordion_item["show"]; ?>" 
                aria-labelledby="heading-<?php echo $accordion_item["section"]; ?>" 
                <?php /* data-bs-parent="#accordion-<?php echo $accordion; ?>" */ ?>
                >
                <div class="accordion-body">

                    <?php
                    if (file_exists('components/accordion-parts/' . $accordion_item["section"] . '.php')) {
                        include('components/accordion-parts/' . $accordion_item["section"] . '.php');
                    }
                    ?>

                    <?php if (isset($accordion_item["comments"])) { ?>
                        <h3 class="mb-3">Komentāri</h3>

                        <div>   
                            <div>
                                <span class="badge bg-secondary">Jānis Bērziņš, 12.12.2022 plkst.12:34</span>
                            </div>  
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  
                        </div>
                        <hr>
                        <div>   
                            <div>
                                <span class="badge bg-secondary">Jānis Bērziņš, 12.12.2022 plkst.11:04</span>
                            </div>  
                            Lorem ipsum dolor sit amet, consectetur adipiscing.  
                        </div>
                        <hr>
                        <?php form_field('textarea', array('label' => 'Komentārs')); ?>
                        <?php form_field('button', array('name' => "Pievienot", "class" => "btn btn-success mt-2")); ?>

                    <?php } ?>

                    <?php if (isset($accordion_item["status"])) { ?>
                        <hr>
                        <div class="row justify-content-md-center">
                            <div class="col-auto">
                                <?php form_field('checkbox', array('label' => 'Apstiprinu', 'id' => 'apstiprinu', 'checked' => 'checked')); ?>
                            </div>

                        </div>

                    <?php } ?>

                </div>
            </div>
        </div>
    <?php } ?>

</div>