namespace BedAndBroadband.Api
{
    using System.Collections.Generic;

    public class CollectionDto<T>
    {
        public IEnumerable<T> Items { get; set; }
    }
}