const ctx = document.getElementById('myChart');

const savingsChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['June', 'July', 'August', 'September', 'October', 'November'],

        datasets: [{
            label: 'Savings Balance',

            data: [180000, 260000, 310000, 470000, 620000, 850000],

            borderColor: '#14B8A6',

            backgroundColor: 'rgba(20, 184, 166, 0.1)',

            borderWidth: 3,

            fill: true,

            tension: 0.4,

            pointRadius: 4,

            pointBackgroundColor: '#14B8A6',

            pointBorderColor: '#ffffff',

            pointBorderWidth: 2
        }]
    },

    options: {
        responsive: true,

        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            },

            tooltip: {
                callbacks: {
                    label: function(context) {
                        return '₦' + context.parsed.y.toLocaleString();
                    }
                }
            }
        },

        scales: {
            y: {
                beginAtZero: true,

                grid: {
                    color: '#EEF2F7'
                },

                ticks: {
                    callback: function(value) {
                        return '₦' + (value / 1000) + 'k';
                    }
                }
            },

            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});


// const ctx = document.getElementById('myChart2');

// const savingsChart = new Chart(ctx, {
//     type: 'line',

//     data: {
//         labels: ['June', 'July', 'August', 'September', 'October', 'November'],

//         datasets: [{
//             label: 'Savings Balance',

//             data: [180000, 260000, 310000, 470000, 620000, 850000],

//             borderColor: '#14B8A6',

//             backgroundColor: 'rgba(20, 184, 166, 0.1)',

//             borderWidth: 3,

//             fill: true,

//             tension: 0.4,

//             pointRadius: 4,

//             pointBackgroundColor: '#14B8A6',

//             pointBorderColor: '#ffffff',

//             pointBorderWidth: 2
//         }]
//     },

//     options: {
//         responsive: true,

//         maintainAspectRatio: false,

//         plugins: {
//             legend: {
//                 display: false
//             },

//             tooltip: {
//                 callbacks: {
//                     label: function(context) {
//                         return '₦' + context.parsed.y.toLocaleString();
//                     }
//                 }
//             }
//         },

//         scales: {
//             y: {
//                 beginAtZero: true,

//                 grid: {
//                     color: '#EEF2F7'
//                 },

//                 ticks: {
//                     callback: function(value) {
//                         return '₦' + (value / 1000) + 'k';
//                     }
//                 }
//             },

//             x: {
//                 grid: {
//                     display: false
//                 }
//             }
//         }
//     }
// });