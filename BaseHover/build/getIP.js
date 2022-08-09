const os = require('os');

const getIP = ()=>{
  var ifacesObj = {}
  var interfaces = os.networkInterfaces();

  for (var dev in interfaces) {
      interfaces[dev].forEach(function(details){
          if (!details.internal){
              switch(details.family){
                  case "IPv4":
                      const d = {[dev]:details.address}
                      ifacesObj[dev] = details.address;
                  break;
              }
          }
      });
  }
  return ifacesObj;
}

module.exports = getIP;
