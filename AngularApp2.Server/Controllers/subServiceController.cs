using AngularApp2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class subServiceController : ControllerBase
    {
        private readonly MyDbContext _db;
        public subServiceController(MyDbContext db)
        {
            _db = db;
        }

        [HttpGet("GetSubServicesById/{id}")]
        public IActionResult GetSubServicesById(int id)
        {
            var subServise = _db.SubServices.Find(id);
            return Ok(subServise);
        }

        [HttpGet("GetSubServicesByServicesId/{id}")]
        public IActionResult GetSubServicesByServicesId(int id)
        {
            var subServise = _db.SubServices.Where(s => s.ServiceId == id).ToList();
            return Ok(subServise);
        }
    }
}
