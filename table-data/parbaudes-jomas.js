new Tabulator("#parbaudes-jomas-table", {
    layout: "fitColumns",
    "columns": [
         {
            "title": "Pamatjoma", 
            "field": "pamatjoma"},
        {
            "title": "Apakšjoma", 
            "field": "apaksjoma"},
        
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
            "pamatjoma": "Sadzīves atkritumu apsaimniekošana",
            "apaksjoma": "Sadzīves atkritumi" ,
            "id":11
        },
        {                  
            "pamatjoma": "Lauksaimniecības uzņēmumi C kategorijas dzivnieku novietnes",
            "apaksjoma": "Kūtsmēslu krātuves nav nepieciešamas",
            "id":12
        }
    ]
});