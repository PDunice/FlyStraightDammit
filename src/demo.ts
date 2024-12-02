
// // Create a function to render the chart
function renderChart() {
    const chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Simple Line Chart Example"
        },
        data: [{
            type: "line",
            dataPoints: [
                { x: 1, y: 10 },
                { x: 2, y: 15 },
                { x: 3, y: 25 },
                { x: 4, y: 30 },
                { x: 5, y: 28 },
                { x: 6, y: 35 },
                { x: 7, y: 40 }
            ]
        }]
    });
    chart.render();
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", renderChart);