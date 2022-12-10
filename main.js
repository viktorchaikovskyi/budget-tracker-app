
// ! ВИКЛИК МЕНЮ "НАЛАШТУВАННЯ"

let settings = document.getElementById('settings-tab-example');

// settings.onclick = showSettings();

settings.addEventListener("click", () => {
    document.body.classList.add("overflow-hidden");
    document.querySelector("#authentication-modal2").classList.remove("hidden");
    document.querySelector("#authentication-modal2").classList.add("flex");
});

/* setTimeout(function showSettings() {
    document.body.classList.add("overflow-hidden");
    document.querySelector("#authentication-modal2").classList.remove("hidden");
    document.querySelector("#authentication-modal2").classList.add("flex");
}, 1000); */



// document.querySelector(".balance-value").innerHTML = prompt("ddtlsnm pначення")
// document.querySelector(".outcome-total").innerHTML = +prompt("ddtlsnm 342pначення")

// ! УСІ ПЕРЕМІННІ


// const balance = document.querySelector("#balance");
const balance = document.getElementById("total-amount");
const chartEl = document.querySelector(".chart1");
const totalAmount = document.getElementById("total-amount-value");
const balance2 = document.getElementById("balance2");




const expenseEl = document.getElementById("expense");
const incomeEl = document.getElementById("income");
const allEl = document.getElementById("all");
const balanceEl = document.querySelector(".balance2");

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
const expenseTitle = document.getElementById("category-button");
const expenseAmount = document.getElementById("outcome-total");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("category-button");
const incomeAmount = document.getElementById("income-amount-input");

const comment = document.getElementById("comment");
const addPhoto = document.getElementById("dropzone-file");


const expenseTotal = document.querySelector(".expense-total");
const incomeTotal = document.querySelector(".income-total");

const deleteBtn = document.querySelectorAll(".delete-item");
const addAmounts = document.getElementById("add-amounts");

// const incomeTitle = document.getElementById("income-title-input");

// ! АКТУАЛЬНА ДАТА В КАЛЕНДАРІ
let currentDate = document.querySelector(".datepicker > input").value = new Date().toLocaleDateString();
let datePicker = document.querySelector(".datepicker > input");

// ? Додававння елементів у таблицю
let ENTRY_LIST = [];
// balance = 0, income = 0, outcome = 0;
const DELETE = "delete", EDIT = "edit";

// ENTRY_LIST = JSON.parse(localStorage.getItem("entry_list")) || [];



// import { hello } from './module.js';


// ! ----------------- КНОПКИ -----------------

// ! --------- Додати значення Витрати ----------
addExpense.addEventListener("click", () => {
    document.querySelector(".expense-total").innerHTML = `${expenseAmount.value}`;
    if (!expenseAmount.value || !expenseTitle.value) return;

    // ? Зберегти введені дані в списку
    let expense = {
        type: "expense",
        title: expenseTitle.value,
        amount: parseFloat(expenseAmount.value),
        comment: comment.value,
        date: datePicker.value,
    };
    ENTRY_LIST.push(expense);

    updateUI();
    clearInput([expenseTitle, expenseAmount, comment])
});

// ! --------- Додати значення Доходи ----------
addIncome.addEventListener("click", () => {
    document.querySelector(".income-total").innerHTML = `${incomeAmount.value}`;
    if (!incomeAmount.value && !incomeTitle.value) return;
    let income = {
        type: "income",
        title: incomeTitle.value,
        amount: parseFloat(incomeAmount.value),
        comment: comment.value,
        date: datePicker.value,
    };
    ENTRY_LIST.push(income);

    updateUI();
    clearInput([incomeTitle, incomeAmount, comment]);
});


document.querySelector(".balance2").innerHTML = `${balance}`;

// ! ---------- ДОПОМОГА -----------

