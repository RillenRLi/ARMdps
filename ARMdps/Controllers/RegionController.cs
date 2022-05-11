using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using ARMdps.Repositories.Interfaces;
using ARMdps.Repositories.Implimentations;
using ARMdps.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ARMdps.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegionController : ControllerBase
    {
        // GET: api/<RegionController>
        private IRegionRepository _regionRepository = new RegionRepository();

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<RegionController>/5
        [HttpGet("{id}")]
        public RegionModel GetRegion(int id)
        {
            return _regionRepository.RegionGet(id);
        }

        // POST api/<RegionController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<RegionController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<RegionController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
