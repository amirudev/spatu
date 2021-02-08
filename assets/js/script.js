document.getElementsByClassName('nav-dropdown');
var els_nav = document.getElementsByClassName('nav-dropdown');
Array.prototype.forEach.call(els_nav, (el) => {
    el.addEventListener('click', () => {
        el.nextSibling.nextSibling.classList.toggle('submenu-hidden');
    })
});

document.getElementsByClassName('alert-close-button');
var els_nav = document.getElementsByClassName('alert-close-button');
Array.prototype.forEach.call(els_nav, (el) => {
    el.addEventListener('click', () => {
        el.parentNode.classList.add('hidden');
        setTimeout(() => {
            el.parentNode.style.display = 'none';
        }, 500)
    });
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


// Component Dropdown
var els_nav = document.getElementsByClassName('dropdown-toggle');
Array.prototype.forEach.call(els_nav, (el) => {
    el.addEventListener('click', () => {
        el.nextSibling.nextSibling.style.display = 'inline-block';
    });
});

// Component Modal
var els_nav = document.getElementsByClassName('modal-button');
Array.prototype.forEach.call(els_nav, (el) => {
    el.addEventListener('click', () => {
        el.nextSibling.nextSibling.style.display = 'inline-block';
        var els_nav = document.getElementsByClassName('close-button');
        Array.prototype.forEach.call(els_nav, (el) => {
            el.addEventListener('click', () => {
                el.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
            });
        });
    });
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
                    '#b5e4fe',
                    '#2cb3ff',
                    '#3b89ff',
                    '#0d68f0',
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
        }
    }
});