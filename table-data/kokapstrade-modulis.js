
new Tabulator("#kokapstrade-modulis-table", {

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
            "title": "Rādītājs",
            "field": "raditajs"
        },
        {
            "title": "Vērtība",
            "field": "vertiba",
            width: 100,
            editor: "select",
            editorParams: {
                values: [
                    "Atbilst",
                    "Neatbilst",
                    "Neattiecas"
                ]}

        },
        {
            "title": "Piezīmes",
            "field": "piezimes",
            editor: "textarea"

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
            "npk": 1,
            "raditajs": "Kaut kāds rādītāja nosaukums ļoti garš un sarežģīts, ka ne izlasīt, ne atcerēties Kaut kāds rādītāja nosaukums ļoti garš un sarežģīts, ka ne izlasīt, ne atcerēties Kaut kāds rādītāja nosaukums ļoti garš un sarežģīts, ka ne izlasīt, ne atcerēties",
            "vertiba": "Atbilst",
            "piezimes": "Pilnīgi noteikti viss ir ok"
        },
        {
            "npk": 2,
            "raditajs": "Kaut kāds rādītāja nevisai garš nosaukums",
            "piezimes": "Pilnīgi noteikti viss ir ok",
            "vertiba": "Neatbilst"
        },
        {
            "npk": 3,
            "raditajs": "Kaut kāds rādītāja nosaukums mazliet atširīgs",
            "vertiba": null,
            "piezimes": null
        },
        {
            "npk": 4,
            "raditajs": "Kaut kāds nosaukums",
            "vertiba": "Neattiecas",
            "piezimes": "nav attiecināms"
        }
    ]
});
