

new Tabulator("#finansu-plana-izpilde-table", {
    layout: "fitColumns",

    "columns": [
        {
            "title": "Izmaksu veids",
            "field": "aa"
        },
        {
            "title": "Izmaksas (euro)",
            "field": "ba"},

        {
            title: "Lasīšanai",
            field: "lasisanai",
            formatter: "rowSelection",
            width: "100", 
            hozAlign: "center",
            headerSort: false,
            cellClick: function (e, cell) {
                cell.getRow().toggleSelect();
            },
            titleFormatter: function (cell, formatterParams, onRendered)
            {
                cell.getElement().style.textAlign = 'center';
                return '' + cell.getValue()
            }
        }
    ],

    "data": [
        {"aa": "Izmaksu veida nosaukums",
            "ba": "100"
        }
    ]
});
