using ARMdps.Models;
using System.Collections.Generic;

namespace ARMdps.Repositories.Interfaces
{
    public interface IDepartmentRepository
    {
        public List<DepartmentModel> DepartmentsGet();
        public DepartmentModel DepartmentGet(int id);
    }
}
