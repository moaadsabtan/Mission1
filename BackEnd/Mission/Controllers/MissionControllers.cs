﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace Mission.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MissionControllers : Controller
    {


        private readonly DataContext _context;
        public MissionControllers(DataContext context)
        {
            _context = context;

         }

        [HttpGet]
        public async Task<ActionResult<List<users>>> Getusers()
        {
            return Ok(await _context.users.ToListAsync());

        }
        [HttpGet]
        public async Task<ActionResult<List<product>>> Getproduct()
        {
            return Ok(await _context.products.ToListAsync());

        }
        [HttpGet]

        public async Task<ActionResult<List<inventory>>> Getinventory()
        {
            return Ok(await _context.inventory.ToListAsync());  

        }


        [HttpGet]
        public async Task<ActionResult<users>> GetuserbyID(int id)
        {
            var user = await _context.users.FindAsync(id);
            if (user == null)
                return BadRequest("user not found");
            return Ok(user);

        } 

        [HttpGet]
        public async Task<ActionResult<product>> GetproductbyID(int id)
        {
            var product = await _context.products.FindAsync(id);    
            if (product== null)
                return BadRequest("user not found");
            return Ok(product);

        }
        [HttpGet]

        public async Task<ActionResult<inventory>> GetInventory(int id)
        {
            var inventory = await _context.inventory.FindAsync(id); 
            if (inventory == null)
                return BadRequest("user not found");
            return Ok(inventory);

        }

        [HttpPost]
        public async Task<ActionResult<List<users>>> Adduser(users user)
        {
          _context.users.Add(user);
            await _context.SaveChangesAsync();
            return Ok(await _context.users.ToListAsync());


        }

        [HttpPost]

        public async Task<ActionResult<List<product>>>Addproduct(product product)
        {
            _context.products.Add(product);
            await _context.SaveChangesAsync();
            return Ok(await _context.products.ToListAsync());

        }

        [HttpPost]
        public async Task<ActionResult<List<inventory>>> Addinventory(inventory inv)
        {
        _context.inventory.Add(inv);
            await _context.SaveChangesAsync();
            return Ok(await _context.inventory.ToListAsync());  

        }
        [HttpPut]
        public async Task<ActionResult<List<users>>> updateUser(users requeset)
        {
            var dbUser = await _context.users.FindAsync(requeset.id);
            if (dbUser== null)
                return BadRequest("user not found");

         dbUser.name= requeset.name;
            dbUser.username = requeset.username;
            dbUser.password = requeset.password;

            await _context.SaveChangesAsync();
            return Ok(await _context.users.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<product>>> updateProduct(product requeset)
        {
            var product = await _context.products.FindAsync(requeset.Id);
            return BadRequest("user not found");

            product.name = requeset.name;
            product.code = requeset.code;
            product.date = requeset.date;
            await _context.SaveChangesAsync();
            return Ok(await _context.products.ToListAsync());
        }

        // error's 
        [HttpPut]
        public async Task<ActionResult<List<inventory>>> updateinventory(inventory requeset)
        {
            var invs = await _context.inventory.FindAsync(requeset.id);
            return BadRequest("user not found");
            await _context.SaveChangesAsync();
            return Ok(await _context.inventory.ToListAsync());
        }




        [HttpDelete ("{id}")]
        public async Task<ActionResult<List<users>>> DeleteUser(int  id)
        {
            var user = await _context.users.FindAsync(id);
            if (user == null)
                return BadRequest("user not found");
             _context.users.Remove(user);
            await _context.SaveChangesAsync();
            return Ok(await _context.users.ToListAsync());
       
        }

        [HttpDelete ("{code}")]
        public async Task<ActionResult<List<product>>> DeleteProduct(int code)
        {
            var product = await _context.products.FindAsync(code);
                return BadRequest("user not found");
            _context.products.Remove(product);
            await _context.SaveChangesAsync();
            return Ok(await _context.products.ToListAsync());
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<inventory>>> DeleteInventory(int id)
        {
            var inventory = await _context.inventory.FindAsync(id);
            return BadRequest("inventory not found");
            _context.inventory.Remove(inventory);
            return Ok(await _context.inventory.ToListAsync());

        }




    }
}
