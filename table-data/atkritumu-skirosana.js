
new Tabulator("#atkritumu-skirosana-table", {
    layout: "fitColumns",
    "columns": [
         {
            "title": "Vieta", 
            "field": "atkritumu-savaksanas-vieta"},
      {
            "title": "Adrese", 
            "field": "atkritumu-savaksanas-vietas-adrese"},
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
            "atkritumu-savaksanas-vieta": "Poligons"   ,
               "atkritumu-savaksanas-vietas-adrese":"Zemzariņi, Vecauces pag.",
               "atkritumu-kods-nosaukums":"7656",
               "atkritumu-apjoms":"1000"
            
        },
        {                  
            "atkritumu-savaksanas-vieta": "Poligons 2"   ,
               "atkritumu-savaksanas-vietas-adrese":"Brankas, Vecauces pag.",
               "atkritumu-kods-nosaukums":"7656",
               "atkritumu-apjoms":"100"
        }
    ]
});