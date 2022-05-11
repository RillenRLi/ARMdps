using Microsoft.EntityFrameworkCore;
using ARMdps.DBModels;

namespace ARMdps.DatabaseContext
{
    public class RegionContext:DbContext
    {
        public DbSet<RegionModelDB> Regions { get; set; }
        public RegionContext(DbContextOptions<RegionContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
