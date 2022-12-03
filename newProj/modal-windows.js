// set the modal menu element
const targetEl = document.getElementById('authentication-modal2');

// options with default values
const options = {
  placement: 'bottom-right',
  backdrop: 'dynamic',
  backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
  onHide: () => {
      console.log('modal is hidden');
  },
  onShow: () => {
      console.log('modal is shown');
  },
  onToggle: () => {
      console.log('modal has been toggled');
  }
};

/*
* targetEl: required
* options: optional
*/
const modal = new Modal(targetEl, options);

// show the modal
modal.show();

// hide the modal
modal.hide();

// toggle the modal
modal.toggle();

// true or false
modal.isHidden();