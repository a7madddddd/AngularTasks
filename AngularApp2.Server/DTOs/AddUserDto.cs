namespace AngularApp2.Server.DTOs
{
    public class AddUserDto
    {


        public string? UserName { get; set; } = null!;

        public string PasswordHash { get; set; } = null!;

        public string Email { get; set; } = null!;

        public string? Phone { get; set; }

        public string? Address { get; set; }

        public bool? IsAdmin { get; set; }

        public bool? IsSupplier { get; set; }


    }
}
