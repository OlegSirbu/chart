jQuery('#instanceType').popSelect({
    showTitle: false,
    placeholderText: 'Click to Add More',
    position: 'bottom'
});

jQuery('#typeMachine').popSelect({
    showTitle: false,
    placeholderText: 'Click to Add More',
    position: 'bottom'
});

jQuery('#region').popSelect({
    showTitle: false,
    placeholderText: 'Click to Add More',
    position: 'bottom'
});

jQuery('#time').popSelect({
    showTitle: false,
    placeholderText: 'Click to Add More',
    position: 'bottom'
});

jQuery('#form').submit(function(ev) {
    ev.preventDefault();
    console.log(jQuery('#form').serializeArray());
});

window.onload = function () {
    var chart = new CanvasJS.Chart("ChartCanvas", {

        title: {
            text: "Charts data"
        },
        axisY: {
            includeZero: false,
            labelFontColor: "#369EAD",
            lineColor: "#369EAD",
            lineThickness: 3
        },
        toolTip: {
            shared: true
        },

        axisY2: {
            includeZero: false,
            labelFontColor: "#C24642",
            lineColor: "#C24642",
            lineThickness: 3

        },
        axisX: {
            lineThickness: 3
        },

        data: [
            {
                type: "stepLine",
                lineThickness: 3,
                dataPoints: [
                    {label: "Mon", y: 20},
                    {label: "Tue", y: 15},
                    {label: "Wen", y: 25},
                    {label: "Thu", y: 30},
                    {label: "Fri", y: 28},
                    {label: "Sat", y: 2},
                    {label: "Sun", y: 21}
                ]
            }
        ]
    });
    chart.render();
};

