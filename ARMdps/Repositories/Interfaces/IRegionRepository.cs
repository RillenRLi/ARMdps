﻿using ARMdps.Models;
namespace ARMdps.Repositories.Interfaces
{
    public interface IRegionRepository
    {
        public RegionModel RegionGet(int Id);
    }
}