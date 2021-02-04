document.getElementsByClassName('nav-dropdown');
var els_nav = document.getElementsByClassName('nav-dropdown');
Array.prototype.forEach.call(els_nav, (el) => {
    el.addEventListener('click', () => {
        el.nextSibling.nextSibling.classList.toggle('submenu-hidden');
    })
});

const sidebar_window = document.getElementById('sidebar-window'); // Sidebar
const sidebar_window_close = document.getElementById('sidebar-window-close'); // Sidebar Close
const sidebar_window_button = document.getElementById('sidebar-window-button'); // Sidebar Button
const main_content = document.getElementById('main-content');

sidebar_window_button.addEventListener('click', () => {
    sidebar_window.classList.toggle('sidebar-open');
    main_content.classList.toggle('main-full');
});

sidebar_window_close.addEventListener('click', () => {
    sidebar_window.classList.toggle('sidebar-open');
    main_content.classList.toggle('main-full');
});

// Chart
var ctx_revenue = document.getElementById('canvas-revenue');
var chart_revenue = new Chart(ctx_revenue, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Revenue',
                backgroundColor: '#fff',
                borderColor: '#fff',
                data: [10, 30, 70, 40, 30, 50, 100],
                fill: false,
                pointBorderWidth: 100,
                pointBorderColor: 'transparent',
                pointRadius: 3,
                pointBackgroundColor: 'transparent'
            }
        ]
    },

    // Configuration options go here
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: false,
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        layout: {
            padding: {
                left: -30,
                top: 10,
                bottom: 20
            }
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }
            ], 
            yAxes: [
                {
                    gridLines: {
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }
            ], 
        }
    }
});

const ctx_netincome = document.getElementById('canvas-netincome');
var chart_netincome = new Chart(ctx_netincome, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Net Income',
                backgroundColor: '#fff',
                borderColor: '#fff',
                data: [80, 90, 100, 40, 30, 50, 80],
                fill: false,
                pointBorderWidth: 100,
                pointBorderColor: 'transparent',
                pointRadius: 3,
                pointBackgroundColor: 'transparent'
            }
        ]
    },

    // Configuration options go here
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: false,
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        layout: {
            padding: {
                left: -30,
                top: 10,
                bottom: 20
            }
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }
            ], 
            yAxes: [
                {
                    gridLines: {
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }
            ], 
        }
    }
});

const ctx_finance = document.getElementById('canvas-finance');
var chart_finance = new Chart(ctx_finance, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Finance',
                backgroundColor: '#fff',
                borderColor: '#fff',
                data: [20, 50, 60, 40, 50, 60, 70],
                fill: false,
                pointBorderWidth: 100,
                pointBorderColor: 'transparent',
                pointRadius: 3,
                pointBackgroundColor: 'transparent'
            }
        ]
    },

    // Configuration options go here
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: false,
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        layout: {
            padding: {
                left: -30,
                top: 10,
                bottom: 20
            }
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }
            ], 
            yAxes: [
                {
                    gridLines: {
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }
            ], 
        }
    }
});

const ctx_visitor = document.getElementById('canvas-visitor');
var chart_visitor = new Chart(ctx_visitor, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Visitor',
                backgroundColor: '#fff',
                borderColor: '#fff',
                data: [10, 20, 30, 60, 50, 40, 70],
                fill: false,
                pointBorderWidth: 100,
                pointBorderColor: 'transparent',
                pointRadius: 3,
                pointBackgroundColor: 'transparent'
            }
        ]
    },

    // Configuration options go here
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: false,
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        layout: {
            padding: {
                left: -30,
                top: 10,
                bottom: 20
            }
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }
            ], 
            yAxes: [
                {
                    gridLines: {
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }
            ], 
        }
    }
});

const ctx_transaction = document.getElementById('canvas-transaction');
var chart_transaction = new Chart(ctx_transaction, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Transactions',
                backgroundColor: [
                    'rgba(0, 0, 0, 0.3)',
                    'rgba(0, 0, 0, 0.3)',
                    'rgba(0, 0, 0, 0.3)',
                    '#0dcaf0',
                    '#0d68f0',
                    'rgba(0, 0, 0, 0.3)',
                    'rgba(0, 0, 0, 0.3)'
                ],
                borderColor: '#fff',
                data: [10, 20, 30, 60, 50, 40, 70],
                fill: false,
                pointBorderWidth: 100,
                pointBorderColor: 'transparent',
                pointRadius: 3,
                pointBackgroundColor: 'transparent'
            }
        ]
    },

    // Configuration options go here
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: false,
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        layout: {
            padding: {
                bottom: 10,
            }
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: true
                    }
                }
            ],
        }
    }
});

const ctx_portfolios = document.getElementById('canvas-portfolios');
var chart_portfolios = new Chart(ctx_portfolios, {
    type: 'doughnut',
    data: {
        labels: ['DJI - Dow Jones Industrial Average', 'INX - S&P 500', 'IXIC - Nasdaq Composite', 'RUT - Russel 2000 Index'],
        datasets: [
            {
                backgroundColor: [
                    'rgba(2, 117, 216, 0.7)',
                    'rgba(92, 184, 92, 0.7)',
                    'rgba(91, 192, 222, 0.7)',
                    'rgba(240, 173, 78, 0.7)',
                ],
                data: [30, 50, 20, 40],
            }
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        title: {
            display: false
        },
        layout: {
            padding: {
                top: 20,
                bottom: 20
            },
        }
    }
});