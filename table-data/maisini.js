

new Tabulator("#maisini-table", {
    layout: "fitColumns",

    "columns": [
        {
            "title": "Biezums (mikroni)", 
            "field": "aa"},
        {
            "title": "Masa (kg)", 
            "field": "ba"},
        {
            "title": "Skaits (gab)", 
            "field": "ca"},
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
        
    ]
});