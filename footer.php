
   

    
     <?php $jstime = date("YmdHi", filemtime($_SERVER['DOCUMENT_ROOT'] . "/js/scripts.js")); ?>
     <script src="js/scripts.js?v=<?php echo $jstime; ?>"></script>
  </body>
</html>