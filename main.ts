import { Serie } from './serie.js';

import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const seassonAverageElm: HTMLElement = document.getElementById("seasson-average")!;

renderSeriesInTable(series);

seassonAverageElm.innerHTML = `${getAverageSeasson(series)}`

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                                <td>${c.name}</td>
                                <td>${c.channel}</td>
                                <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function getAverageSeasson(series: Serie[]): number {
    let averageSeasson: number = 0;
    series.forEach((serie) => averageSeasson = averageSeasson + serie.seasons);
    return averageSeasson / series.length;
  }
