export const datatren = {
    type: "bar",
    data: {
        labels: null,
        datasets: [
            {
                label: "Karbon Tanaman",
                data: null,
                borderColor: "#F9A825",
                borderWidth: 3,
                fill: false
            },
            {
                label: "Karbon Tanah",
                data: null,
                borderColor: "#00B0FF",
                borderWidth: 3,
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        padding: 25
                    }
                }
            ]
        }
    }
};

export default datatren;