namespace ARMdps.Models
{
    public class ARMUserModel
    {
        public int Id { get; set; }
        public string LoginName { get; set; }
        public string Family { get; set; }
        public string FirstName { get; set; }
        public string Patronymic { get; set; }
        public string Rank { get; set; }
        public string UserPosition { get; set; }
        public string UserCode { get; set; }
        public bool IsEnabled { get; set; } = true;
        public string Password { get; set; }
        public bool IsDeleted { get; set; } = false;
        public int Department_Id { get; set; }
        public int Region_Id { get; set; }
        public string Roles { get; set; }
    }
}
