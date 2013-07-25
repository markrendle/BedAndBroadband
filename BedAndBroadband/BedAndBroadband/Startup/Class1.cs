using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BedAndBroadband.Startup
{
    using Data;
    using Ninject.Modules;
    using Simple.Web.Authentication;
    using Simple.Web.Ninject;

    public class NinjectStartup : NinjectStartupBase
    {
        protected override IEnumerable<INinjectModule> CreateModules()
        {
            yield return new BedAndBroadbandModule();
        }

        public class BedAndBroadbandModule : NinjectModule
        {
            public override void Load()
            {
                Bind<IHotels>().To<Hotels>();
            }
        }
    }
}