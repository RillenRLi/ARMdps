using Microsoft.AspNetCore.Mvc;
using ARMdps.Repositories.Interfaces;
using ARMdps.Repositories.Implimentations;

namespace ARMdps.Controllers
{
    public class UpdateController : Controller
    {
        private IUpdateRepository _repository;
        public UpdateController(IUpdateRepository updateRepository)
        {
            _repository= updateRepository;
        }
        [HttpPost]
        public IActionResult GetUpdateTable()
        {
            return PartialView("_UpdateTable", _repository.UpdatesGet());
        }
    }
}
