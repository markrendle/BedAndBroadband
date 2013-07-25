using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BedAndBroadband.Api
{
    using Data;
    using Data.Models;
    using Simple.Web;
    using Simple.Web.Links;

    [UriTemplate("/hotels/{Id}/addrating")]
    [LinksFrom(typeof(Hotel), Rel = "add-rating")]
    public class AddRating : IPost<Rating>
    {
        private readonly IHotels _hotels;

        public AddRating(IHotels hotels)
        {
            _hotels = hotels;
        }

        public Status Post(Rating input)
        {
            input.HotelId = Id;
            _hotels.AddRating(input);
            return 201;
        }

        public int Id { get; set; }
    }
}
