using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace ARMdps.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        [HttpPost]
        public IActionResult TestMethod()
        {
            var jsonStraem = Request.Body;
            byte[] BMas = new byte[jsonStraem.Length];
            jsonStraem.Read(BMas, 0, BMas.Length);
            string jsonStr = Encoding.UTF8.GetString(BMas);
            return Ok();
        }       
    }
}
