using ControllersAndActions.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Web.Mvc;

namespace ControllersAndActions.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void ControllerTest1()
        {
            // Организация - создание контроллера
            ExampleController controller = new ExampleController();

            // Действие - вызов метода действия
            ViewResult result = controller.Index();

            // Утверждение - проверка результата
            //Assert.AreEqual("Homepage", result.ViewName);
            Assert.AreEqual("", result.ViewName);
            Assert.AreEqual("Hello", result.ViewBag.Message);

        }

        [TestMethod]
        public void ControllerTest2()
        {
            // Организация - создание контроллера
            ExampleController controller = new ExampleController();

            // Действие - вызов метода действия
            ViewResult result = (ViewResult)controller.Index3();

            // Утверждение - проверка результата
            Assert.AreEqual("", result.ViewName);
        }        
        
        [TestMethod]
        public void ControllerTest3()
        {
            // Организация - создание контроллера
            ExampleController controller = new ExampleController();

            // Действие - вызов метода действия
            ViewResult result = (ViewResult)controller.Index();

            // Утверждение - проверка результата
            Assert.AreEqual("", result.ViewName);
            Assert.IsInstanceOfType(result.ViewData.Model, typeof(System.DateTime));
        }

        [TestMethod]
        public void ControllerRedirectPermanentTest()
        {
            // Организация - создание контроллера
            ExampleController controller = new ExampleController();
            // Действие - вызов метода действия
            RedirectResult result = controller.RedirectPermanent();
            // Утверждение - проверка результата
            Assert.IsTrue(result.Permanent);
            Assert.AreEqual("/Basic/Index", result.Url);
        }

        [TestMethod]
        public void ControllerRedirectTest()
        {
            // Организация - создание контроллера
            ExampleController controller = new ExampleController();
            // Действие - вызов метода действия
            RedirectResult result = controller.Redirect();
            // Утверждение - проверка результата
            Assert.IsFalse(result.Permanent);
            Assert.AreEqual("/Basic/Index", result.Url);
        }        
        
        [TestMethod]
        public void ControllerRedirectRouteTest()
        {
            // Организация - создание контроллера
            ExampleController controller = new ExampleController();
            // Действие - вызов метода действия
            RedirectToRouteResult result = controller.RedirectRoute();
            // Утверждение - проверка результата
            Assert.IsFalse(result.Permanent);
            Assert.AreEqual("Basic", result.RouteValues["controller"]);
            Assert.AreEqual("Index", result.RouteValues["action"]);
            Assert.AreEqual("MyId", result.RouteValues["id"]);
        }


        [TestMethod]
        public void ControllerTestStatusCode()
        {
            // Организация - создание контроллера
            ExampleController controller = new ExampleController();
            // Действие - вызов метода действия
            HttpStatusCodeResult result = controller.StatusCode();
            // Утверждение - проверка результата
            //Assert.AreEqual(401, result.StatusCode);
            Assert.AreEqual(404, result.StatusCode);
        }

    }
}
