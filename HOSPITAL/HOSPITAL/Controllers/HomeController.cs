using System.Web.Mvc;

namespace HOSPITAL.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var viewModel = new HOSPITAL.Models.HomeViewModel();
            return View(viewModel);
        }

        [HttpPost]
        public ActionResult ThankYou(HOSPITAL.Models.HomeViewModel model)
        {
            if (ModelState.IsValid)
            {
                // Обработка данных формы, например, отправка письма или сохранение в базе данных

                return View();
            }

            return RedirectToAction("Index", model);
        }

        public ActionResult RedirectExample()
        {
            return RedirectToAction("Index", "DoctorsController");
        }

        public ActionResult RedirectExample2()
        {

            return RedirectToAction("Index", "PatientController");
        }

        public ActionResult RedirectExample3()
        {

            return RedirectToAction("Index", "BrigadaController");
        }

        public ActionResult RedirectExample4()
        {

            return RedirectToAction("Index", "LabController");
        }
    }
}