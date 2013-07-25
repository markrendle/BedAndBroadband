namespace BedAndBroadband.Data
{
    using System.Collections.Generic;
    using Models;

    public interface IHotels
    {
        Hotel Get(int id);
        IEnumerable<Hotel> GetRecentlyRated();
    }
}