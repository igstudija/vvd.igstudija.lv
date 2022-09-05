new Tabulator("#kopsavilkums-table", {
    columnDefaults:{
        headerTooltip:true,
      
    },
    layout: "fitColumns",
    "columns": [
        {
            "title": "Iepakojuma un vienreiz lietojamo trauku materiāla veids",
            "field": "a"},
        {
            "title": "Radītais izlietotā iepakojuma un vienreiz lietojamo trauku daudzums",
            "field": "a"},
        {
            "title": "Latvijas Republikas teritorijā savāktais izlietotā iepakojuma un vienreiz lietojamo trauku daudzums pārskata gadā",
            "field": "a"},
        {
            "title": "Reģenerācijai/ pārstrādei sagatavotais izlietotā iepakojuma un vienreiz liet. trauku daudzums pārskata gadā",
            "field": "a"},
        {
            title: "Pārstrādāts/ Reģenerēts LR teritorijā",
            "columns": [

                {
                    "title": "Materiālu pārstrāde",
                    "field": "bx"
                },
                {
                    "title": "Cita veida pārstrāde",
                    "field": "bx"
                },
                {
                    "title": "Citi reģenerācijas veidi",
                    "field": "bx"
                },
                {
                    "title": "Sadedzināšana ar enerģijas atgūšanu",
                    "field": "bx"
                }
            ]},
        {
            title: "Pārstrādāts/ Reģenerēts ārvalstīs",
            "columns": [

                {
                    "title": "Materiālu pārstrāde",
                    "field": "bx"
                },
                {
                    "title": "Cita veida pārstrāde",
                    "field": "bx"
                },
                {
                    "title": "Citi reģenerācijas veidi",
                    "field": "bx"
                },
                {
                    "title": "Sadedzināšana ar enerģijas atgūšanu",
                    "field": "bx"
                }

            ]},
        {
            title: "Kopējais iepakojuma daudzums",
            "columns": [

                {
                    "title": "Pārstrādāts (kg)",
                    "field": "bx"
                },
                {
                    "title": "Pārstrādāts (%)",
                    "field": "bx"
                },
                {
                    "title": "Reģenerēts (kg)",
                    "field": "bx"
                },
                {
                    "title": "Reģenerēts (%)",
                    "field": "bx"
                },
                {
                    "title": "Kopā (kg)",
                    "field": "bx"
                },
                {
                    "title": "Kopā (%)",
                    "field": "bx"
                }]
        },
        {
            "title": "Kopējais eksportētais atkritumu daudzums (kg)",
            "field": "bx"
        },
        {
            title: "Mērķa sasniegšanas novērtējums",
            "columns": [

                {
                    "title": "Reģenerācijai (t.sk.pārstrādei)",
                    "field": "bx"
                },
                {
                    "title": "Pārstrādei",
                    "field": "bx"
                }


            ]}
    ],
    "data": [

    ]
});




