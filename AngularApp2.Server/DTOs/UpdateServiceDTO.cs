using AngularApp2.Server.Models;

namespace AngularApp2.Server.DTOs
{
    public class UpdateServiceDTO
    {
        public string? ServiceName { get; set; }

        public string? ServiceDescription { get; set; }

        public IFormFile? ServiceImage { get; set; }

    }
}
