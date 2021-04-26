import axios from "axios";

// Export an object containing methods we'll use for accessing the Random User API

export default {
//   getRandomUsers: function() {
//     return axios.get("https://randomuser.me/api/?results=10&nat=us");
//   }

    // getRandomUsers: function() { return  
    results:  [
    {
    "name": {
    "title": "Mr",
    "first": "Bryan",
    "last": "Peterson"
    },
    "location": {
    "street": {
    "number": 6881,
    "name": "Daisy Dr"
    },
    "city": "Providence",
    "state": "Kentucky",
    "country": "United States",
    "postcode": 32446,
    "coordinates": {
    "latitude": "86.5218",
    "longitude": "-49.6813"
    },
    "timezone": {
    "offset": "+3:30",
    "description": "Tehran"
    }
    },
    "email": "bryan.peterson@example.com",
    "dob": {
    "date": "1969-09-03T13:36:01.399Z",
    "age": 52
    },
    "phone": "(344)-081-6413",
    "cell": "(294)-388-3864",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/88.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/88.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/88.jpg"
    }
    },
    {
    "name": {
    "title": "Mr",
    "first": "John",
    "last": "Green"
    },
    "location": {
    "street": {
    "number": 2447,
    "name": "Lovers Ln"
    },
    "city": "Nampa",
    "state": "Alabama",
    "country": "United States",
    "postcode": 57663,
    "coordinates": {
    "latitude": "-59.8769",
    "longitude": "-63.4236"
    },
    "timezone": {
    "offset": "-3:00",
    "description": "Brazil, Buenos Aires, Georgetown"
    }
    },
    "email": "john.green@example.com",
    "dob": {
    "date": "1955-02-28T13:16:08.863Z",
    "age": 66
    },
    "phone": "(218)-535-7662",
    "cell": "(460)-323-0921",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/42.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/42.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/42.jpg"
    }
    },
    {
    "name": {
    "title": "Mr",
    "first": "Roland",
    "last": "Owens"
    },
    "location": {
    "street": {
    "number": 5533,
    "name": "College St"
    },
    "city": "Gilbert",
    "state": "New Mexico",
    "country": "United States",
    "postcode": 15205,
    "coordinates": {
    "latitude": "-23.2888",
    "longitude": "175.8780"
    },
    "timezone": {
    "offset": "+4:00",
    "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
    }
    },
    "email": "roland.owens@example.com",
    "dob": {
    "date": "1976-01-22T11:36:35.202Z",
    "age": 45
    },
    "phone": "(914)-618-4487",
    "cell": "(635)-150-5696",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/41.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/41.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/41.jpg"
    }
    },
    {
    "name": {
    "title": "Mr",
    "first": "James",
    "last": "Stephens"
    },
    "location": {
    "street": {
    "number": 9623,
    "name": "Westheimer Rd"
    },
    "city": "Elizabeth",
    "state": "Pennsylvania",
    "country": "United States",
    "postcode": 15577,
    "coordinates": {
    "latitude": "-28.7213",
    "longitude": "-89.7999"
    },
    "timezone": {
    "offset": "+5:00",
    "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
    }
    },
    "email": "james.stephens@example.com",
    "dob": {
    "date": "1974-12-03T08:53:04.482Z",
    "age": 47
    },
    "phone": "(177)-725-0203",
    "cell": "(798)-396-7396",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/14.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/14.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/14.jpg"
    }
    },
    {
    "name": {
    "title": "Mr",
    "first": "Rodney",
    "last": "Powell"
    },
    "location": {
    "street": {
    "number": 9870,
    "name": "Daisy Dr"
    },
    "city": "Hartford",
    "state": "Ohio",
    "country": "United States",
    "postcode": 47487,
    "coordinates": {
    "latitude": "-15.4024",
    "longitude": "155.2092"
    },
    "timezone": {
    "offset": "-6:00",
    "description": "Central Time (US & Canada), Mexico City"
    }
    },
    "email": "rodney.powell@example.com",
    "dob": {
    "date": "1966-08-25T02:29:18.966Z",
    "age": 55
    },
    "phone": "(248)-091-7292",
    "cell": "(730)-319-3790",
    "picture": {
    "large": "https://randomuser.me/api/portraits/men/65.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/65.jpg"
    }
    }
    ]
}
// }