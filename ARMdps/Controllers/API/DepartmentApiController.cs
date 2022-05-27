using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Text.Json;
using ARMdps.Repositories.Interfaces;
using ARMdps.Models;

namespace ARMdps.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentApiController : ControllerBase
    {
        private readonly IDepartmentRepository _departmentRepository;
        public DepartmentApiController(IDepartmentRepository departmentRepository)
        {
            _departmentRepository = departmentRepository;
        }
        [HttpGet]
        public string GetDepartments()
        {
            return _departmentRepository.DepartmentsGet();
        }
        [HttpGet("{id}")]
        public DepartmentModel GetDepartment(int id)
        {
            //DepartmentModel department = _departmentRepository.DepartmentGet(id);
            //string dept = JsonSerializer.Serialize(department);
            return _departmentRepository.DepartmentGet(id);
        }
        [HttpPost("Update")]
        public void UpdateDepartment([FromBody] DepartmentModel department)
        {
            _departmentRepository.DepartmentUpdate(department);
        }

        [HttpDelete("Delete{id}")]
        public void DeleteDepartment(int id)
        {
            _departmentRepository.DepartmentDelete(id);
        }
    }
}
