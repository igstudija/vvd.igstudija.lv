
<div class="menu">


    <div class="logo">
        <a href="/">
            <img src="images/logo.png">
        </a>
       
    </div>

    <ul>

        <?php foreach ($menuitems as $item) { ?>

            <li>
                <a href="<?php echo $item['link']; ?>">
                    <i class="<?php echo $item['icon']; ?>"></i>
                    <?php echo $item['name']; ?>
                </a>
            </li>

        <?php } ?>
    </ul>


    <div class="collapse-menu">
        <i class="fa-solid fa-circle-chevron-left"></i> Sakļaut</div>  

</div>

