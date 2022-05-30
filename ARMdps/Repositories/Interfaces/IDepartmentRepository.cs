using ARMdps.Models;
using System.Collections.Generic;

namespace ARMdps.Repositories.Interfaces
{
    public interface IDepartmentRepository
    {
        //string DepartmentsGet();
        List<DepartmentModel> DepartmentsGet();
        DepartmentModel DepartmentGet(int id);
        void DepartmentUpdate(DepartmentModel department);
        void DepartmentDelete(int id);
    }
}
