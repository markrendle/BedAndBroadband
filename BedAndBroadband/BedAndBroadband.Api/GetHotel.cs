namespace BedAndBroadband.Api
{
    using Data;
    using Data.Models;
    using Simple.Data;
    using Simple.Web;
    using Simple.Web.Behaviors;

    [UriTemplate("/hotels/{Id}")]
    public class GetHotel : IGet, IOutput<Hotel>
    {
        private readonly IHotels _hotels;

        public GetHotel(IHotels hotels)
        {
            _hotels = hotels;
        }

        public Status Get()
        {
            Output = _hotels.Get(Id);
            return Output == null ? 404 : 200;
        }

        public int Id { get; set; }

        public Hotel Output { get; private set; }
    }
}