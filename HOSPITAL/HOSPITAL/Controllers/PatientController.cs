using HOSPITAL.Models;
using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace HOSPITAL.Controllers
{ 
     public class PatientController : Controller
{ 

            public ActionResult Index()
            {
                var patients = GetPatientFromDatabase();
                var viewModel = new HOSPITAL.Models.PatientViewModel
                {
                    Patients = patients
                };

                return View(viewModel);
            }

            private List<Patient> GetPatientFromDatabase()
            {
                return new List<Patient>
                {
                    new Patient { Doctor = "Івасенко Сергій Миколайович", Direction = "Ангіна", Name="Володимир Смирнов"},
                    new Patient { Doctor = "Друшляк Віталій Олексійович", Direction = "Простуда", Name = "Юлія Малишова"},
                    new Patient { Doctor = "Ломоносова Тетяна Вікторівна", Direction = "Воспаління очей" , Name="Катерина Кайдаш"},
                     new Patient { Doctor = "Нежид Світлана Сергіївна", Direction = "Травма голови" , Name = "Юрій Говоров"},
                      new Patient { Doctor = "Гайворонський Михайло Васильович", Direction = "Апендикс", Name = "Галина Рибальцева" }
                };
            }
    }
}
