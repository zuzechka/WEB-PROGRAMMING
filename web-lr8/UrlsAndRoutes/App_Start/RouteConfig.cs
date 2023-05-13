using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace UrlsAndRoutes
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            // Часть 2: Настройки маршрутизации
            routes.MapRoute(null, "Public/{controller}/{action}", defaults: new { action = "Index", controller = "Home" });
            routes.MapRoute("ShopSchema", "Shop/{action}", defaults: new { action = "Index", controller = "Home" });
            routes.MapRoute(
              name: "MyRoute7",
              url: "App/{action}", new { controller = "Home" },
              namespaces: new[] { "UrlsAndRoutes.AdditionalController" }
            );
            routes.MapRoute(
                name: "MyRoute5",
                url: "{controller}/{action}/{id}/{*catchcall}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                namespaces: new[] { "UrlsAndRoutes.Controllers" }
            );
            routes.MapRoute(
                name: "MyRoute4",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = "DefaultId" },
                namespaces: new[] { "UrlsAndRoutes.Controllers" }
            );
            routes.MapRoute(
              name: "MyRoute6",
              url: "{controller}/{action}", new { controller = "Home" },
              namespaces: new[] { "UrlsAndRoutes.Controllers" }
            );

            routes.MapMvcAttributeRoutes();

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new
                {
                    controller = "Home",
                    action = "Index",
                    id = UrlParameter.Optional
                });

            routes.MapRoute("NewRoute", "App/Do{action}", new { controller = "Home" });

            routes.MapRoute(
                name: "Default2",
                url: "{controller}/{action}/{id}",
                defaults: new
                {
                    controller = "Home",
                    action = "Index",
                    id = UrlParameter.Optional
                });
        }
    }
}
