

new Tabulator("#atkritumu-parkrausana-table", {
    layout: "fitColumns",
    "columns": [
         {
            "title": "Pārkraušanas centrs vai stacija", 
            "field": "parkrausanas-centrs-vai-stacija"},
      {
            "title": "Pārkraušanas vieta (adrese)", 
            "field": "parkrausanas-vieta"},
       {
            "title": "Atkritumu kods / nosaukums", 
            "field": "atkritumu-kods-nosaukums"},
         {
            "title": "Apjoms gadā (t)", 
            "field": "atkritumu-apjoms"},
        {
            "title": null, 
            "field": "darbibas",
             width:50,
               hozAlign: "center",
               headerSort: false,
            formatter: function (cell) {
                return '<button class="btn btn-sm btn-success"><i class="fa-solid fa-pencil tone"></i></button>';
            }
        }
    ],
    "data": [
        {                  
            "parkrausanas-centrs-vai-stacija": "Poligons"   ,
               "parkrausanas-vieta":"Zemzariņi, Vecauces pag.",
               "atkritumu-kods-nosaukums":"7656",
               "atkritumu-apjoms":"1000"
            
        },
        {                  
            "parkrausanas-centrs-vai-stacija": "Poligons 2"   ,
               "parkrausanas-vieta":"Brankas, Vecauces pag.",
               "atkritumu-kods-nosaukums":"7656",
               "atkritumu-apjoms":"100"
        }
    ]
});