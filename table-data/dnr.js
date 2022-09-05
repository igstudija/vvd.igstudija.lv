
new Tabulator("#dnr-table", {
    layout: "fitColumns",

    "columns": [
        {
            "title": "Iepakojuma veids", 
            "field": "iepakojuma-veids"},
        {
            "title": "Nosaukums", 
            "field": "nosaukums"},
        {
            "title": "Likme", 
            "field": "likme"},
        {
            "title": "Radītais (kg)", 
            "field": "raditais-kg"},
        {
            "title": "DRN (EUR)", 
            "field": "dnr-eur"},
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