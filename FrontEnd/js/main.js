const Http = new XMLHttpRequest();
const url='https://localhost:7260/api/Product';
var products = [];
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => {
  products=responseText;
}




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

