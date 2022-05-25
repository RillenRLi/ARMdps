namespace ARMdps.Models
{
    public class DepartmentModel
    {
        public int Department_Id { get; set; }
        public string DepartmentCode { get; set; }
        public string ShortName { get; set; }
        public string DepartmentName { get; set; }
        public string Phones { get; set; }
        public string EmailAddress { get; set; }
        public string Address { get; set; }
        public string KPP { get; set; }
        public string INN { get; set; }
        public string OKTMO { get; set; }
        public string BankName { get; set; }
        public string PaymentName { get; set; }
        public string BIK { get; set; }
        public string KBK { get; set; }
        public string RReceipt { get; set; }
        public string KReceipt { get; set; }
        public int Region_Id { get; set; }
        public bool IsDelete { get; set; }=false;
    }
}
