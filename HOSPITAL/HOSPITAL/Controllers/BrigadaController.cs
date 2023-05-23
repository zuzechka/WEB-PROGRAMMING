using HOSPITAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HOSPITAL.Controllers
{
    public class BrigadaController : Controller
    {
        public ActionResult Index()
        {
            var brigadas = GetBrigadaFromDatabase();
            var viewModel = new HOSPITAL.Models.BrigadaViewModel
            {
                Brigadas = brigadas
            };

            return View(viewModel);
        }

        private List<Brigada> GetBrigadaFromDatabase()
        {
            return new List<Brigada>
                {
                    new Brigada {Name="1 в ніч"},
                    new Brigada { Name = "2 в день"},
                 
                };
        }
    }
}