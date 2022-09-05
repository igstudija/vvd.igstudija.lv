

new Tabulator("#annex-table", {
    layout: "fitColumns",

    "columns": [
        {
            "title": "Atkritumu veids", 
            "field": "aa"},
        {
            "title": "Nosūtītājs", 
            "field": "ba"},
        {
            "title": "Saņēmējs", 
            "field": "ca"},
        {
            "title": "Dokumenta veids", 
            "field": "da"},
        {
            "title": "Dokumenta numurs", 
            "field": "ea"},
        {
            "title": "Datums", 
            "field": "fa"},
        {
            "title": "Uz pārskatu attiecināmais apjoms (kg)", 
            "field": "ga"},

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