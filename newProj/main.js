

// document.querySelector(".balance-value").innerHTML = prompt("ddtlsnm pначення")
// document.querySelector(".outcome-total").innerHTML = +prompt("ddtlsnm 342pначення")

// ! УСІ ПЕРЕМІННІ


// const balance = document.querySelector("#balance");
const balance = document.getElementById("total-amount");
const chartEl = document.querySelector(".chart");
const totalAmount = document.getElementById("total-amount-value");
const balance2 = document.getElementById("balance2");




const expenseEl = document.getElementById("expense");
const incomeEl = document.getElementById("income");
const allEl = document.getElementById("all");
const balanseEl = document.querySelector(".balance2");

const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");

// ? ВИБРАТИ КНОПКИ
const expenseBtn = document.querySelector(".outcome-tab");
const incomeBtn = document.querySelector(".income-tab");
const allBtn = document.querySelector(".all-tab");

/* const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3"); */

// ? INPUTS
// const addExpense = document.querySelector(".add-expense");
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.getElementById("subcategory-input");
const expenseAmount = document.getElementById("outcome-total");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("subcategory-input");
const incomeAmount = document.getElementById("income-amount-input");

const comment = document.getElementById("comment");
const addPhoto = document.getElementById("dropzone-file");

// const incomeTitle = document.getElementById("income-title-input");

// ? ПРОСЛУХОВУВАЧІ ПОДІЙ
expenseBtn.addEventListener("click", () => {
    show(expenseEl);
    hide([incomeEl, allEl]);
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
});
console.log(expenseBtn);
incomeBtn.addEventListener("click", () => {
    show(incomeEl);
    hide([expenseEl, allEl]);
    active(incomeBtn);
    inactive([expenseBtn, allBtn]);
});
console.log(incomeBtn);
allBtn.addEventListener("click", () => {
    show(allEl);
    hide([incomeEl, expenseEl]);
    active(allBtn);
    inactive([incomeBtn, expenseBtn]);
});
console.log(allBtn);


function show(element) {
    element.classList.remove("hide");
};

function hide(element) {
    elements.forEach(element => {
        element.classList.add("hide");
    });
};
function active(element) {
    element.classList.add("active");
};

function inactive(element) {
    elements.forEach(element => {
        element.classList.remove("active");
    });
};


const clearInput = (inputs) => {
    inputs.forEach(input => {
        input.value = "";
    });
};

/* function updateUI() {
    income = calculateTotal("income", ENTRY_LIST);
    outcome = calculateTotal("outcome", ENTRY_LIST);
    balance = calculateBalance(income, outcome);
} */

// function calculateTotal()

function calculateBalance(income, outcome) {
    return income - outcome;
}


// textarea id="message"
// id="dropzone-file"

// ? Додававння елементів у таблицю
let ENTRY_LIST = [];
// let balance = 0, income = 0, outcome = 0;
const DELETE = "delete", EDIT = "edit";

// LOOK IF THERE IS SAVED DATA IN LOCALSTORAGE
ENTRY_LIST = JSON.parse(localStorage.getItem("entry_list")) || [];
// updateUI();


// const formSetting = document.querySelector("#authentication-modal2")

// const set = document.getElementById("settings-tab-example")


// document.querySelector('balance-value').innerHTML = `${balance.value}`





// ! АКТУАЛЬНА ДАТА В КАЛЕНДАРІ
document.querySelector(".datepicker > input").value = new Date().toLocaleDateString()
// let dataNow = new Date().toLocaleDateString()
// console.log(dataNow);

// ! КНОПКИ

addExpense.addEventListener("click", () => {
    document.querySelector(".outcome-total").innerHTML = `${expenseAmount.value}`;
    if (!expenseAmount.value || !expenseTitle.value) return;
    let expense = {
        type: "expense",
        title: expenseTitle.value,
        amount: parseFloat(expenseAmount.value),
        comment: comment.value
    };
    // expenseAmount.value = ""; expenseTitle.value = ""; comment.value = "";
    ENTRY_LIST.push(expense);

    // updateUI();
    clearInput([expenseTitle, expenseAmount, comment])
});

