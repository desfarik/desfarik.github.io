const dialog = document.getElementById('dialog');

function openDialog() {
  dialog.style.display = 'flex';
  setTimeout(() => dialog.classList.add('opened'));
}


function closeDialog() {
  dialog.classList.remove('opened');
  setTimeout(() => dialog.style.display = 'none', 200);
}

function submitDialog() {
  closeDialog();
  console.log('submit');
}
