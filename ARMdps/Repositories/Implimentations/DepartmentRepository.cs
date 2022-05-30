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
        //Вызов списка подразделений из файла
        public List<DepartmentModel> DepartmentsGet()
        {
            string path = "wwwroot/JSON/department.json";
            var departmentJsonFile = File.ReadAllText(path);
            var depts = JsonSerializer.Deserialize<List<DepartmentModel>>(departmentJsonFile);
            return depts;
        }

        //Вызов подразделения из файла по ID
        public DepartmentModel DepartmentGet(int id)
        {
            string path = "wwwroot/JSON/department.json";
            var departmentJsonFile = File.ReadAllText(path);
            var dep = JsonSerializer.Deserialize<List<DepartmentModel>>(departmentJsonFile);
            DepartmentModel department = dep.FirstOrDefault(d => d.Department_Id == id);
            string depres = JsonSerializer.Serialize(department);
            return department;
        }

        //Обновление информации о подразделении или добавление нового в файл
        public void DepartmentUpdate(DepartmentModel department)
        {
            string path = "wwwroot/JSON/department.json";
            var departmentJsonFile = File.ReadAllText(path);
            var depts = JsonSerializer.Deserialize<List<DepartmentModel>>(departmentJsonFile);
            if (department.Department_Id != 0)
            {
                var dept = depts.SingleOrDefault(d => d.Department_Id == department.Department_Id);
                if (dept != null)
                {
                    int index = depts.IndexOf(dept);
                    depts.RemoveAt(index);
                    depts.Insert(index, department);
                }

                else
                {
                    int d=depts.Max(d => d.Department_Id);
                    department.Department_Id = d + 1;
                    depts.Add(department);                    
                }
            }
            else
            {
                int d = depts.Max(d => d.Department_Id);
                department.Department_Id = d + 1;
                depts.Add(department);
            }
            var res=JsonSerializer.Serialize(depts);
            File.WriteAllText(path, res);
        }

        //Удаление подразделения из файла
        public void DepartmentDelete(int id)
        {
            string path = "wwwroot/JSON/department.json";
            var departmentJsonFile = File.ReadAllText(path);
            var depts = JsonSerializer.Deserialize<List<DepartmentModel>>(departmentJsonFile);
            var department = depts.SingleOrDefault(d => d.Department_Id == id);
            if (department != null)
            {
                int index = depts.IndexOf(department);
                depts.RemoveAt(index);
            }
            var res = JsonSerializer.Serialize(depts);
            File.WriteAllText(path, res);
        }
    }
}
