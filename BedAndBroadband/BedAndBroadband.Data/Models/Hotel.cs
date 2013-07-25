namespace BedAndBroadband.Data.Models
{
    using System.Collections.Generic;

    public class Hotel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Postcode { get; set; }
        public string Country { get; set; }
        public bool Wired { get; set; }
        public bool Wireless { get; set; }
        public int Rating { get; set; }

        public List<Rating> Ratings { get; set; }
    }
}
