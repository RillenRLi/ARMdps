using System;
namespace ARMdps.Models
{
    public class UpdateModel
    {
        public int Id { get; set; }
        public string CheckSum { get; set; }
        public string Content { get; set; }
        public string FileName { get; set; }
        public string FileSize { get; set; }
        public string Version { get; set; }
        public string BuildDate { get; set; }
        public string maxSdkVersion { get; set; }
        public string minSdkVersion { get; set; }
    }
}
