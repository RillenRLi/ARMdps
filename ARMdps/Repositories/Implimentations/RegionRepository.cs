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
            var regionJsonFile = File.ReadAllText(rpath);
            List<RegionModel> regions = JsonSerializer.Deserialize<List<RegionModel>>(regionJsonFile);
            var region = regions.SingleOrDefault(r => r.Region_Id == Id);
            return region;
        }

        public string JSRegionGet(int Id)
        {
            string rupath = "wwwroot/JSON/region.json";
            var rj = File.ReadAllText(rupath);
            List<RegionModel> regions = JsonSerializer.Deserialize<List<RegionModel>>(rj);
            var region = regions.SingleOrDefault(r => r.Region_Id == Id);
            string res = JsonSerializer.Serialize(region);
            return res;
        }

        public void RegionUpdate(RegionModel region)
        {
            string rupath = "wwwroot/JSON/region.json";
            var rj = File.ReadAllText(rupath);
            List<RegionModel> regions = JsonSerializer.Deserialize<List<RegionModel>>(rj);
            //RegionModel region = JsonSerializer.Deserialize<RegionModel>(JsonAnswer);
            var r = regions.SingleOrDefault(r => r.Region_Id == region.Region_Id);
            if (r != null)
            {
                int index = regions.IndexOf(r);
                regions.RemoveAt(index);
                regions.Insert(index, region);
            }
            else regions.Add(region);
            var res = JsonSerializer.Serialize<List<RegionModel>>(regions);
            File.WriteAllText(rupath, res);
        }
    }
}

