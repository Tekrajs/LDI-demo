# demo-Api

## Install 
- Install dependency
```
npm install
```
- Setup environment variable
```
- cp .env.example .env
```
- Start
```
npm run dev
```
- Simulate Sync Manually
```
npm run sync
```

## Sync

Sync feature is the data synchronization feature for the given data endpoint

### File
- sync.ts

## Endpoints

### Status Codes
This API returns the following status codes.

| Status Code | Description   |
| :---        |    :----:     |
| 200         | `OK`          |
| 400         | `BAD REQUEST` |
| 500         | `Server Error`|  


### Lists

Used for obtaining Lists of all data

`GET api/startlist`

#### Payload

`query paramas limit and offset=20` for paginated result

`GET api/startlist?limit=10&offset=xx`

`filters can be passed on request body`

```
{
    "filters":{
        "emailAddress":"asdf@asdf.asdf"
    }
}
```

sample axios request would be 

```

var axios = require('axios');
var data = JSON.stringify({
  "filters": {
    "emailAddress": "asdf@asdf.asdf"
  }
});

var config = {
  method: 'get',
  url: 'http://localhost:3000/api/startlist?limit=10&offset=20',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


```

#### Response

```
{
    "success": true,
    "data": [
        { ... } 
        ]
}
```


`POST api/startlist`

used to post data to the api

#### Payload

```
{
            "id": "61a8da5719f6423fdgfgf67",
            "bookingDate": "2021-12-02T14:38:15.688Z",
            "emailAddress": "suzan@asdf.asdf",
            "firstName": "suzan",
            "lastName": "aasdf",
            "status": "CONFIRMED",
            "eventId": 18414,
            "eventTitle": "The Great North Run",
            "organiserTitle": "Great Run",
            "organiserId": 26391,
            "raceId": "jKm3jv",
            "raceStartDate": "2022-09-12T09:00:00.000Z",
            "raceTitle": "Half Marathon",
            "ticketPrice": {
                "originalValue": 4300,
                "value": 4300,
                "fee": 0,
                "currencyCode": "GBP"
            },
            "ticketId": "8907393302",
            "ticketTitle": "Standard Entry"
        }
```

#### Response

```

{
    "success": true,
    "data": {
        "id": "61a8da5719f6423fdgfgf67",
        "bookingDate": "2021-12-02T14:38:15.688Z",
        "emailAddress": "suzan@asdf.asdf",
        "firstName": "suzan",
        "lastName": "aasdf",
        "status": "CONFIRMED",
        "eventId": 18414,
        "eventTitle": "The Great North Run",
        "organiserTitle": "Great Run",
        "organiserId": 26391,
        "raceId": "jKm3jv",
        "raceStartDate": "2022-09-12T09:00:00.000Z",
        "raceTitle": "Half Marathon",
        "ticketPrice": {
            "originalValue": 4300,
            "value": 4300,
            "fee": 0,
            "currencyCode": "GBP"
        },
        "ticketId": "8907393302",
        "ticketTitle": "Standard Entry"
    }
}

```
