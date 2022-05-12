using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using ARMdps.Repositories.Interfaces;
using ARMdps.Models;

namespace ARMdps.Repositories.Implimentations
{
    public class ARMUserRepository:IARMUserRepository
    {
        public List<ARMUserModel> ARMUsersGet()
        {
            string path = "wwwroot/JSON/armuser.json";
            using (StreamReader sr = new StreamReader(path))
            {
                string str = sr.ReadToEnd();
                var reg = JsonSerializer.Deserialize<List<ARMUserModel>>(str);
                return reg;
            }
        }
    }
}
