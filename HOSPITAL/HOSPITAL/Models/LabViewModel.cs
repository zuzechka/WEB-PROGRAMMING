using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HOSPITAL.Models
{
    public class LabViewModel
    {
        public List<Lab> Labs { get; set; }
    }

    public class Lab
    {
        public string Name { get; set; }
    }
}