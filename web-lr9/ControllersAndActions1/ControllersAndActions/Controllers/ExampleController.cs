using System;
using System.Web.Mvc;

namespace ControllersAndActions.Controllers
{
    public class ExampleController : Controller
    {
        public ViewResult Index()
        {
            DateTime date = DateTime.Now;
            date = date.AddDays(1);
            ViewBag.Message = "Hello";

            //return View("Homepage");
            return View(date);
        }        
        public ViewResult Index1()
        {
            return View("Index1", "_AlternateLayout");
        }        
        public ViewResult Index2()
        {
            return View("~/Views/Example/Index2.cshtml");
        }        
        public ViewResult Index3()
        {
            return View();
        }        
        
        public RedirectResult Redirect()
        {
            return Redirect("/Basic/Index");
        }        
        
        public RedirectResult RedirectPermanent()
        {
            return RedirectPermanent("/Basic/Index");
        }

        public RedirectToRouteResult RedirectRoute()
        {
            return RedirectToRoute(new
            {
                controller = "Basic",
                action = "Index",
                id = "MyId"
            });
        }
        
        public RedirectToRouteResult RedirectRouteActionController()
        {
            return RedirectToAction("Index", "Basic");
        }

        public HttpStatusCodeResult StatusCode()
        {
            // Ошибка 404 - URL не может быть обслужен
            return new HttpStatusCodeResult(404, "Страница не найдена");
            // Ошибка 404 - URL не может быть обслужен
            //return HttpNotFound();
        }
    }
}