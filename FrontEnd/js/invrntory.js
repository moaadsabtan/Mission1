const url='https://localhost:7260/api/Inventory';
function addProduct(inventory){
    const Http = new XMLHttpRequest();
    var products = [];
    Http.open("GET", url);
    Http.HEADERS_RECEIVED(inventory);
    Http.send();
    Http.onreadystatechange = (e) => {
      products=responsfeText;
    }
    
  }
  function getInventory(){
    const response = await fetch(url);
    const data = await response.json();
    const {id ,addedDate,AmoutProductQuantity} = data;

    document.getElementById('id').textContent=id;
    document.getElementById('addedDate').textContent=addedDate;
    document.getElementById('quantity').textContent=AmoutProductQuantity;
   
  }

  async function fetchPost()
  {
      try{
          const response = await fetch('https://localhost:7260/api/Inventory/Posts');

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

  async function updateInentory()
  {
      fetch('https://localhost:7260/api/Inventory/Put',{
          method : "PUT",
          headers: {
              'Content-type' : 'application/json'
          },
          body : JSON.stringify(
              {
                  "id" : document.getElementById('id'),
                  "addedDate" : document.getElementById('addedDate'),
                  "AmoutProductQuantity" : document.getElementById('quantity'),

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

async function deleteInventory()
{
    fetch('https://localhost:7260/api/Inventory/delete',{
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