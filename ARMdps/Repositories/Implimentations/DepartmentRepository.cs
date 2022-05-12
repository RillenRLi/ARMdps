using ARMdps.Models;
using System.Collections.Generic;
using ARMdps.Repositories.Interfaces;
using System.IO;
using System.Text.Json;

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
    }
}
