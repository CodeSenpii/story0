
window.addEventListener('DOMContentLoaded', setup);


function setup(){


  var read_btn = document.getElementById('btn-read');
  var cover = document.getElementsByClassName('book-cover');
  console.log(cover[0]);

  read_btn.addEventListener("click", function (){

    cover[0].style.visibility = 'hidden';
  });


}
