using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PatientPortal.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
             

        public ActionResult Timeline()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Communicate()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}