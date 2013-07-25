using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BedAndBroadband.Startup
{
    using Simple.Web;

    public class Statics : IStartupTask
    {
        public void Run(IConfiguration configuration, IWebEnvironment environment)
        {
            configuration.PublicFolders.Add("/Content");
            configuration.PublicFolders.Add("/Scripts");
            configuration.PublicFolders.Add("/Html");

            configuration.PublicFileMappings.Add("/", "/index.html");
        }
    }
}