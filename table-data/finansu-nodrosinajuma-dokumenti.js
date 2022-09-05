
new Tabulator("#finansu-nodrosinajuma-dokumenti-table", {
    layout: "fitColumns",
    //layoutColumnsOnNewData:true,
    resizableRows: true,
    responsiveLayout: true,
    columnDefaults: {
        tooltip: true,
    },

    "columns": [
        {
            "title": "Finanšu nodrošinājuma izsniedzējs",
            "field": "izsniedzejs"},
        {
            "title": "Nodrošinājuma periods (No)",
            "field": "nodrosinajuma-periods-no"},
        {
            "title": "Nodrošinājuma periods (Līdz)",
            "field": "nodrosinajuma-periods-lidz"},
        {
            "title": "Nodrošinājuma apmērs, EUR",
            "field": "nodrosinajuma-apmers"},
        {
            "title": "Dokumenta Nr.",
            "field": "dokumenta-nr"},
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
        {
            "izsniedzejs": "12.12.2022",
            "nodrosinajuma-periods-no": "01.01.2022",
            "nodrosinajuma-periods-lidz": "31.12.2022",
            "nodrosinajuma-apmers": "50000",
            "dokumenta-nr": "5445678",
            "tikai-lasisanai": "Jā"
        }
    ]
});