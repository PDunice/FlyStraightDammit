export interface IchartOptions {
    title :{ text: string};
    animationEnabled: boolean;
    data:[data];
    axisY?: {maximum:number, minimum:number}
}

export interface data {
    type: string;
    dataPoints: Array<dataPoint>
}


export interface dataPoint {
    label:string;
    x?:number;
    y: number;
}