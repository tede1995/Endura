new Chart(document.getElementById("performanceChart"), {
  type: 'line',
  data: {
    labels: [2018, 2019, 2020, 2021, 2022, 2023],
    datasets: [{ 
        data: [100,200,400,300,700,1200],
        label: "FILM",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [150,250,200,400,550,800],
        label: "S&P 500",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [100,200,300,500,300,850],
        label: "NIKKEI 225",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [100,120,200,400,300,350],
        label: "FTSE 100",
        borderColor: "#e8c3b9",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: false,
      text: 'FILM vs. Equities'
    },
    scales: {
      xAxes: [{
          gridLines: {
              display:false
          }
      }],
      yAxes: [{
          gridLines: {
              display:true
          }, 
          ticks: {
            display: false
          }  
      }]
  }
  }
});
