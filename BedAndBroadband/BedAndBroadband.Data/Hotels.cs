namespace BedAndBroadband.Data
{
    using System.Collections;
    using System.Collections.Generic;
    using System.Data;
    using Models;
    using Simple.Data;

    public class Hotels : IHotels
    {
        private readonly dynamic _db = Database.OpenNamedConnection("default");

        public Hotel Get(int id)
        {
            return _db.Hotels.Get(id);
        }

        public IEnumerable<Hotel> GetRecentlyRated()
        {
            return _db.HotelByRating.All().OrderByLastRatingDateDescending().Take(10);
        }
    }
}