function updateUI() {
    let income = calculateTotal("income", ENTRY_LIST);
    let expense = calculateTotal("expense", ENTRY_LIST);
    let balance = Math.abs(calculateBalance(income, expense));


    clearElement([expenseList, incomeList, allList]);

    let sign = (income >= expense) ? "₴" : "-₴";

    ENTRY_LIST.forEach((entry, index) => {
        if (entry.type == "expense") {
            showEntry(expenseList, entry.type, entry.title, entry.amount, entry.date, entry.comment, index)
        } else if (entry.type == "income") {
            showEntry(incomeList, entry.type, entry.title, entry.amount, entry.date, entry.comment, index)
        }
        showEntry(allList, entry.type, entry.title, entry.amount, entry.date, entry.comment, index)
    });

    // updateChart(income, outcome);
    localStorage.setItem("entry_list", JSON.stringify(ENTRY_LIST));

    // ? -------- UPDATE UI --------
    balanceEl.innerHTML = `${balance}`;
    // <small>${sign}</small>
    expenseTotal.innerHTML = `${expense}`;
    // <small>₴</small>
    incomeTotal.innerHTML = `${income}`;
    // <small>₴</small>
}

function showEntry(list, type, title, amount, comment, date, id) {
    const entry = ` <div id = "${id}" class="${type} sublist-content bg-white dark:text-white dark:border-gray-600 dark:bg-gray-700 rounded-lg">
                        <p class="entry">${title}</p>
                        <p class="amount-list"><small>₴</small>${amount}</p>
                        <p class="entry">${comment}</p>
                        <p class="entry">${date}</p>
                        <button type="button" id="edit" class="fa-solid fa-pen-to-square dark:text-gray-400"></button>
                        <button type="button" id="delete" class="delete-item fa-solid fa-trash dark:text-gray-400"></button>
                    </div>`;

    // const position = "afterbegin";
    // <p class="entry">${date}</p>

    list.insertAdjacentHTML("afterbegin", entry);
};


/* function showEntry(list, type, title, amount, comment, date, id) {
    const entry = `<tr id = "${id}" class="${type} bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">${title}</th>
        <td class="amount-list py-4 px-3"><small>₴</small>${amount}</td>
        <td class="py-4 px-4">${comment}</td>
        <td class="py-4 px-6">${date}</td>
        <td><button type="button" id="edit" class="py-4 px-3 fa-solid fa-pen-to-square dark:text-gray-400"></button></td>
        <td><button type="button" id="delete" class="py-4 pl-3 pr-6 delete-item fa-solid fa-trash dark:text-gray-400"></button></td>
    </tr>`;

list = document.querySelector("table > tbody");
list.insertAdjacentHTML("afterbegin", entry);
} */

// let changeCurrency

/* <td class="py-4 px-6 text-right">
    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
</td> */


function clearElement(elements) {
    elements.forEach(element => {
        element.innerHTML = "";
    })
}

function calculateTotal(type, list) {
    let sum = 0;
    list.forEach(entry => {
        if (entry.type == type) {
            sum += entry.amount;
        }
    })
    return sum;
}

function calculateBalance(income, expense) {
    return income - expense;
}

function clearInput(inputs) {
    inputs.forEach(input => {
        input.value = "";
    });
};



