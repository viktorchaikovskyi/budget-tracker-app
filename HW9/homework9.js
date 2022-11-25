// Task 1
$('a[href^="https://"]').attr('target', '_blank');

// Task 2
let h2 = $('h2.head').css('background-color', 'green');
h2 = $('.inner').css('font-size', '35px');

$('h3').next('div').css("color", "red");
// let findDiv = $('h3').next('div').insertBefore('h3')
// $(findDiv).insertBefore('h3');