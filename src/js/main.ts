
interface dataPoint {
    label: string;
    x?: number;
    y: number;
}

let eixoY: Array<number> = [...Array(1000)].map(() => 1);
let eixoX: Array<number> = [...Array(1000)].map(() => 1);

function gcd(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function fly() {
    for (let index = 2; index < 1000; index++) {

        eixoX[index] = index;
        if (gcd(index, eixoY[index - 1]) == 1) {

            eixoY[index] = eixoY[index - 1] + index + 1;
        }

        if (gcd(index, eixoY[index - 1]) > 1) {

            eixoY[index] = eixoY[index - 1] / gcd(index, eixoY[index - 1])
        }
        if (index === 999) {
            renderChart()
        }
    }
}


function renderChart() {

    const dataPoint: dataPoint[] = eixoY.map((dataY, index) => {
        return { label: `${eixoX[index]}`, y: dataY, x: eixoX[index] }
    })
    const chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Fly Straight Dammit"
        },
        data: [{
            type: "scatter",
            color: 'blue',
            dataPoints: dataPoint
        }],
        backgroundColor: 'lightgray'
    });
    chart.render();
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", fly);

