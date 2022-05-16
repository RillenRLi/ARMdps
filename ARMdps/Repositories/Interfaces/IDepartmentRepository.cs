using ARMdps.Models;
using System.Collections.Generic;

namespace ARMdps.Repositories.Interfaces
{
    public interface IDepartmentRepository
    {
        List<DepartmentModel> DepartmentsGet();
        DepartmentModel DepartmentGet(int id);
        void DepartmentUpdate(DepartmentModel department);
    }
}
