new Tabulator("#parbaudes-veiceji-table", {
    layout: "fitColumns",
    "columns": [
        {
            "title": "VVD inspektors",
            "field": "vards"
        },
        {
            "title": "Amats",
            "field": "amats"
        },
        {
            "title": "Apliecības Nr.",
            "field": "apliecibas-nr"
        },
        {
            "title": "Darbības",
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
            "vards": "Jānis Bērziņš",
            "amats": "Vecākais inspektors",
            "apliecibas-nr": "8765678765"
        },
        {
            "vards": "Anna Kalna",
            "amats": "Vecākais inspektors",
            "apliecibas-nr": "8765678765"
        }
    ]
});
