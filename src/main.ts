// import CanvasJS from canvasjs";
import { IchartOptions, dataPoint } from "./interface";



const botaoFly = document.getElementById("fly") as HTMLButtonElement;
let chartOptions!: IchartOptions;

let eixoY: Array<number> = [...Array(1000)].map(() => 1);
let eixoX: Array<number> = [...Array(1000)].map(() => 1);



botaoFly.addEventListener('click', () => fly());

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
            montarGrafico()
        }
    }
}

function montarGrafico() {
    const dataPoint: dataPoint[] = eixoY.map((dataY, index) => {
        return { label: 'teste', y: dataY, x: eixoX[index] }
    })

    var chart  = new CanvasJS.Chart("chartContainer", {
        
            title: {
                text: "Fly Straight Dammit"
            },
            animationEnabled: true,
            data: [{
                type: "scatter",
                dataPoints: dataPoint
            }],
    })
    chart.render();

    console.log("chartOptions", chartOptions);

}