// ! ------- переключення вкладок -------
function show(elementsArray) {
    elementsArray.forEach(element => {
        element.classList.remove("hidden");
    });
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


//Function To Create List
/* const listCreator = (expenseName, expenseValue) => {
    let sublistContent = document.createElement("div");
    sublistContent.classList.add("sublist-content", "flex-space");
    list.appendChild(sublistContent);
    sublistContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`;
    let editButton = document.createElement("button");
    editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
    editButton.style.fontSize = "1.2em";
    editButton.addEventListener("click", () => {
      modifyElement(editButton, true);
    });
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
    deleteButton.style.fontSize = "1.2em";
    deleteButton.addEventListener("click", () => {
      modifyElement(deleteButton);
    });
    sublistContent.appendChild(editButton);
    sublistContent.appendChild(deleteButton);
    document.getElementById("list").appendChild(sublistContent);
  }; */



// LOOK IF THERE IS SAVED DATA IN LOCALSTORAGE
ENTRY_LIST = JSON.parse(localStorage.getItem("entry_list")) || [];
updateUI();


// const formSetting = document.querySelector("#authentication-modal2")

// const set = document.getElementById("settings-tab-example")


// document.querySelector('balance-value').innerHTML = `${balance.value}`


// ! ---------- ПОШУК ЕЛЕМЕНТІВ У ТАБЛИЦІ ----------
document.querySelector("#table-search").oninput = function () {
    let value = this.value.trim();
    let elasticItems = document.querySelectorAll(".list div");
    
    if (value != "") {
        elasticItems.forEach(function (element) {
            let elementSearch = element.innerText.search(value);
            if (elementSearch == -1) {
                element.classList.add("hidden");
                // element.innerHTML = element.innerText;
            } else {
                element.classList.remove("hidden");
                // let str = element.innerText;
                // element.innerHTML = insertMark(str, elementSearch, value.length )
            };
        });
    } else {
        elasticItems.forEach(function (element) {
            element.classList.remove("hidden");
            // element.innerHTML = element.innerText;
        });
    }
};

function insertMark(string, position, len) {
    return string.slice(0, position) + "<mark>" + string.slice(position, position + len) + "</mark>" + string.slice(position + len);
};



// ! -------- СОРТУВАННЯ ---------

const sortByCategoryBtn = document.querySelector(".sort-by-category");
const sortByPriceBtn = document.querySelector(".sort-by-price");
const sortByDateBtn = document.querySelector(".sort-by-date");


/* sortByCategoryBtn.addEventListener("click", function() {
let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((a, b) => a.cells[0].innerHTML < b.cells[0].innerHTML ? 1 : -1);
table.tBodies[0].append(...sortedRows);
}); */

/* sortByPriceBtn.addEventListener("click", function() {
let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((a, b) => a.cells[1].innerHTML > b.cells[1].innerHTML ? 1 : -1);
table.tBodies[0].append(...sortedRows);
});

sortByDateBtn.addEventListener("click", function() {
let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((a, b) => a.cells[2].innerHTML > b.cells[2].innerHTML ? 1 : -1);
table.tBodies[0].append(...sortedRows);
});  */




// let table = document.querySelector("#table");
// let tableArr = table.querySelectorAll('tr');
// console.log(table);

// let sortedRows = Array.from(table.rows);
// arr = sortedRows.slice(1);
// console.log(arr);
// console.log(document.getElementById("table").rows[1].cells[3].innerHTML); 

// console.table(arr.sort( (a, b) => {
//     a.cells[3].innerHTML > b.cells[3].innerHTML ? 1 : -1; 
// }));
// // console.log(sortedRows.cells[2]);
// arr(table.tBodies[0].append(...sortedRows));

//     let str = a.cells[0].textContent;
//     let str2 = b.cells[0].textContent;
//     return str.localeCompare(str2);
// }));

// console.log(sortedRows);
/* let sortedRows = Array.from(table.rows);
console.log(sortedRows);
let arr = sortedRows.slice(1);
console.log(arr);
document.querySelector(".sort-by-price").addEventListener("click", arr.sort( (a, b) => {
    // let str = a.cells[0].textContent;
    // let str2 = b.cells[0].textContent;
    // return str.localeCompare(str2);

    return b.cells[0].textContent - a.cells[0].textContent;   
})); */
// updateUI();

// amount
// console.log(table.tBodies[0].append(...arr));


// document.querySelector(".sort-by-price").addEventListener("click", ENTRY_LIST.sort(function (a, b) {
//     // if (a.date > b.date) {
//     //     return 1;
//     // }
//     if (a.date < b.date) {
//         return -1;
//     }
//     return updateUI();
// })
// )
/* document.querySelector(".sort-by-price").addEventListener("click", ENTRY_LIST.sort(function (a, b) {
    if (a.amount > b.amount) {
        return 1;
    }
    if (a.amount < b.amount) {
        return -1;
    }
    // return 0
})
) */


// ? ПРОСЛУХОВУВАЧІ ПОДІЙ
expenseBtn.addEventListener("click", () => {
    show([addAmounts, expenseEl, expenseAmount, addExpense]);
    hide([incomeEl, allEl, incomeAmount, addIncome]);
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
});

/* expenseBtn.addEventListener("click", () => {
    show(expenseEl);
    hide([incomeEl, allEl]);
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
}); */

incomeBtn.addEventListener("click", () => {
    show([addAmounts, incomeEl, incomeAmount, addIncome]);
    hide([expenseEl, allEl, expenseAmount, addExpense]);
    active(incomeBtn);
    inactive([expenseBtn, allBtn]);
});

allBtn.addEventListener("click", () => {
    show([allEl]);
    hide([incomeEl, expenseEl, addAmounts]);
    active(allBtn);
    inactive([incomeBtn, expenseBtn]);
});


// deleteItem.addEventListener("click", () => {
//     document.body.classList.add("overflow-hidden");
//     document.querySelector("#popup-modal").classList.toggle("hidden");
//     document.querySelector("#popup-modal").getAttribute(role="dialog");
//     document.querySelector("#popup-modal").toggleAttribute("aria-modal", "true")

//     document.querySelector("#popup-modal").classList.add("flex");
// });





// ! Поп-ап вікно підтвердження змін
document.getElementById('save-changes').addEventListener("click", () => {
    localStorage.setItem("value", totalAmount.value);
    if (!incomeAmount.value || window.localStorage) {
        return document.querySelector("#total-amount").innerHTML = parseInt(localStorage.getItem("value"));
    }
    console.log(localStorage.getItem("value"));
    document.querySelector(".balance-value").innerHTML = `${totalAmount.value}`;
    document.querySelector(".income-total").innerHTML = `${totalAmount.value}`;
    document.querySelector("#authentication-modal2").toggleAttribute("aria-modal", "true");
    document.body.classList.add("overflow-hidden");
});



/* deleteBtn.onclick = function() {
    let sel = document.querySelector("tr");
    for (let i = 0; i < sel.length; i++);
    return sel[i].remove();
    }; */
    // document.body.classList.add("overflow-hidden");
    //     document.querySelector("#popup-modal").classList.remove("hidden");
    //     document.querySelector("#popup-modal").classList.add("flex");


/* deleteBtn.addEventListener("click", function() {
    let sel = document.querySelector(".delete-item").innerHTML;
    for (let i = 0; i < sel.length; i++) {
        sel[i].remove();
    };
}); */


// ! CHARTS



const ctx2 = document.getElementById('chart-2').getContext('2d');
const chart2 = new Chart (ctx2, {
  type: 'bar',
  data: {
    labels: ['Витрати', 'Доходи', 'Баланс'],
    datasets: [{
      label: ['Red', 'Red', 'Red'],
      data: [expenseTotal.innerText, incomeTotal.innerText, balance.innerText],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)'
        ],
      borderWidth: 1
    }],
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

chart2.update()
updateUI();
// chart2.data.datasets[0].data.push(expenseTotal.innerText, incomeTotal.innerText);
// chart2.update()
console.log(chart2.data.datasets[0].data);

/* 
const push = document.getElementById('chart-2');
push(pushValueChart());

function pushValueChart(){
  console.log(chart2.data.datasets[0].data);
//   chart2.data.datasets[0].data.push(7);
//   console.log(chart2.data.datasets[0].data);
  
  chart2.data.datasets[0].data.push(incomeTotal.innerText);
  chart2.data.datasets[0].data.push(balance.innerText);
  chart2.update();
} */




// ? Local storage
if (window.localStorage) {
    document.querySelector("#total-amount").innerHTML = parseFloat(localStorage.getItem("value"))
}

console.log(ENTRY_LIST);