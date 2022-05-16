using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Collections.Generic;
using ARMdps.Models;
using System.Text.Json;
using System.Linq;
using ARMdps.Repositories.Interfaces;


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
        public JsonResult GetRegion(int id)
        {
            return new JsonResult(_regionRepository.JSRegionGet(id));
        }
        [HttpGet]
        public void GetRegions(RegionModel region)
        {
            _regionRepository.RegionUpdate(region);
        }
    }
}
