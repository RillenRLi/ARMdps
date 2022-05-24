using ARMdps.Models;
using System.Collections.Generic;

namespace ARMdps.Repositories.Interfaces
{
    public interface IDepartmentRepository
    {
        //string DepartmentsGet();
        string DepartmentsGet();
        string DepartmentGet(int id);
        void DepartmentUpdate(DepartmentModel department);
    }
}
