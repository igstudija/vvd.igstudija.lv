new Tabulator("#info-par-degv-staciju-table", {

    layout: "fitColumns",
    //layoutColumnsOnNewData:true,
    resizableRows: true,
    responsiveLayout: true,
    columnDefaults: {
        tooltip: true,
    },

    "columns": [
        {
            "title": "Npk",
            "field": "npk",
            hozAlign: "center",
            width: 50
        },
        {
            "title": "Rezervuāra tips ",
            "field": "a",
            editor: "select",
            editorParams: {
                values: [
                    "Virszemes",
                    "Pazemes"
                ]}
        },
         {
            "title": "Tilpums, m3",
            "field": "b",
            editor: "number",
        },
         {
            "title": "Degvielas veids",
            "field": "c",
            editor: "select",
            editorParams: {
                values: [
                    "Dīzeļdegviela",
                    "Benzīns",
                    "Škidrinātā naftas gāze",
                    "Dabasgāze"
                ]}
        },
        {
            "title": "Vai ir monitoringa tīkls? ",
            "field": "d",
            editor: "select",
            editorParams: {
                values: [
                    "Jā",
                    "Nē"
                ]}
        },
        {
            "title": "Vai ir pretinfiltrācijas segums?",
            "field": "e",
            editor: "select",
            editorParams: {
                values: [
                    "Jā",
                    "Nē"
                ]}
        },
        {
            "title": "Vai ir tvaika uztveršanas sistēma?",
            "field": "f",
            editor: "select",
            editorParams: {
                values: [
                    "Jā",
                    "Nē"
                ]}
        },
        {
            "title": "Vai ir tvaika savākšanas sistēma?",
            "field": "g",
            editor: "select",
            editorParams: {
                values: [
                    "Jā",
                    "Nē"
                ]}
        },
        

        {
            "title": "",
            "field": "darbibas",
            width: 50,
            hozAlign: "center",
            headerSort: false,
            formatter: function (cell) {
                return '<button class="btn btn-sm btn-success"><i class="fa-solid fa-pencil tone"></i></button>';
            }
        }
    ],
    "data": [ 
    
        {
            "npk":1,
            "a":"Virszemes",
            "b":"10000",
            "c":"Benzīns",
            "d":"Jā",
            "e":"Jā",
            "f":"Jā",
            "g":"Jā"
        }
    ]
});
