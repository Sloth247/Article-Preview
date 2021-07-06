const popup = document.querySelector('.window');
const shareBtn = document.querySelector('.btn-share');

shareBtn.addEventListener('click', function () {
  popup.classList.toggle('hidden');
});
