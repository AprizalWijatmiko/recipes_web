/* Saat user clicks pada button, toggle antara sembunyikan dan menunjukkan dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Menutup dropdown jika user clicks diluar itu
window.onclick = function(event) {
  if (!event.target.matches('.ph-list')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}