using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Mission.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<product> Get()
        {
            return new List<product>();
        }
    }
}
