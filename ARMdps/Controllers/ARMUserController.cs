using ARMdps.Repositories.Interfaces;

using Microsoft.AspNetCore.Mvc;

namespace ARMdps.Controllers
{
    public class ARMUserController : Controller
    {
        private readonly IARMUserRepository _repository;
        public ARMUserController(IARMUserRepository repository)
        {
            _repository = repository;
        }
        public IActionResult GetARMUserTable()
        {
            return PartialView("_ARMUserTable", _repository.ARMUsersGet());
        }
    }
}
