
new Tabulator("#datis-table", {
    layout: "fitColumns",

    "columns": [
        {
            "title": "Atkritumu veids", 
            "field": "a"},
        {
            "title": "Savācējs", 
            "field": "b"},
        {
            "title": "Latvijā savāktais izlietotā iepakojuma un vienreiz lietojamo trauku daudzums pārskata gadā", 
            "field": "c"},
        {
            "title": "Atkritumu tips", 
            "field": "d"},
        {
            "title": "Komersants, kurš pieņēma atkritumus no Savācēja", 
            "field": "e"},
        {
            "title": "Apsaimniekotāja līdzfinansējums (euro) par savākto apjomu", 
            "field": "f"},
        {
            "title": "Apsaimniekotāja līdzfinansējuma par savākto apjomu saņēmējs – komersanta nosaukums", 
            "field": "g"},
        {
            "title": "Starpnieks", 
            "field": "h"},
        {
            "title": "Laukuma adrese", 
            "field": "i"},
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