new Tabulator("#parbaude-piedalijas-table", {
    layout: "fitColumns",
    "columns": [
         {
            "title": "Vārds", 
            "field": "vards"},
        {
            "title": "Uzvārds", 
            "field": "uzvards"},
        {
            "title": "Amats", 
            "field": "amats"},
        {
            "title": "Iestāde/Organizācija", 
            "field": "organizacija"},
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
            "vards": "Jānis",
            "uzvards":"Bērziņš",
            "amats": "Vecākais inspektors" ,
             "organizacija": "SIA Eko osta"    
        },
        {                  
            "vards": "Anna ",
            "uzvards":"Kalna",
            "amats": "Vecākais inspektors" ,
             "organizacija": "SIA Getliņi"    
        }
    ]
});