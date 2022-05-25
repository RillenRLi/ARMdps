﻿using Microsoft.AspNetCore.Http;
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

        public string GetDepartment(int id)
        {
            return _departmentRepository.DepartmentGet(id);
        }
        [HttpPost("Update")]
        public void UpdateDepartment([FromBody] DepartmentModel department)
        {
            _departmentRepository.DepartmentUpdate(department);
        }
    }
}
