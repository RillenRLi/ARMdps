using Microsoft.AspNetCore.Mvc;
using ARMdps.Repositories.Implimentations;
using ARMdps.Repositories.Interfaces;
using ARMdps.Models;

namespace ARMdps.Controllers
{
    public class RegionController : Controller
    {
        IRegionRepository _repository;
        public RegionController(IRegionRepository regionRepository)
        {
            _repository=regionRepository;
        }
        [HttpPost]
        public IActionResult GetRegionForm(int id)
        {
            return PartialView("_RegionForm", _repository.RegionGet(id));
        }
        [HttpPost]
        public void UpdateRegion(RegionModel model)
        {
            _repository.RegionUpdate(model);
        }
    }
}
