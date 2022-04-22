const url='https://localhost:7260/api/Product';
function addProduct(product){
    const Http = new XMLHttpRequest();
    var products = [];
    Http.open("GET", url);
    Http.HEADERS_RECEIVED(product);
    Http.send();
    Http.onreadystatechange = (e) => {
      products=responsfeText;
    }
    
  }
  function getProduct(){
    const response = await fetch(url);
    const data = await response.json();
    const {Id ,Code,Name,CategoryType,Date,updateDate} = data;

    document.getElementById('code').textContent=Code;
    document.getElementById('name').textContent=Name;
    document.getElementById('categorytype').textContent=CategoryType;
    document.getElementById('creatindate').textContent=Date;
    document.getElementById('updateDate').textContent=updatedate;
  }

  async function fetchPost()
  {
      try{
          const response = await fetch('https://localhost:7260/api/Product/Posts');

          if(!response.ok)
          {
              throw new Error('Failed to fetch posts');

          }
          return response.json();
      }catch(e)
      {
          console.log(e);
      }
  }

  async function updateProduct()
  {
      fetch('https://localhost:7260/api/Product/Put',{
          method : "PUT",
          headers: {
              'Content-type' : 'application/json'
          },
          body : JSON.stringify(
              {
                  "Code" : document.getElementById('code'),
                  "name" : document.getElementById('name'),
                  "CategoryType" : document.getElementById('category'),
                  "Date" : document.getElementById('creationDate'),
                  "updateDate" : document.getElementById('updateDate')

              }
          )
      })
      .then(res=>{
          if(res.ok)
          {
              console.log('PUT Request successful');

          }
          else{
              console.log("put request failed");
          }
          return res;
      }).then(res => res.json()).catch(Error => console.log(Error))
  }

async function deleteProduct()
{
    fetch('https://localhost:7260/api/Product/delete',{
        method : "PUT",
        headers: {
            'Content-type' : 'application/json'
        },
    }).then (res => {
        if(res.ok)
        {
            console.log("Delete Request succesful");
        }
        else{
            console.log("Delete Request unsuccesful");
        }
        return res;
    }).then(res=>console.log(res));
    
}