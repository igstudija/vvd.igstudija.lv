
new Tabulator("#atkartoti-lietojamais-iepakojums-table", {
    layout: "fitData",
    "columns": [
        {
            "title": "Atkritumu veids",
            "field": "a"},
        {
            title: "Tirgū pirmo reizi kopā ar preci laistais iepakojums",
            "columns": [
                {
                    "title": "Viss (kg)",
                    "field": "bx"
                },
                {
                    "title": "Viss (vienības)",
                    "field": "ba"
                },
                {
                    "title": "Primārais (kg)",
                    "field": "bc"
                },
                {
                    "title": "Primārais (vienības)",
                    "field": "bb"
                }

            ]
        },
        {
            title: "Tirgū pirmo reizi kopā ar preci laistais atkārtoti lietojamais iepakojums",
            "columns": [
                {
                    "title": "Viss(kg)",
                    "field": "xx"
                },
                {
                    "title": "Primārais (kg)",
                    "field": "zz"
                }

            ]
        },
        {
            title: "Atkārtoti lietojamā iepakojums rotācijas",
            "columns": [
                {
                    "title": "Viss (kg)",
                    "field": "b"},
                {
                    "title": "Viss (skaits)",
                    "field": "c"},
                {
                    "title": "Primārais (kg)",
                    "field": "d"},
                {
                    "title": "Primārais (skaits)",
                    "field": "e"}
            ]
        },
    ],

    "data": [

    ]
});