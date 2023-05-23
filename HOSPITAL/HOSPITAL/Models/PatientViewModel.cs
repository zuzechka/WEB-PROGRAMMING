using System;
using System.Collections.Generic;
using System.Web;

namespace HOSPITAL.Models
{
   
        public class PatientViewModel
        {
            public List<Patient> Patients { get; set; }
        }

        public class Patient
        {
            public string Name { get; set; }
            public string Direction { get; set; }
        public string Doctor { get; set; }
    }
    
}