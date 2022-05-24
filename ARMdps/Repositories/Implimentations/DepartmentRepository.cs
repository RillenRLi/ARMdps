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
        public string DepartmentsGet()
        {
            string path = "wwwroot/JSON/department.json";
            var departmentJsonFile = File.ReadAllText(path);
            var depts = JsonSerializer.Deserialize<List<DepartmentModel>>(departmentJsonFile);
            return departmentJsonFile;
        }

        //public string DepartmentsGet()
        //{
        //    string path = "wwwroot/JSON/department.json";
        //    string departmentJsonFile=File.ReadAllText(path);
        //    return departmentJsonFile;
        //}
        public string DepartmentGet(int id)
        {
            string path = "wwwroot/JSON/department.json";
            var departmentJsonFile = File.ReadAllText(path);
            var dep = JsonSerializer.Deserialize<List<DepartmentModel>>(departmentJsonFile);
            DepartmentModel department = dep.FirstOrDefault(d => d.Id == id);
            string depres = JsonSerializer.Serialize(department);
            return depres;
        }
        public void DepartmentUpdate(DepartmentModel department)
        {
            string path = "wwwroot/JSON/department.json";
            var departmentJsonFile = File.ReadAllText(path);
            var depts = JsonSerializer.Deserialize<List<DepartmentModel>>(departmentJsonFile);
            var dept=depts.SingleOrDefault(d=>d.Id == department.Id);
            if (dept != null)
            {
                int index = depts.IndexOf(dept);
                depts.RemoveAt(index);
                depts.Insert(index, department);
            }
            else depts.Add(department);
            var res=JsonSerializer.Serialize(depts);
            File.WriteAllText(path, res);
        }
    }
}
