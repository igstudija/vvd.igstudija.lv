new Tabulator("#apmaksas-informacija-table", {
    layout: "fitColumns",
    "columns": [
        {
            "title": "Datums", 
            "field": "datums"
         
        },
        {
            "title": "Maksājuma Nr.", 
            "field": "maksajuma-nr"
        },
        {
            "title": "Maksājuma veids", 
            "field": "maksajuma-veids"
        },
        {
            "title": "Statuss", 
            "field": "statuss"
        },
        {
            "title": "Maksātāja nosaukums/vārds, uzvārds ", 
            "field": "maksatajs"
        },
        {
            "title": "Maksātāja Reg.nr./Pers.kods", 
            "field": "reg-nr"
        },
        {
            "title": "Maksātāja konts", 
            "field": "konts"
        },
        {
            "title": "Summa, EUR", 
            "field": "summa"
        },
        {
            "title": "Maksājuma mērķis", 
            "field": "merkis"
        }
    ],

    "data": [
        {                  
            "datums": "12.12.2022",
            "maksajuma-nr": "123",
            "maksajuma-veids": "Pārskaitījums",
            "statuss": "Apmaksāts",
            "maksatajs": "SIA EKO OSTA",
            "reg-nr": "40000000000",
            "konts": "LV23HABA32876785575",
            "summa": "100",
            "merkis": "Par licenci"
        }
    ]
});
