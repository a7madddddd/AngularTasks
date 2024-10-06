using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularApp2.Server.Models;
using AngularApp2.Server.DTOs;

namespace AngularApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {
        private readonly MyDbContext _context;

        public ServicesController(MyDbContext context)
        {
            _context = context;
        }

        // GET: api/Services
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Service>>> GetServices()
        {
            return await _context.Services.ToListAsync();
        }

        // GET: api/Services/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Service>> GetService(int id)
        {
            var service = await _context.Services.FindAsync(id);

            if (service == null)
            {
                return NotFound();
            }

            return service;
        }

        // PUT: api/Services/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutService(int id, Service service)
        {
            if (id != service.ServiceId)
            {
                return BadRequest();
            }

            _context.Entry(service).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServiceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Services
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Service>> PostService(Service service)
        {
            _context.Services.Add(service);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ServiceExists(service.ServiceId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetService", new { id = service.ServiceId }, service);
        }

        // DELETE: api/Services/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteService(int id)
        {
            var service = await _context.Services.FindAsync(id);
            if (service == null)
            {
                return NotFound();
            }

            _context.Services.Remove(service);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ServiceExists(int id)
        {
            return _context.Services.Any(e => e.ServiceId == id);
        }





        [HttpPost("addsService")]
        public IActionResult addService([FromForm] addService serviceDto)
        {

            var folder = Path.Combine(Directory.GetCurrentDirectory(), "services Images");
            if (!Directory.Exists(folder))
            {


                Directory.CreateDirectory(folder);


            }


            var fileImage = Path.Combine(folder, serviceDto.ServiceImage.FileName);

            using (var stream = new FileStream(fileImage, FileMode.Create))
            {

                serviceDto.ServiceImage.CopyToAsync(stream);

            }

            var newService = new Service
            {

                ServiceName = serviceDto.ServiceName,
                ServiceDescription = serviceDto.ServiceDescription,
                ServiceImage = serviceDto.ServiceImage.FileName,

            };
            _context.Services.Add(newService);
            _context.SaveChanges();
            return Ok(newService);
        }




        [HttpPut("UpdateService/{id}")]
        public IActionResult EditService(int id, [FromForm] UpdateServiceDTO updateService)
        {
            
            var service = _context.Services.FirstOrDefault(x => x.ServiceId == id);

            if (service == null)
            {
                return NotFound(); // Return 404 if the service is not found
            }

            var folder = Path.Combine(Directory.GetCurrentDirectory(), "services Images");
            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }

            var fileImage = Path.Combine(folder, updateService.ServiceImage.FileName);
            using (var stream = new FileStream(fileImage, FileMode.Create))
            {
                // Wait for the file copy operation to complete
                updateService.ServiceImage.CopyTo(stream);
            }

            // Update the service properties
            service.ServiceImage = updateService.ServiceImage.FileName; // Assuming you want to save just the filename
            service.ServiceDescription = updateService.ServiceDescription; // Update the description
            service.ServiceName = updateService.ServiceName; // Update the name

            // Save changes to the database
            _context.SaveChanges();

            return Ok(service); // Return the updated service
        }

        [HttpGet("getImages/{ImageName}")]
        public IActionResult getImage(string ImageName) {

            var pathImage = Path.Combine(Directory.GetCurrentDirectory(), "services Images", ImageName);

            if (System.IO.File.Exists(pathImage)) {

                return PhysicalFile(pathImage, "Image/*");
            }
            return NotFound();
        }  
        
    }
        
}
