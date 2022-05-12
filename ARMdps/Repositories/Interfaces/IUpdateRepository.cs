using System.Collections.Generic;
using ARMdps.Models;

namespace ARMdps.Repositories.Interfaces
{
    public interface IUpdateRepository
    {
        List<UpdateModel> UpdatesGet();
    }
}
