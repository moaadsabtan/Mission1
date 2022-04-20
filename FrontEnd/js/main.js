const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';
Http.open("GET", url);
Http.send();
/*
Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}
*/

/**** */
// const verticalNav = document.querySelector('.vertical-nav');
// const body = document.querySelector('body')
// window.addEventListener('scroll',function(e){
//   verticalNav.style.height = window.innerHeight + 'px'
//   //console.log(window.innerHeight)
// });
const updateProductSection  = document.querySelector('#update')
const productsRows = document.querySelectorAll('#table-content tr');
productsRows.forEach(function(row){
  row.addEventListener('click',function(){
    updateProductSection.classList.toggle('show')
  });
});

function Toggle()
{
  var x = document.getElementById("add-show");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

