var chart = c3.generate({
    data: {
        columns: [
            ['VAT', 30, 200, 100, 400, 150, 250],
            ['EX VAT', 50, 20, 10, 40, 15, 25]
        ]
    },

    grid: {
        x: {
            show: true
        },
        y: {
            show: true,
        }
    },

    color: {
        pattern: ['skyblue', '#d5e4ec']
    },
     bindto: '#lineChart'
});

var chart = c3.generate({
    data: {
        // iris data from R
        columns: [
            ['EXPECTED VAT', 30],
            ['ACTUAL VAT', 120],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    color: {
        pattern: ['rgba(0,0,0, 0.3)', 'rgba(0,0,0, 0.4)']
    },
    bindto: '#pieChart'
});