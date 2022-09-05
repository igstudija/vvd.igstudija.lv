


new Tabulator("#komunikacija-table", {
    layout: "fitColumns",

    "columns": [
        {
            "title": "Pasākuma mērķis", 
            "field": "a"},
        {
            "title": "Pasākuma veids", 
            "field": "b"},
        {
            "title": "Sasniegtā mērķauditorija (skaits)", 
            "field": "c"},
        {
            "title": "Mērķa sasniegšanas veids / Detalizēts pasākuma apraksts un novērtējums", 
            "field": "d"},
        {
            "title": "Pasākuma īstenošanas laiks (datums, periods)", 
            "field": "e"},
        {
            "title": "Saīsināta hipersaite uz pasākuma apliecinājumu", 
            "field": "f"},
        {
            "title": "Pasākuma īstenošanai izlietotais finansējums", 
            "field": "g"},
        {
            "title": "Piezīmes, papildu hipersaites", 
            "field": "h"},
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