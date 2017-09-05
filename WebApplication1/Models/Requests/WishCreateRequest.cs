using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication1.Models.Requests
{
    public class WishCreateRequest
    {
        [Required(ErrorMessage = "User Id is required, 200 Characters Max")]
        [MaxLength(200)]
        public string UserId { get; set; }

        [Required(ErrorMessage = "Location is required, 200 Characters Max")]
        [MaxLength(200)]
        public string Location { get; set; }
        
        [Required(ErrorMessage = "Activity is required, 300 Characters Max")]
        [MaxLength(300)]
        public string Activity { get; set; }

        [Required(ErrorMessage = "ImageUrl is required, 500 Characters Max")]
        [Url] //Must be a URL, assuming recognizes https:// the string
        [MaxLength(500)]
        public string ImageUrl { get; set; }

        [Required]
        public DateTime DateStarted { get; set; }

        [Required]
        public DateTime DateCompleted { get; set; }
    }
}