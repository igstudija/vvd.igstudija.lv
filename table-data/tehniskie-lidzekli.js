new Tabulator("#tehniskie-lidzekli-table", {
    layout: "fitColumns",
    "columns": [
         {
            "title": "Tehniskie līdzekļi", 
            "field": "tehniskie-lidzekli"},
        
        {
            "title": "Papildinformācija (modelis u.c.)", 
            "field": "papildinformacija"},
      
       
        {
            "title": null, 
            "field": "darbibas",
              width:50,
               hozAlign: "center",
            formatter: function (cell) {
                return '<button class="btn btn-sm btn-danger"><i class="fa-solid fa-trash-can"></i></button>';
            }
        }
    ],
     "data": [
        {                  
            "tehniskie-lidzekli": "Nosaukums"   ,
            "papildinformacija":"Info"
            
        },
        {                  
            "tehniskie-lidzekli": "Nosaukums"   ,
            "papildinformacija":"Info"
        }
    ]
});