addIncome.addEventListener("click", () => {
    document.querySelector(".income-total").innerHTML = `${incomeAmount.value}`;
    if (!incomeAmount.value || !incomeTitle.value) return;
    let income = {
        type: "income",
        title: incomeTitle.value,
        amount: parseFloat(incomeAmount.value),
        comment: comment.value
    };
    // incomeAmount.value = ""; incomeTitle.value = ""; comment.value = "";
    ENTRY_LIST.push(income);

    // updateUI();
    clearInput([incomeTitle, incomeAmount, comment]);
});

// LOOK IF THERE IS SAVED DATA IN LOCALSTORAGE
// ENTRY_LIST = JSON.parse(localStorage.getItem("entry_list")) || [];
// updateUI();

// document.querySelector('.add-outcome').addEventListener("click", () => {
//     document.querySelector(".outcome-total").innerHTML = `${incomeAmount.value}`
// });



// updateUI();
// clearInput([incomeTitle, incomeAmount])



/* addExpense.addEventListener("click", () => {
    if(!expenseTitle.value || expenseAmount.value) return;
    let expense = {
        type: "expense",
        title: expenseTitle.value,
        amount: parseFloat(expenseAmount.value),
    };
    ENTRY_LIST.push(expense);
    updateUI();
    clearInput([expenseTitle, expenseAmount])
}); */


// window.localStorage

document.querySelector('.total-balance').addEventListener("click", () => {
    // balance.innerHTML = localStorage.getItem("value"); 
    localStorage.setItem("value", incomeAmount.value);
    if (!incomeAmount.value || window.localStorage)
        return document.querySelector("#total-amount").innerHTML = parseInt(localStorage.getItem("value"));
    // document.querySelector("#balance").innerHTML = `${incomeAmount.value}`;
    incomeAmount.value = ""; incomeTitle.value = ""; comment.value = "";


    // balance.innerHTML = () => {
    //     localStorage.setItem("value", incomeAmount.value)
    // };

});

let outcomeTotal = document.querySelector('.outcome-total').innerHTML;
let incomeTotal = document.querySelector('.income-total').innerHTML;

balanseEl.innerHTML = parseInt(outcomeTotal) - parseInt(incomeTotal);


/* document.querySelector(".delete-item").addEventListener("click", () => {
    document.body.classList.add("overflow-hidden");
    document.querySelector("#popup-modal").classList.toggle("hidden");
    document.querySelector("#popup-modal").getAttribute(role="dialog");
    document.querySelector("#popup-modal").toggleAttribute("aria-modal", "true")

    document.querySelector("#popup-modal").classList.add("flex");
}); */





// ! ВИКЛИК МЕНЮ "НАЛАШТУВАННЯ"
document.getElementById('settings-tab-example').addEventListener("click", () => {
    document.body.classList.add("overflow-hidden");
    document.querySelector("#authentication-modal2").classList.remove("hidden");
    document.querySelector("#authentication-modal2").classList.add("flex");

});


// ! Поп-ап вікно підтвердження змін
document.getElementById('save-changes').addEventListener("click", () => {
    // document.body.classList.add("overflow-hidden");
    // document.querySelector("#popup-modal").classList.toggle("hidden");
    // document.querySelector("#popup-modal").classList.add("flex");
    localStorage.setItem("value", totalAmount.value);
    console.log(localStorage.getItem("value"));
    document.querySelector(".balance-value").innerHTML = `${totalAmount.value}`;
    document.querySelector(".income-total").innerHTML = `${totalAmount.value}`;
});



// document.querySelector('.delete-item').addEventListener("click", () => {
//     document.body.classList.add("overflow-hidden");
//     document.querySelector("#popup-modal").classList.remove("hidden");
//     document.querySelector("#popup-modal").classList.add("flex");
// });


// ? Local storage
if (window.localStorage) {
    document.querySelector("#total-amount").innerHTML = parseInt(localStorage.getItem("value"))
}