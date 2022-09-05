new Tabulator("#papildinformacija-table", {
    layout: "fitColumns",

    "columns": [
        {
            "title": "Vieta papildinformācijas sniegšanai, brīvā formā", 
            "field": "aa"},
       

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
        {"aa":"informācija par šo un to"}
    ]
});