using ARMdps.Repositories.Interfaces;
using ARMdps.DatabaseContext;
using ARMdps.Models;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.IO;
using System.Collections.Generic;

namespace ARMdps.Repositories.Implimentations
{
    public class RegionRepository:IRegionRepository
    {
        public RegionModel RegionGet(int Id)
        {
            string path = "wwwroot/JSON/region.json";
            using (StreamReader sr = new StreamReader(path))
            {
                string str = sr.ReadToEnd();
                var reg = JsonSerializer.Deserialize<List<RegionModel>>(str);
                RegionModel region = reg.Find(i => i.Id == Id);
                return region;
            }
        }
    }
}
