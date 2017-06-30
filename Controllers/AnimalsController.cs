using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using hc_pet_tag_lookup.Models;

namespace hc_pet_tag_lookup.Controllers
{
    [Route("api/[controller]")]
    public class AnimalsController : Controller
    {

        private readonly AnimalContext _context;
        private static int _maxResults;

        public AnimalsController(AnimalContext context)
        {
            _context = context;
            _maxResults = 10;
        }

        // GET api/animals/search/:term
        [HttpGet("search/{term}")]
        public ActionResult Search(string term, int page=1)
        {
            if (String.IsNullOrEmpty(term))
                return NotFound();

            var offset = (page - 1) * _maxResults;

            var results = _context.Animals.Where(a => a.TagNumber.Contains(term) || a.Tattoo.Contains(term));

            HttpContext.Response.Headers.Add("totalCount", results.Count().ToString());

            return new ObjectResult(results.Skip(offset).Take(_maxResults));
        }
    }
}
