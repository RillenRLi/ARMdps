using ARMdps.Models;
using System.Collections.Generic;
using ARMdps.Repositories.Interfaces;
using System.IO;
using System.Text.Json;
using System.Linq;

namespace ARMdps.Repositories.Implimentations
{
    public class DepartmentRepository:IDepartmentRepository
    {
        public List<DepartmentModel> DepartmentsGet()
        {
            string path = "wwwroot/JSON/department.json";
            using (StreamReader sr = new StreamReader(path))
            {
                string str = sr.ReadToEnd();
                var reg = JsonSerializer.Deserialize<List<DepartmentModel>>(str);
                return reg;
            }
        }
        public DepartmentModel DepartmentGet(int id)
        {
            string path = "wwwroot/JSON/department.json";
            var departmentJsonFile = File.ReadAllText(path);
            var dep = JsonSerializer.Deserialize<List<DepartmentModel>>(departmentJsonFile);
            DepartmentModel department = dep.FirstOrDefault(d => d.Id == id);
            return department;
        }
    }
}
