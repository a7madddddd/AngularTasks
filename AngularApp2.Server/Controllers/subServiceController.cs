using AngularApp2.Server.DTOs;
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

        [HttpPost("postUSerSubsecriptoin")]
        public IActionResult PostUIserSubsecription([FromBody] USerSubSecription SubDto)
        {
            var subsecription = _db.Subscriptions.Where(x => x.SubscriptionId == SubDto.SubscriptionId).FirstOrDefault();

            var ammount = subsecription.SubscriptionAmount;

            var startdate = DateOnly.FromDateTime(DateTime.Now);

            DateOnly endDate = DateOnly.FromDateTime(DateTime.Now);

            switch (ammount)
            {
                case "9.99":
                    endDate = startdate.AddDays(7);
                    break;
                case "19.99":
                    endDate = startdate.AddDays(14);
                    break;
                case "29.99":
                    endDate = startdate.AddDays(30);
                    break;
                default:
                    endDate = startdate.AddDays(1);
                    break;
            }

            var userSub = new ServiceSubscription
            {


                UserId = SubDto.UserId,
                SubscriptionId = SubDto.SubscriptionId,
                SubServiceId = SubDto.SubscriptionId,
                StartDate = startdate,
                EndDate = endDate,
            };


            _db.ServiceSubscriptions.Add(userSub);
            _db.SaveChanges();
            return Ok();

        }


        [HttpGet("SubSecriptions")]

        public IActionResult AllsubSecriptions() { 
        

            var AllSubSecriptions = _db.Subscriptions.ToList();

            return Ok(AllSubSecriptions);
        }


    }
}
