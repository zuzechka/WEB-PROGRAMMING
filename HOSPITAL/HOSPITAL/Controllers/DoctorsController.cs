using HOSPITAL.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace HOSPITAL.Controllers
{
    public class DoctorsController : Controller
    {
        // GET: DoctorsController
        public ActionResult Index()
        {
            var doctors = GetDoctorsFromDatabase();

            var viewModel = new HOSPITAL.Models.DoctorsViewModel
            {
                Doctors = doctors
            };

            return View(viewModel);
        }

        private List<Doctor> GetDoctorsFromDatabase()
        {
            return new List<Doctor>
        {
            new Doctor { Name = "Івасенко Сергій Миколайович", Direction = "Терапевт"},
            new Doctor { Name = "Друшляк Віталій Олексійович", Direction = "Педіатр"},
            new Doctor { Name = "Ломоносова Тетяна Вікторівна", Direction = "Окуліст" },
             new Doctor { Name = "Нежид Світлана Сергіївна", Direction = "Невролог" },
              new Doctor { Name = "Гайворонський Михайло Васильович", Direction = "Хірург" }
        };

        }
    }
}