using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    [RoutePrefix("")]
    public class HomeController : Controller
    {
        [Route("~/index")]
        public ActionResult Index()
        {

            return View();

        }

        [Route("~/about")]
        public ActionResult About()
        {

            return View();

        }

        [Route("~/contact")]
        public ActionResult Contact()
        {

            return View();

        }

        [Route("~/create")]
        public ActionResult Create()
        {

            return View();

        }
    }
}