// Task 1
$('a[href^="https://"]').attr('target', '_blank');

// Task 2
let h2 = $('h2.head').css('background-color', 'green');
h2 = $('.inner').css('font-size', '35px');


// let findDiv = $('h3').next('div').insertBefore('h3')
// $(findDiv).insertBefore('h3');
let divs = $('h3').next('div').css("color", "red"); // css прописав просто для виділення
function moveDiv() {
    for (let i = 0; i < divs.length; i++) {
    $('h3')[i].before(divs[i]);
    }
}
moveDiv()

let disableCheckbox = function() {
$('input[type="checkbox"]').on('change', function() {
    if ($('input:checked').length >= 3) {
        $('[type="checkbox"]').attr('disabled', true);
                }
    });
};
disableCheckbox()