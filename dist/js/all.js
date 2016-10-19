var options = {
    width: 700,
    height: 500
};
var data = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    series: [
        [5, 2, 4, 2, 0],
        [15, 32, 24, 12, 20],
        [15, 32, 24, 12, 20],
        [15, 22, 25, 15, 30]
    ]
};

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
new Chartist.Line('.ct-chart', data,options);

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

jQuery(function () {
    jQuery('#datetimepicker1').datetimepicker({icons: {
        time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-arrow-up",
            down: "fa fa-arrow-down"
        }}
    );
    jQuery('#datetimepicker2').datetimepicker({
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-arrow-up",
            down: "fa fa-arrow-down"
        },
        useCurrent: false //Important! See issue #1075
    });
    jQuery("#datetimepicker1").on("dp.change", function (e) {
        $('#datetimepicker2').data("DateTimePicker").minDate(e.date);
    });
    jQuery("#datetimepicker2").on("dp.change", function (e) {
        $('#datetimepicker1').data("DateTimePicker").maxDate(e.date);
    });
});