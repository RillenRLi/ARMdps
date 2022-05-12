using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using ARMdps.Models;
using ARMdps.Repositories.Interfaces;

namespace ARMdps.Repositories.Implimentations
{
    public class UpdateRepository:IUpdateRepository
    {
        public List<UpdateModel> UpdatesGet()
        {
            string path = "wwwroot/JSON/update.json";
            using (StreamReader sr = new StreamReader(path))
            {
                string str = sr.ReadToEnd();
                var reg = JsonSerializer.Deserialize<List<UpdateModel>>(str);
                return reg;
            }
        }
    }
}
