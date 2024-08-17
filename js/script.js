/*Author    : Rio Ludwig Alvino*/
/*Github    : https://github.com/rioprojectx*/
/*Facebook  : https://facebook.com/*/
/*Instagram : https://instagram.com/san.rio31*/
/*Website   : https://wafarifki.tk*/

var pages = ['halaman1', 'halaman2', 'halaman3', 'halaman4', 'halaman5'];

// Toggles the menu visibility
function klikMenu() {
  document.querySelector('.dalemnya_kontener').classList.toggle('buka_menu');
}

// Changes to the specified page
function PindahKeHalaman(page) {
  var dalemnya_kontener = document.querySelector('.dalemnya_kontener');
  var sections = document.querySelectorAll('.dalemnya_halaman');

  // Update sections to reflect the new page
  sections.forEach((section, i) => {
    section.classList.remove('before', 'after');
    if (i > page) {
      section.classList.add('after');
    }
  });

  // Manage class names for page transitions
  dalemnya_kontener.classList.remove('buka_menu', 'page-halaman1', 'page-halaman2', 'page-halaman3', 'page-halaman4', 'page-halaman5');
  dalemnya_kontener.classList.add('page-' + pages[page]);
}
