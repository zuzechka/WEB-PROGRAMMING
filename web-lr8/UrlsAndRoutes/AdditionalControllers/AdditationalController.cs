﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace UrlsAndRoutes.AdditionalControllers
{
    public class HomeController : Controller
    {
        // GET: Additational
        public ActionResult Index()
        {
            ViewBag.Controller = "AdditionalController.Home";
            ViewBag.Action = "Index";
            return View("ActionName");
        }
    }
}