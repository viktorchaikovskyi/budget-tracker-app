

// document.querySelector(".balance-value").innerHTML = prompt("ddtlsnm pначення")
// document.querySelector(".outcome-total").innerHTML = prompt("ddtlsnm pначення")


// ! УСІ ПЕРЕМІННІ


const balance = document.getElementById("total-amount").value;
const chartEl = document.querySelector(".chart");

const addIncome = document.querySelector(".add-income");
// const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

const clearInput = (inputsArray) => {
    inputsArray.forEach(input => {
        input.value = "";
    });
};


// textarea id="message"
// id="dropzone-file"

// ? Додававння елементів у таблицю
let ENTRY_LIST = [];

addIncome.addEventListener("click", () => {
    if( !incomeAmount.value) return; // !incomeTitle.value ||
    let income = {
        type: "income",
        // title: incomeTitle.value,
        amount: parseFloat(incomeAmount.value),
    };
    ENTRY_LIST.push(income);
    // updateUI();
    // clearInput([incomeTitle, incomeAmount])
});

// addExpence.addEventListener("click", () => {
//     if(!expenceTitle.value || expenceAmount.value) return;
//     let expence = {
//         type: "expence",
//         title: expenceTitle.value,
//         amount: parseFloat(expenceAmount.value),
//     };
//     ENTRY_LIST.push(expence);
//     updateUI();
//     clearInput([expenceTitle, expenceAmount])
// });



// ! ЗМІНА ТЕМИ
// function runDarkMode() {
//     let mode = document.getElementById("dark-mode");
//     if (mode.in == false)

// function runDarkMode() {
//     document.body.classList.add("dark:", "bg-gray-800");
// }
// (document.body.class("dark:", "bg-gray-800")



// ! ДЛЯ НАВІГАЦІЙНОГО МЕНЮ

// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements = [
    {
        id: 'profile',
        triggerEl: document.querySelector('#profile-tab-example'),
        targetEl: document.querySelector('#profile-example')
    },
    {
        id: 'dashboard',
        triggerEl: document.querySelector('#dashboard-tab-example'),
        targetEl: document.querySelector('#dashboard-example')
    },
    {
        id: 'settings',
        triggerEl: document.querySelector('#settings-tab-example'),
        targetEl: document.querySelector('#settings-example')
    },
    {
        id: 'contacts',
        triggerEl: document.querySelector('#contacts-tab-example'),
        targetEl: document.querySelector('#contacts-example')
    }
];

// options with default values
const options = {
    defaultTabId: 'profile',
    activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
    inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    onShow: () => {
        console.log('tab is shown');
    }
};

/*
* tabElements: array of tab objects
* options: optional
*/
const tabs = new Tabs(tabElements, options);


// ? shows another tab element
tabs.show('profile');
// tabs.show('dashboard');
// tabs.show('settings');
// tabs.show('contacts');

// ? get the tab object based on ID
// tabs.getTab('contacts')
// tabs.getTab('dashboard')
// tabs.getTab('settings')
// tabs.getTab('profile')

// ? get the current active tab object
// tabs.getActiveTab('settings')


// const formSetting = document.querySelector("#authentication-modal2")

// const set = document.getElementById("settings-tab-example")


// document.querySelector('balance-value').innerHTML = `${balance.value}`



document.getElementById('settings-tab-example').addEventListener("click", () => {
    // document.getElementById("settings-tab-example").innerHTML = `<div class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="settings-example"  role="tabpanel"
    // aria-labelledby="settings-tab-example"><h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Початкові налаштування</h3></div>`
    document.body.classList.add("overflow-hidden");
    document.querySelector("#authentication-modal2").classList.remove("hidden");
    document.querySelector("#authentication-modal2").classList.add("flex");

});

// ! Поп-ап вікно підтвердження змін
document.getElementById('save-changes').addEventListener("click", () => {
    document.body.classList.add("overflow-hidden");
    document.querySelector("#popup-modal").classList.remove("hidden");
    document.querySelector("#popup-modal").classList.add("flex");
    document.querySelector('.balance-value').innerHTML = `${balance}`;
});
document.querySelector('.delete-item').addEventListener("click", () => {
    document.body.classList.add("overflow-hidden");
    document.querySelector("#popup-modal").classList.remove("hidden");
    document.querySelector("#popup-modal").classList.add("flex");
});

document.querySelector(".datepicker > input").value = new Date().toLocaleDateString()
// let dataNow = new Date().toLocaleDateString()
// console.log(dataNow);

document.querySelector('.add-income').addEventListener("click", () => {
    document.querySelector(".outcome-total").innerHTML += `${Number(incomeAmount.value)}`
});
