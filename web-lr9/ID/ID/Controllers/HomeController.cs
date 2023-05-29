using System.Web.Mvc;

namespace ID.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index(string id)
        {
            ViewBag.ID = id ?? "дані не предоставлені";
            return View();
        }

        // GET: Home/Welcome
        public ActionResult Welcome(string name)
        {
            ViewBag.Message = $"Ласкаво просимо, {name}!";
            return View();
        }
    }
}