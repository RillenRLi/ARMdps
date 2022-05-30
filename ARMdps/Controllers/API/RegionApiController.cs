using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Collections.Generic;
using ARMdps.Models;
using System.Text.Json;
using System.Linq;
using ARMdps.Repositories.Interfaces;
using Newtonsoft.Json.Linq;

namespace ARMdps.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegionApiController : ControllerBase
    {
        private readonly IRegionRepository _regionRepository;
        public RegionApiController(IRegionRepository regionRepository)
        {
            _regionRepository = regionRepository;
        }
        
        [HttpGet("{id}")]
        public RegionModel GetRegion(int id)
        {
            return _regionRepository.RegionGet(id);
        }
        [HttpPost("Update")]
        public void UpdateRegion([FromBody] RegionModel region)
        {
            _regionRepository.RegionUpdate(region);
        }
    }
}
