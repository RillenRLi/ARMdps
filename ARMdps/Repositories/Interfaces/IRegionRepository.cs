using ARMdps.Models;
namespace ARMdps.Repositories.Interfaces
{
    public interface IRegionRepository
    {
        public RegionModel RegionGet(int Id);
        public string JSRegionGet(int Id);
        public void RegionUpdate(RegionModel region);
    }
}
