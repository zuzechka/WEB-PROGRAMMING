using System.ComponentModel.DataAnnotations;

namespace HOSPITAL.Models
{
    public class HomeViewModel
    {
        [Required(ErrorMessage = "Будь-ласка, введіть ваше ім'я")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Будь-ласка, введіть ваш email.")]
        [EmailAddress(ErrorMessage = "Некоректне введеня email!")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Будь-ласка, введіть ваше звернення!")]
        public string Message { get; set; }
    }
}