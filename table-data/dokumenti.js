new Tabulator("#dokumenti-table", {
    layout: "fitColumns",
    "columns": [
        {
            "title": "Nosaukums",
            "field": "nosaukums",
            
            formatter: function (cell, formatterParams) {
                var value = cell.getValue();
                return "<a href='#'>" + value + "</a>";
                
            }
        },

        {
            "title": null,
            "field": "darbibas",
            width: 50,
            hozAlign: "center",
            formatter: function (cell) {
                return '<button class="btn btn-sm btn-danger"><i class="fa-solid fa-trash-can"></i></button>';
            }
        }
    ],
    "data": [
        {
            "nosaukums": "Kaut kāds dokumenta nosaukums"

        },
        {
            "nosaukums": "Izziņa"
        }
    ]
});