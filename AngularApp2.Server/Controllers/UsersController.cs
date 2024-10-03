using AngularApp2.Server.DTOs;
using AngularApp2.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;

namespace AngularApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        private readonly MyDbContext _db;

        public UsersController(MyDbContext db)
        {
            _db = db;
        }

        [HttpPost]
        public IActionResult AddUser([FromForm] AddUserDto userDto)
        {

            var CheckUSer = _db.Users.Where(e => e.Email == userDto.Email).FirstOrDefault();


            if (CheckUSer != null)
            {

                return BadRequest("User Already Exist");
            }
            var user = new User
            {

                UserName = userDto.UserName,
                Email = userDto.Email,
                Address = userDto.Address,
                PasswordHash = userDto.PasswordHash,
                Phone = userDto.Phone,
                IsAdmin = userDto.IsAdmin,
                IsSupplier = userDto.IsSupplier

            };


            _db.Users.Add(user);
            _db.SaveChanges();
            return Ok();

        }

        [HttpPost("UserLogin")]
        public IActionResult Login([FromForm] AddUserDto userlogin)
        {
            var login = _db.Users.Where(u => u.Email == userlogin.Email && u.PasswordHash == userlogin.PasswordHash).FirstOrDefault();


            if (login == null) {

                return BadRequest("user Not Found");
            }
            return Ok(login);

        }





        
    }
}
