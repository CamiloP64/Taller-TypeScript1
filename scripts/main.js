import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var seasonAverageElm = document.getElementById("season-average");
renderSeriesInTable(series);
seasonAverageElm.innerHTML = "".concat(getAverageSeason(series));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                                <td class="series-name">${c.name}</td> <!-- Clase aplicada aquí -->
                                <td>${c.channel}</td>
                                <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function getAverageSeason(series) {
    var averageSeason = 0;
    series.forEach(function (serie) { return averageSeason = averageSeason + serie.seasons; });
    return averageSeason / series.length;
}
