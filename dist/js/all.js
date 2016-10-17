
var options = {
    width: 300,
    height: 200
};
var data = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
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

console.log('test');