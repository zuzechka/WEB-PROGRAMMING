using System;
using System.Web.Mvc;

namespace ControllersAndActions.Controllers
{
    public class DerivedController : Controller
    {
        // GET: Derived
        public ActionResult Index()
        {
            ViewBag.Message = "Привет из контроллера DerivedController метода действия Index";
            return View("MyView");
        }


        public ActionResult ActionMethod()
        {
            // Получить доступ к разнообразным свойствам из объектов контекста
            string userName = User.Identity.Name;
            string serverName = Server.MachineName;
            string clientIP = Request.UserHostAddress;
            DateTime dateStamp = HttpContext.Timestamp;

            ViewBag.UserName = userName;
            ViewBag.ServerName = serverName;
            ViewBag.ClientIP = clientIP;    
            ViewBag.TimeStamp = dateStamp;


            // Извлечь отправленные данные из Request.Form 
            string oldProductName = Request.Form["OldName"];
            string newProductName = Request.Form["NewName"];

            // ...

            return View();
        }

        public ActionResult ProduceOutput()
        {
            return new RedirectResult("/Basic/Index");
            //return Redirect("/Basic/Index");
            //выполняется на строго определенном компьютере
            //if (Server.MachineName == "WIN-0N4OFKUN2VN")
            //    Response.Redirect("/Basic/Index");
            //else
            //    Response.Write("Контроллер: Derived, Метод действия: ProduceOutput");
        }
    }
}