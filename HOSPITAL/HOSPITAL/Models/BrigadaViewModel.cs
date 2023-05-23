using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HOSPITAL.Models
{
    public class BrigadaViewModel
    {
        public List<Brigada> Brigadas { get; set; }
    }

    public class Brigada
    {
        public string Name { get; set; }
    }
}