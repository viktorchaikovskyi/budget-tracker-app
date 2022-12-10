// ! ДЛЯ НАВІГАЦІЙНОГО МЕНЮ
// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements = [
    {
        id: 'profile',
        triggerEl: document.querySelector('#profile-tab-example'),
        targetEl: document.querySelector('#profile-example')
    },
    {
        id: 'statistic',
        triggerEl: document.querySelector('#statistic-tab-example'),
        targetEl: document.querySelector('#statistic-example')
    },
    {
        id: 'settings',
        triggerEl: document.querySelector('#settings-tab-example'),
        targetEl: document.querySelector('#settings-example')
    },
    // {
    //     id: 'contacts',
    //     triggerEl: document.querySelector('#contacts-tab-example'),
    //     targetEl: document.querySelector('#contacts-example')
    // }
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




// ! НА ДОХОДИ/ВИТРАТИ

const tabElementsInOut = [
    {
        id: 'expense',
        triggerEl: document.querySelector('#expense-tab'),
        targetEl: document.querySelector('#expense')
    },
    {
        id: 'income',
        triggerEl: document.querySelector('#income-tab'),
        targetEl: document.querySelector('#income')
    }
];

// options with default values
const optionsInOut = {
    defaultTabId: 'expense',
    activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
    inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    onShow: () => {
        console.log('tab is shown');
    }
};

const tabsInOut = new Tabs(tabElementsInOut, optionsInOut);

tabs.show('expense');
// tabs.show('income');

// tabs.getActiveTab('expense')