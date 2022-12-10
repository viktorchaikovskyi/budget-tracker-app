function show(element) {
    element.classList.remove("hidden");
};

function hide(elementsArray) {
    elementsArray.forEach(element => {
        element.classList.add("hidden");
    });
};

function active(element) {
    element.classList.add("active");
};

function inactive(elementsArray) {
    elementsArray.forEach(element => {
        element.classList.remove("active");
    });
};