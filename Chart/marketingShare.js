const marketingShare = {
  version: 'v1.0',
  publish: '2021/12/31',
  titles: ['排名', '公司名稱', '國別', '市佔率'],
  data: [
    { Rankimg: 1, Company: '台積電', Country: '台灣', Ratio: '53.1' },
    { Rankimg: 2, Company: '三星電子', Country: '韓國', Ratio: '17.3' },
    { Rankimg: 3, Company: '聯電', Country: '台灣', Ratio: '7.2' },
    { Rankimg: 4, Company: '格羅方德', Country: '美國', Ratio: '6.1' },
    { Rankimg: 5, Company: '中芯國際', Country: '中國', Ratio: '5.3' },
    { Rankimg: 6, Company: '華虹半導體', Country: '中國', Ratio: '2.6' },
    { Rankimg: 7, Company: '力積電', Country: '台灣', Ratio: '1.8' },
    { Rankimg: 8, Company: '世界先進', Country: '台灣', Ratio: '1.4' },
    { Rankimg: 9, Company: '高塔半導體', Country: '以色列', Ratio: '1.4' },
    { Rankimg: 10, Company: '東部高科', Country: '南韓', Ratio: '1' },
  ],
};

window.onload = function () {
  createThead(marketingShare);
  createTbody(marketingShare);
  createChart(marketingShare);
  drawPieChart(companies, data);
};

const container = document.createElement('div');
const companies = [],
  data = [];
const table = document.querySelector('table');
const thead = document.createElement('thead');
const theadTr = document.createElement('tr');
const tbody = document.createElement('tbody');

container.classList.add('container', 'container-sm', 'mt-5', 'mb-5');
theadTr.classList.add('text-center');
tbody.classList.add('text-center');

//thead
function createThead(titlesArray) {
  titlesArray.titles.forEach((title) => {
    let th = document.createElement('th');
    th.innerText = title;
    theadTr.appendChild(th);
  });
  thead.appendChild(theadTr);
  table.appendChild(thead);
  container.appendChild(table);
  document.body.appendChild(container);
}

//tbody
function createTbody(RowDataArray) {
  RowDataArray.data.forEach((Rowdata) => {
    let tbodyTr = document.createElement('tr');
    Object.values(Rowdata).forEach((data) => {
      let td = document.createElement('td');
      td.innerText = data;
      tbodyTr.appendChild(td);
    });
    tbody.appendChild(tbodyTr);
    table.appendChild(tbody);
  });
}

//第一個參數為標題陣列, 第二個參數為資料陣列
function drawPieChart(companyArray, dataArray) {
  //Pie Chart圓餅圖
  let ctxPie = document.getElementById('mkShare');
  var pieChart = new Chart(ctxPie, {
    //Chart收取兩個參數：ctxPie、物件({})
    type: 'pie', //可改統計圖類型(參考chartjs)
    data: {
      labels: companyArray, //放標題
      datasets: [
        {
          data: dataArray, //放數值
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255,75,50)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(255, 138, 64)',
            'rgb(142, 65, 64)',
            'rgb(59, 72, 64)',
          ],
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        fontSize: 26,
        text: '2021年全球晶圓代工市佔率%',
      },
      tooltips: {
        mode: 'point',
        intersect: true,
      },
      legend: {
        position: 'bottom',
        labels: {
          fontColor: 'black',
        },
      },
    },
  });
}

//方法一
//     marketingShare.forEach(item =>{
//         companies.push(item.Company);
//         data.push(item.Ratio);
//     });
//     drawPieChart(companies,data);

//方法二
function createChart(dataArray) {
  dataArray.data.forEach((item) => {
    companies.push(item.Company);
    data.push(item.Ratio);
  });
}
