using System.Web.Mvc;

namespace WorkingWithRazor.Infrastructure
{
    public class CustomLocationViewEngine : RazorViewEngine
    {
        //{0} - представление
        //{1} - контроллеры
        //{2} - имена областей
        public CustomLocationViewEngine()
        {
            ViewLocationFormats = new string[] { 
                "~/Views/{1}/{0}.cshtml",
                "~/Views/Common/{0}.cshtml" 
            };
        }
    }
}