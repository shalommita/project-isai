export const datatren = {
    type: "line",
    data: {
        labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        datasets: [
            {
                label: "N",
                data: [30, 92, 45, 83, 79, 96, 50, 80, 71, 89, 63, 82],
                borderColor: "#EB6440",
                borderWidth: 3,
                fill: false
            },
            {
                label: "P",
                data: [40, 82, 52, 83, 79, 56, 40, 100, 65, 82, 70, 96],
                borderColor: "#47b784",
                borderWidth: 3,
                fill: false
            },
            {
                label: "M",
                data: [20, 64, 52, 53, 65, 81, 70, 60, 85, 73, 95, 83],
                borderColor: "#FDFF00",
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