new Tabulator("#versijas-table", {
    layout: "fitColumns",
    "columns": [
        {
            "title": "Pievienoja",
            "field": "pievienoja"},

        {
            "title": "Datums un laiks",
            "field": "datums-un-laiks"},
        {
            "title": "Komentārs",
            "field": "komentars"},

        {
            "title": "Datne",
            "field": "datne",
            formatter: function (cell, formatterParams) {
                var value = cell.getValue();
                return "<a href='#'>" + value + "</a>";

            }}
    ],
    "data": [
        {
            "pievienoja": "Liena Kadaga",
            "datums-un-laiks": "12.12.2022 11:54",
            "komentars": "Komentārs",
            "datne": "<a href='#'>datnes_nosaukums.pdf</a>"

        },
        {
            "pievienoja": "Alfrēds Kalniņš",
            "datums-un-laiks": "11.12.2022 12:33",
            "komentars": "Komentārs",
            "datne": "<a href='#'>datnes_nosaukums.pdf</a>"

        }
    ]
});