new Tabulator("#atkartoti-lietots-table", {
    layout: "fitColumns",

    "columns": [
        {
            "title": "Tā komersanta nosaukums, reģistrācijas numurs un adrese, kas izsniedzis dokumentu", 
            "field": "aa"},
        {
            "title": "Dokumentā norādītais izlietotā iepakojuma materiāla veids", 
            "field": "ba"},
        {
            "title": "Apjoms, kas realizēts atkārtotai lietošanai", 
            "field": "ca"},
        {
            "title": "Laikposms, par kuru izsniegts apliecinājums", 
            "field": "da"},
        {
            "title": "Dokumenta izsniegšanas datums", 
            "field": "ea"},

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