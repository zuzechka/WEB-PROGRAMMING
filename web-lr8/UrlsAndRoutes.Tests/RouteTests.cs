﻿using Moq;
using System;
using System.Reflection;
using System.Web;
using System.Web.Routing;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UrlsAndRoutes.Tests
{
    [TestClass]
    public class RouteTests
    {
        public HttpContextBase CreateHttpContext(string targetUrl = null, string httpMethod = "GET")
        {
            // Создать имитированный запрос
            Mock<HttpRequestBase> mockRequest = new Mock<HttpRequestBase>();
            mockRequest.Setup(m => m.AppRelativeCurrentExecutionFilePath).Returns(targetUrl);
            mockRequest.Setup(m => m.HttpMethod).Returns(httpMethod);

            // Создать имитированный ответ
            Mock<HttpResponseBase> mockResponse = new Mock<HttpResponseBase>();
            mockResponse.Setup(m => m.ApplyAppPathModifier(It.IsAny<string>())).Returns<string>(s => s);

            // Создать имитированный контекст, используя запрос и ответ
            Mock<HttpContextBase> mockContext = new Mock<HttpContextBase>();
            mockContext.Setup(m => m.Request).Returns(mockRequest.Object);
            mockContext.Setup(m => m.Response).Returns(mockResponse.Object);

            // Вернуть имитированный контекст
            return mockContext.Object;
        }

        public void TestRouteMatch(string url, string controller, string action, object routeProperties = null, string httpMethod = "GET")
        {
            // Организация
            RouteCollection routes = new RouteCollection();
            RouteConfig.RegisterRoutes(routes);
            // Действие - обработка маршрута
            RouteData result = routes.GetRouteData(CreateHttpContext(url, httpMethod));
            // Утверждение
            Assert.IsNotNull(result);
            Assert.IsTrue(TestIncomingRouteResult(result, controller, action, routeProperties));
        }

        private bool TestIncomingRouteResult(RouteData routeResult, string controller, string action, object propertySet = null)
        {

            Func<object, object, bool> valCompare = (v1, v2) =>
            {
                return StringComparer.InvariantCultureIgnoreCase.Compare(v1, v2) == 0;
            };

            bool result = valCompare(routeResult.Values["controller"], controller) && valCompare(routeResult.Values["action"], action);

            if (propertySet != null)
            {
                PropertyInfo[] propInfo = propertySet.GetType().GetProperties();
                foreach (PropertyInfo pi in propInfo)
                {
                    if (!(routeResult.Values.ContainsKey(pi.Name) && valCompare(routeResult.Values[pi.Name],
                    pi.GetValue(propertySet, null))))
                    {
                        result = false;
                        break;
                    }
                }
            }
            return result;
        }

        private void TestRouteFail(string url)
        {
            // Организация
            RouteCollection routes = new RouteCollection();
            RouteConfig.RegisterRoutes(routes);

            // Действие - обработка маршрута
            RouteData result = routes.GetRouteData(CreateHttpContext(url));

            // Утверждение
            Assert.IsTrue(result == null || result.Route == null);
        }

        [TestMethod]
        public void TestIncomingRoutes()
        {
            // Проверить URL который мы надеемся получить
            TestRouteMatch("~/", "Home", "Index");
            TestRouteMatch("~/Home", "Home", "Index");
            TestRouteMatch("~/Home/Index", "Home", "Index");
            TestRouteMatch("~/Shop/Index", "Home", "Index");

            // Проверить значения, получаемые из сегментов
            TestRouteMatch("~/One/Two", "One", "Two");

            // Удостовериться, что слишком много или слишком мало сегментов
            // не приводят к совпадению
            //TestRouteFail("~/Admin/Index/ThirdSegment");
            //TestRouteFail("~/Admin");            
            //TestRouteFail("~/Home/Index/All");
            //TestRouteFail("~/Home/Index/All/Delete");

            //TestRouteMatch("~/", "Home", "Index", new { id = "DefaultId" });
            //TestRouteMatch("~/Home", "Home", "Index", new { id = "DefaultId" });
            //TestRouteMatch("~/Home/Index", "Home", "Index", new { id = "DefaultId" });
            //TestRouteFail("~/Home/Index/All/Delete");

            TestRouteMatch("~/Home/Index/All", "Home", "Index", new { id = "All" });
            TestRouteMatch("~/Home/Index/All/Delete", "Home", "Index", new { id = "All", catchcall = "Delete" });
            TestRouteMatch("~/Home/Index/All/Delete/Insert", "Home", "Index", new { id = "All", catchcall = "Delete/Insert" });
        }

    }
}