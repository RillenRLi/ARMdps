using System.Collections.Generic;
using ARMdps.Repositories.Interfaces;
using ARMdps.Models;

namespace ARMdps.Repositories.Interfaces
{
    public interface IARMUserRepository
    {
        public List<ARMUserModel> ARMUsersGet();
    }
}
