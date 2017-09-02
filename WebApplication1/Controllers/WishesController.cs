using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    [RoutePrefix("WanderLust")]
    public class WishesController : Controller
    {
        // GET: Wish
        [Route("~/Index")]
        public ActionResult Index()
        {
            return View();
        }

        [Route("~/Create")]
        public ActionResult Create()
        {
            return View();
        }
    }
}