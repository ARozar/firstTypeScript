var http = require('http');
var path = require('path');
var express = require('express');

var app = express();
var server = http.createServer(app);


app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/api/products/', function(req, res){
  res.send([
  {
    "inventory": [
      {
        "buyInPrice": "$335.41",
        "quantity": 7,
        "createdDate": "Tue Jan 14 2014 01:49:06 GMT+0000",
        "createdBy": "Blevins Cotton",
        "isActive": true,
        "id": 0
      },
      {
        "buyInPrice": "$213.53",
        "quantity": 7,
        "createdDate": "Sun Oct 11 2015 09:05:17 GMT+0000",
        "createdBy": "Jerri Clarke",
        "isActive": true,
        "id": 1
      },
      {
        "buyInPrice": "$365.51",
        "quantity": 7,
        "createdDate": "Sun May 25 2014 19:32:00 GMT+0000",
        "createdBy": "Alyson Bowers",
        "isActive": true,
        "id": 2
      },
      {
        "buyInPrice": "$182.49",
        "quantity": 7,
        "createdDate": "Mon Feb 03 2014 18:06:37 GMT+0000",
        "createdBy": "Briana Santos",
        "isActive": true,
        "id": 3
      },
      {
        "buyInPrice": "$195.37",
        "quantity": 7,
        "createdDate": "Sun Sep 20 2015 12:36:30 GMT+0000",
        "createdBy": "Hunt Carroll",
        "isActive": true,
        "id": 4
      }
    ],
    "code": "Nep-418",
    "name": "Neptide",
    "isActive": true,
    "id": 0
  },
  {
    "inventory": [
      {
        "buyInPrice": "$335.41",
        "quantity": 7,
        "createdDate": "Tue Jan 14 2014 01:49:06 GMT+0000",
        "createdBy": "Blevins Cotton",
        "isActive": true,
        "id": 0
      },
      {
        "buyInPrice": "$213.53",
        "quantity": 7,
        "createdDate": "Sun Oct 11 2015 09:05:17 GMT+0000",
        "createdBy": "Jerri Clarke",
        "isActive": true,
        "id": 1
      },
      {
        "buyInPrice": "$365.51",
        "quantity": 7,
        "createdDate": "Sun May 25 2014 19:32:00 GMT+0000",
        "createdBy": "Alyson Bowers",
        "isActive": true,
        "id": 2
      },
      {
        "buyInPrice": "$182.49",
        "quantity": 7,
        "createdDate": "Mon Feb 03 2014 18:06:37 GMT+0000",
        "createdBy": "Briana Santos",
        "isActive": true,
        "id": 3
      },
      {
        "buyInPrice": "$195.37",
        "quantity": 7,
        "createdDate": "Sun Sep 20 2015 12:36:30 GMT+0000",
        "createdBy": "Hunt Carroll",
        "isActive": true,
        "id": 4
      }
    ],
    "code": "Jum-686",
    "name": "Jumpstack",
    "isActive": true,
    "id": 1
  },
  {
    "inventory": [
      {
        "buyInPrice": "$335.41",
        "quantity": 7,
        "createdDate": "Tue Jan 14 2014 01:49:06 GMT+0000",
        "createdBy": "Blevins Cotton",
        "isActive": true,
        "id": 0
      },
      {
        "buyInPrice": "$213.53",
        "quantity": 7,
        "createdDate": "Sun Oct 11 2015 09:05:17 GMT+0000",
        "createdBy": "Jerri Clarke",
        "isActive": true,
        "id": 1
      },
      {
        "buyInPrice": "$365.51",
        "quantity": 7,
        "createdDate": "Sun May 25 2014 19:32:00 GMT+0000",
        "createdBy": "Alyson Bowers",
        "isActive": true,
        "id": 2
      },
      {
        "buyInPrice": "$182.49",
        "quantity": 7,
        "createdDate": "Mon Feb 03 2014 18:06:37 GMT+0000",
        "createdBy": "Briana Santos",
        "isActive": true,
        "id": 3
      },
      {
        "buyInPrice": "$195.37",
        "quantity": 7,
        "createdDate": "Sun Sep 20 2015 12:36:30 GMT+0000",
        "createdBy": "Hunt Carroll",
        "isActive": true,
        "id": 4
      }
    ],
    "code": "Zom-823",
    "name": "Zomboid",
    "isActive": true,
    "id": 2
  },
  {
    "inventory": [
      {
        "buyInPrice": "$335.41",
        "quantity": 7,
        "createdDate": "Tue Jan 14 2014 01:49:06 GMT+0000",
        "createdBy": "Blevins Cotton",
        "isActive": true,
        "id": 0
      },
      {
        "buyInPrice": "$213.53",
        "quantity": 7,
        "createdDate": "Sun Oct 11 2015 09:05:17 GMT+0000",
        "createdBy": "Jerri Clarke",
        "isActive": true,
        "id": 1
      },
      {
        "buyInPrice": "$365.51",
        "quantity": 7,
        "createdDate": "Sun May 25 2014 19:32:00 GMT+0000",
        "createdBy": "Alyson Bowers",
        "isActive": true,
        "id": 2
      },
      {
        "buyInPrice": "$182.49",
        "quantity": 7,
        "createdDate": "Mon Feb 03 2014 18:06:37 GMT+0000",
        "createdBy": "Briana Santos",
        "isActive": true,
        "id": 3
      },
      {
        "buyInPrice": "$195.37",
        "quantity": 7,
        "createdDate": "Sun Sep 20 2015 12:36:30 GMT+0000",
        "createdBy": "Hunt Carroll",
        "isActive": true,
        "id": 4
      }
    ],
    "code": "Zan-929",
    "name": "Zanymax",
    "isActive": true,
    "id": 3
  },
  {
    "inventory": [
      {
        "buyInPrice": "$335.41",
        "quantity": 7,
        "createdDate": "Tue Jan 14 2014 01:49:06 GMT+0000",
        "createdBy": "Blevins Cotton",
        "isActive": true,
        "id": 0
      },
      {
        "buyInPrice": "$213.53",
        "quantity": 7,
        "createdDate": "Sun Oct 11 2015 09:05:17 GMT+0000",
        "createdBy": "Jerri Clarke",
        "isActive": true,
        "id": 1
      },
      {
        "buyInPrice": "$365.51",
        "quantity": 7,
        "createdDate": "Sun May 25 2014 19:32:00 GMT+0000",
        "createdBy": "Alyson Bowers",
        "isActive": true,
        "id": 2
      },
      {
        "buyInPrice": "$182.49",
        "quantity": 7,
        "createdDate": "Mon Feb 03 2014 18:06:37 GMT+0000",
        "createdBy": "Briana Santos",
        "isActive": true,
        "id": 3
      },
      {
        "buyInPrice": "$195.37",
        "quantity": 7,
        "createdDate": "Sun Sep 20 2015 12:36:30 GMT+0000",
        "createdBy": "Hunt Carroll",
        "isActive": true,
        "id": 4
      }
    ],
    "code": "Equ-280",
    "name": "Equicom",
    "isActive": true,
    "id": 4
  },
  {
    "inventory": [
      {
        "buyInPrice": "$335.41",
        "quantity": 7,
        "createdDate": "Tue Jan 14 2014 01:49:06 GMT+0000",
        "createdBy": "Blevins Cotton",
        "isActive": true,
        "id": 0
      },
      {
        "buyInPrice": "$213.53",
        "quantity": 7,
        "createdDate": "Sun Oct 11 2015 09:05:17 GMT+0000",
        "createdBy": "Jerri Clarke",
        "isActive": true,
        "id": 1
      },
      {
        "buyInPrice": "$365.51",
        "quantity": 7,
        "createdDate": "Sun May 25 2014 19:32:00 GMT+0000",
        "createdBy": "Alyson Bowers",
        "isActive": true,
        "id": 2
      },
      {
        "buyInPrice": "$182.49",
        "quantity": 7,
        "createdDate": "Mon Feb 03 2014 18:06:37 GMT+0000",
        "createdBy": "Briana Santos",
        "isActive": true,
        "id": 3
      },
      {
        "buyInPrice": "$195.37",
        "quantity": 7,
        "createdDate": "Sun Sep 20 2015 12:36:30 GMT+0000",
        "createdBy": "Hunt Carroll",
        "isActive": true,
        "id": 4
      }
    ],
    "code": "Kon-133",
    "name": "Kongene",
    "isActive": true,
    "id": 5
  },
  {
    "inventory": [
      {
        "buyInPrice": "$335.41",
        "quantity": 7,
        "createdDate": "Tue Jan 14 2014 01:49:06 GMT+0000",
        "createdBy": "Blevins Cotton",
        "isActive": true,
        "id": 0
      },
      {
        "buyInPrice": "$213.53",
        "quantity": 7,
        "createdDate": "Sun Oct 11 2015 09:05:17 GMT+0000",
        "createdBy": "Jerri Clarke",
        "isActive": true,
        "id": 1
      },
      {
        "buyInPrice": "$365.51",
        "quantity": 7,
        "createdDate": "Sun May 25 2014 19:32:00 GMT+0000",
        "createdBy": "Alyson Bowers",
        "isActive": true,
        "id": 2
      },
      {
        "buyInPrice": "$182.49",
        "quantity": 7,
        "createdDate": "Mon Feb 03 2014 18:06:37 GMT+0000",
        "createdBy": "Briana Santos",
        "isActive": true,
        "id": 3
      },
      {
        "buyInPrice": "$195.37",
        "quantity": 7,
        "createdDate": "Sun Sep 20 2015 12:36:30 GMT+0000",
        "createdBy": "Hunt Carroll",
        "isActive": true,
        "id": 4
      }
    ],
    "code": "Cin-845",
    "name": "Cinesanct",
    "isActive": true,
    "id": 6
  },
  {
    "inventory": [
      {
        "buyInPrice": "$335.41",
        "quantity": 7,
        "createdDate": "Tue Jan 14 2014 01:49:06 GMT+0000",
        "createdBy": "Blevins Cotton",
        "isActive": true,
        "id": 0
      },
      {
        "buyInPrice": "$213.53",
        "quantity": 7,
        "createdDate": "Sun Oct 11 2015 09:05:17 GMT+0000",
        "createdBy": "Jerri Clarke",
        "isActive": true,
        "id": 1
      },
      {
        "buyInPrice": "$365.51",
        "quantity": 7,
        "createdDate": "Sun May 25 2014 19:32:00 GMT+0000",
        "createdBy": "Alyson Bowers",
        "isActive": true,
        "id": 2
      },
      {
        "buyInPrice": "$182.49",
        "quantity": 7,
        "createdDate": "Mon Feb 03 2014 18:06:37 GMT+0000",
        "createdBy": "Briana Santos",
        "isActive": true,
        "id": 3
      },
      {
        "buyInPrice": "$195.37",
        "quantity": 7,
        "createdDate": "Sun Sep 20 2015 12:36:30 GMT+0000",
        "createdBy": "Hunt Carroll",
        "isActive": true,
        "id": 4
      }
    ],
    "code": "Mom-256",
    "name": "Momentia",
    "isActive": true,
    "id": 7
  },
  {
    "inventory": [
      {
        "buyInPrice": "$335.41",
        "quantity": 7,
        "createdDate": "Tue Jan 14 2014 01:49:06 GMT+0000",
        "createdBy": "Blevins Cotton",
        "isActive": true,
        "id": 0
      },
      {
        "buyInPrice": "$213.53",
        "quantity": 7,
        "createdDate": "Sun Oct 11 2015 09:05:17 GMT+0000",
        "createdBy": "Jerri Clarke",
        "isActive": true,
        "id": 1
      },
      {
        "buyInPrice": "$365.51",
        "quantity": 7,
        "createdDate": "Sun May 25 2014 19:32:00 GMT+0000",
        "createdBy": "Alyson Bowers",
        "isActive": true,
        "id": 2
      },
      {
        "buyInPrice": "$182.49",
        "quantity": 7,
        "createdDate": "Mon Feb 03 2014 18:06:37 GMT+0000",
        "createdBy": "Briana Santos",
        "isActive": true,
        "id": 3
      },
      {
        "buyInPrice": "$195.37",
        "quantity": 7,
        "createdDate": "Sun Sep 20 2015 12:36:30 GMT+0000",
        "createdBy": "Hunt Carroll",
        "isActive": true,
        "id": 4
      }
    ],
    "code": "Twi-615",
    "name": "Twiggery",
    "isActive": true,
    "id": 8
  },
  {
    "inventory": [
      {
        "buyInPrice": "$335.41",
        "quantity": 7,
        "createdDate": "Tue Jan 14 2014 01:49:06 GMT+0000",
        "createdBy": "Blevins Cotton",
        "isActive": true,
        "id": 0
      },
      {
        "buyInPrice": "$213.53",
        "quantity": 7,
        "createdDate": "Sun Oct 11 2015 09:05:17 GMT+0000",
        "createdBy": "Jerri Clarke",
        "isActive": true,
        "id": 1
      },
      {
        "buyInPrice": "$365.51",
        "quantity": 7,
        "createdDate": "Sun May 25 2014 19:32:00 GMT+0000",
        "createdBy": "Alyson Bowers",
        "isActive": true,
        "id": 2
      },
      {
        "buyInPrice": "$182.49",
        "quantity": 7,
        "createdDate": "Mon Feb 03 2014 18:06:37 GMT+0000",
        "createdBy": "Briana Santos",
        "isActive": true,
        "id": 3
      },
      {
        "buyInPrice": "$195.37",
        "quantity": 7,
        "createdDate": "Sun Sep 20 2015 12:36:30 GMT+0000",
        "createdBy": "Hunt Carroll",
        "isActive": true,
        "id": 4
      }
    ],
    "code": "Ape-182",
    "name": "Apextri",
    "isActive": true,
    "id": 9
  }
]);
});


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Andrew's app listening on", addr.address + ":" + addr.port);
});
