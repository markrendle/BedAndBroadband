namespace BedAndBroadband.Api
{
    using Data;
    using Data.Models;
    using Simple.Data;
    using Simple.Web;
    using Simple.Web.Behaviors;

    [UriTemplate("/hotels/recentlyRated")]
    public class GetRecentlyRatedHotels : IGet, IOutput<CollectionDto<Hotel>>
    {
        private readonly IHotels _hotels;

        public GetRecentlyRatedHotels(IHotels hotels)
        {
            _hotels = hotels;
        }

        public Status Get()
        {
            Output = new CollectionDto<Hotel>
            {
                Items = _hotels.GetRecentlyRated()
            };
            return 200;
        }

        public CollectionDto<Hotel> Output { get; private set; }
    }
}
