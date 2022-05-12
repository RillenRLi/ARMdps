using ARMdps.Repositories.Implimentations;
using ARMdps.Repositories.Interfaces;
using ARMdps.Models;
using Microsoft.AspNetCore.Mvc;

namespace ARMdps.Controllers
{
    public class DepartmentController : Controller
    {
        private readonly IDepartmentRepository _repository;
        public DepartmentController(IDepartmentRepository _departmentRepository)
        {
            _repository = _departmentRepository;
        }
        public IActionResult GetDepartmentTable()
        {
            return PartialView("_DepartmentTable", _repository.DepartmentsGet());
        }
    }
}
