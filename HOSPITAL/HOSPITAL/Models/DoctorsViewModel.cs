using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HOSPITAL.Models
{
    public class DoctorsViewModel
    {
        public List<Doctor> Doctors { get; set; }
    }

    public class Doctor
    {
        public string Name { get; set; }
        public string Direction { get; set; }
    }
}