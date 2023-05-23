using HOSPITAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HOSPITAL.Controllers
{
    public class LabController : Controller
    {
        public ActionResult Index()
        {
            var labs = GetLabFromDatabase();
            var viewModel = new HOSPITAL.Models.LabViewModel
            {
                Labs = labs
            };

            return View(viewModel);
        }

        private List<Lab> GetLabFromDatabase()
        {
            return new List<Lab>
                {
                    new Lab {Name="Забір крові на комплексний аналіз"},

                };
        }
    }
}