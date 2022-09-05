import jsonData from "./data.json" assert {type:"json"};

const json = jsonData;



const jsonDays = json.map(function(e){
  return e.day;
})


const jsonAmount = json.map(function(e){
  return e.amount;
})


const barCurrentDay = 'hsl(186, 34%, 60%)';
const barDefaultColor = 'hsl(10, 79%, 65%)';
const date = new Date();

const barColors = Array(json.length).fill(barDefaultColor);

barColors[date.getDay() - 1] = barCurrentDay;

const data = {
  labels: jsonDays,
  datasets: [{
    data: jsonAmount,
    backgroundColor: barColors,
    hoverBackgroundColor:['hsl(10, 77%, 75%)'],
    borderRadius: 5,
  }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        onHover:(event, chartElement)=>{
          event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default'
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip:{
              backgroundColor:['hsl(25, 47%, 15%)'],
              callbacks: {
                title: () => null,
                label: function(context) {
                  let label = context.dataset.label || '';

                  if (label) {
                      label += ': ';
                  }
                  if (context.parsed.y !== null) {
                      label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                  }
                  return label;
                },
              },
            }
           
        },
        scales:{
           x:{
            grid: {
                drawOnChartArea:false
              }
           },
           y:{
            display:false,
            grid: {
                drawOnChartArea:false
              }
           }
        
        }
    }
};


Chart.defaults.font.family = 'DM Sans';
Chart.defaults.plugins.tooltip.displayColors = false;
Chart.defaults.plugins.tooltip.xAlign = "center";
Chart.defaults.plugins.tooltip.yAlign = "bottom";

const myChart = new Chart(
    document.getElementById('bar-chart'),
    config
);
