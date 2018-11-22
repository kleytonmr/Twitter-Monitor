using System;
using System.Collections.Generic;
using System.Text;

namespace Twitter_monitor.Model
{
    class Conection
    {
        private const string conString = "User Id=system;Password=oracle;Data Source=localhost:49161/XE";
        public string GetConnection() { return conString; }
    }
}



        
