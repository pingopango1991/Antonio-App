document.addEventListener("DOMContentLoaded", () => {
    // Add interactive chart using Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Data Metrics',
                data: [10, 20, 15, 30, 25],
                backgroundColor: 'rgba(0, 84, 166, 0.5)',
                borderColor: 'rgba(0, 84, 166, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
