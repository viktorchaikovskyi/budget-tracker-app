const ctx = document.getElementById('chart');

new Chart(ctx, {
  type: 'doughnut',
  data: {

    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  }
});