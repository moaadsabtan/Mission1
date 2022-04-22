const url='https://localhost:7260/api/users';
function addProduct(product){
    const Http = new XMLHttpRequest();
    var products = [];
    Http.open("GET", url);
    Http.HEADERS_RECEIVED(users);
    Http.send();
    Http.onreadystatechange = (e) => {
      products=responsfeText;
    }
    
  }
  function getUsers(){
    const response = await fetch(url);
    const data = await response.json();
    const {id,name,username,password} = data;

    document.getElementById('username').textContent=username;
    document.getElementById('name').textContent=name;
  }

  async function fetchPost()
  {
      try{
          const response = await fetch('https://localhost:7260/api/Users/Posts');

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

  async function updateUsers()
  {
      fetch('https://localhost:7260/api/Users/Put',{
          method : "PUT",
          headers: {
              'Content-type' : 'application/json'
          },
          body : JSON.stringify(
              {
                  "username" : document.getElementById('username'),
                  "name" : document.getElementById('name'),
                  "password": document.getElementById('password')
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

async function deleteUsers()
{
    fetch('https://localhost:7260/api/Users/delete',{
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