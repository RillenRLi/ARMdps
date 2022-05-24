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
        [HttpPost]
        public IActionResult GetDepartmentTable()
        {
            return PartialView("_DepartmentTable");
        }
        [HttpPost]
        public IActionResult GetDepartmenEditForm()
        {
            return PartialView("_DepartmentEditForm");
        }
        //[HttpPost]
        //public IActionResult GetDepartmenAddForm()
        //{

        //}
        //[HttpPost]
        //public void UpdateDepartment(DepartmentModel department)
        //{
        //    _repository.DepartmentUpdate(department);
        //}
    }
}
