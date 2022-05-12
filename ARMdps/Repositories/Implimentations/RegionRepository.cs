using ARMdps.Repositories.Interfaces;
using ARMdps.DatabaseContext;
using ARMdps.Models;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.IO;
using System.Collections.Generic;
using System.Linq;

namespace ARMdps.Repositories.Implimentations
{
    public class RegionRepository : IRegionRepository
    {
        public RegionModel RegionGet(int Id)
        {
            string rpath = "wwwroot/JSON/region.json";
            using (StreamReader rsr = new StreamReader(rpath))
            {
                string str = rsr.ReadToEnd();
                var rreg = JsonSerializer.Deserialize<List<RegionModel>>(str);
                RegionModel region = rreg.SingleOrDefault(r => r.Id == Id);
                return region;
            }
        }
        public void RegionUpdate(RegionModel regionModel)
        {
            string rupath = "wwwroot/JSON/region.json";
            using (StreamReader rusr = new StreamReader(rupath))
            {
                string str = rusr.ReadToEnd();
                List<RegionModel> regions = JsonSerializer.Deserialize<List<RegionModel>>(str);
                regions.Insert(regionModel.Id, regionModel);
                using (StreamWriter sw = new StreamWriter(rupath))
                {
                    JsonSerializer.Serialize<List<RegionModel>>(regions);
                }
            }
        }
    }
}
