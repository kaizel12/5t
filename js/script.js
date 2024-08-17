var pages = ['halaman1', 'halaman2', 'halaman3', 'halaman4', 'halaman5'];

function klikMenu() {
  document.querySelector('.dalemnya_kontener').classList.toggle('buka_menu');
}

function PindahKeHalaman(page) {
  var dalemnya_kontener = document.querySelector('.dalemnya_kontener');
  var sections = document.querySelectorAll('.dalemnya_halaman');
  sections.forEach((section, index) => {
    section.classList.remove('before', 'after');
    if (index > page) {
      section.classList.add('after');
    }
  });
  dalemnya_kontener.classList.remove('buka_menu', 'page-halaman1', 'page-halaman2', 'page-halaman3', 'page-halaman4', 'page-halaman5');
  dalemnya_kontener.classList.add('page-' + pages[page]);
}

// Add event listener to the button to start the functionality
document.getElementById('tombol').addEventListener('click', () => {
  PindahKeHalaman(0); // You can change the index to switch to different pages
});
