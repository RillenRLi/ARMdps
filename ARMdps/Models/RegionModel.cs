namespace ARMdps.Models
{
    public class RegionModel
    {
        public int Id { get; set; }
        public string Code2Digits { get; set; }
        public string Name { get; set; }
        public string RegionCode { get; set; }
        public bool UseSuperUser { get; set; }
        public bool FISMIsEnabled { get; set; }
        public string User_Id { get; set; }
        public string SSLConfigName { get; set; }
        public int LicenseType { get; set; }
        public string LicenseFileName { get; set; }
        public string WSUserName { get; set; }
        public string FTPIp { get; set; }
        public string FTPLogin { get; set; }
        public string FTPPassword { get; set; }
        public string FTPUploadDir { get; set; }
        public bool ArchiveIsEnabled { get; set; }
    }
}
