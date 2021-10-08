let bostonJson = fetch('https://pollysnips.s3.amazonaws.com/bostonEmployeeSalaries.json').then(response => response.json());

export { bostonJson };