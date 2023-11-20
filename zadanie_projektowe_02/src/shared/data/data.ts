import { Gender } from "../enums/custom-enums";

export const initialPeople = [
    {
      "id": "c57429f1-3b21-4c8c-8a29-3f41a8ec12ab",
      "name": "Alice",
      "surname": "Johnson",
      "age": 28,
      "gender": Gender.FEMALE,
      "employed": true,
      "studentStatus": false,
      "stillMissing": true,
      "address": {
        "street": "456 Oak St",
        "apartmentNumber": "Apt 10",
        "zipCode": "54321",
        "city": "Example City",
        "country": "Example Country"
      },
      "lastTimeSeen": new Date("2023-01-01T12:30:00.000Z"),
      "contact": {
        "email": "alice.johnson@example.com",
        "phone": "987-654-3210"
      }
    },
    {
      "id": "82d3d105-1635-43c5-a3fc-809aab3b61d9",
      "name": "Bob",
      "surname": "Smith",
      "age": 35,
      "gender": Gender.MALE,
      "employed": true,
      "studentStatus": false,
      "stillMissing": true,
      "address": {
        "street": "789 Pine St",
        "apartmentNumber": "Apt 5",
        "zipCode": "12345",
        "city": "Example City",
        "country": "Example Country"
      },
      "lastTimeSeen":new Date("2023-01-02T15:45:00.000Z") ,
      "contact": {
        "email": "bob.smith@example.com",
        "phone": "123-456-7890"
      }
    },
    {
      "id": "6a4f7890-2892-4a97-824b-7f0f8281a6a3",
      "name": "Charlie",
      "surname": "Williams",
      "age": 42,
      "gender": Gender.MALE,
      "employed": false,
      "studentStatus": true,
      "stillMissing": false,
      "address": {
        "street": "321 Maple St",
        "apartmentNumber": "Apt 7",
        "zipCode": "67890",
        "city": "Example City",
        "country": "Example Country"
      },
      "lastTimeSeen": new Date("2023-01-03T09:15:00.000Z"),
      "contact": {
        "email": "charlie.williams@example.com",
        "phone": "456-789-0123"
      }
    },
    {
      "id": "fd3bf3a2-3c8b-4d29-9532-c8a832a28751",
      "name": "David",
      "surname": "Brown",
      "age": 30,
      "gender": Gender.MALE,
      "employed": true,
      "studentStatus": false,
      "stillMissing": true,
      "address": {
        "street": "876 Birch St",
        "apartmentNumber": "Apt 3",
        "zipCode": "45678",
        "city": "Example City",
        "country": "Example Country"
      },
      "lastTimeSeen": new Date("2023-01-04T18:30:00.000Z"),
      "contact": {
        "email": "david.brown@example.com",
        "phone": "234-567-8901"
      }
    },
    {
      "id": "9e9b06aa-efac-42c7-8c4b-76f5a25c9f0f",
      "name": "Emma",
      "surname": "Miller",
      "age": 25,
      "gender":  Gender.FEMALE,
      "employed": false,
      "studentStatus": true,
      "stillMissing": false,
      "address": {
        "street": "543 Cedar St",
        "apartmentNumber": "Apt 8",
        "zipCode": "34567",
        "city": "Example City",
        "country": "Example Country"
      },
      "lastTimeSeen": new Date("2023-01-05T14:00:00.000Z"),
      "contact": {
        "email": "emma.miller@example.com",
        "phone": "345-678-9012"
      }
    },
    {
      "id": "120e6cb0-1e68-4990-a27a-5e51881bc07a",
      "name": "Frank",
      "surname": "Davis",
      "age": 38,
      "gender": Gender.MALE,
      "employed": true,
      "studentStatus": false,
      "stillMissing": true,
      "address": {
        "street": "987 Elm St",
        "apartmentNumber": "Apt 2",
        "zipCode": "23456",
        "city": "Example City",
        "country": "Example Country"
      },
      "lastTimeSeen":new Date( "2023-01-06T10:45:00.000Z"),
      "contact": {
        "email": "frank.davis@example.com",
        "phone": "567-890-1234"
      }
    },
    {
      "id": "0d0e8741-7da0-49fb-9d36-1e091dd52d71",
      "name": "Grace",
      "surname": "Martinez",
      "age": 29,
      "gender":  Gender.FEMALE,
      "employed": false,
      "studentStatus": false,
      "stillMissing": true,
      "address": {
        "street": "654 Fir St",
        "apartmentNumber": "Apt 6",
        "zipCode": "78901",
        "city": "Example City",
        "country": "Example Country"
      },
      "lastTimeSeen": new Date("2023-01-07T17:15:00.000Z"),
      "contact": {
        "email": "grace.martinez@example.com",
        "phone": "678-901-2345"
      }
    },
    {
      "id": "d3476da4-e14e-4e76-9264-3b1168c9f2dd",
      "name": "Henry",
      "surname": "Garcia",
      "age": 33,
      "gender": Gender.MALE,
      "employed": true,
      "studentStatus": false,
      "stillMissing": false,
      "address": {
        "street": "876 Pine St",
        "apartmentNumber": "Apt 9",
        "zipCode": "89012",
        "city": "Example City",
        "country": "Example Country"
      },
      "lastTimeSeen": new Date("2023-01-08T08:30:00.000Z"),
      "contact": {
        "email": "henry.garcia@example.com",
        "phone": "789-012-3456"
      }
    },
    {
      "id": "9d9771ac-8473-4392-b82a-5a65de77ee3a",
      "name": "Isabel",
      "surname": "Rodriguez",
      "age": 26,
      "gender":  Gender.FEMALE,
      "employed": true,
      "studentStatus": false,
      "stillMissing": true,
      "address": {
        "street": "234 Cedar St",
        "apartmentNumber": "Apt 1",
        "zipCode": "67890",
        "city": "Example City",
        "country": "Example Country"
      },
      "lastTimeSeen":new Date( "2023-01-09T12:00:00.000Z"),
      "contact": {
        "email": "isabel.rodriguez@example.com",
        "phone": "890-123-4567"
      }
    },
    {
      "id": "e8b31c7b-27c4-4e32-a579-119a552cd1e2",
      "name": "Jack",
      "surname": "Taylor",
      "age": 31,
      "gender": Gender.MALE,
      "employed": true,
      "studentStatus": false,
      "stillMissing": false,
      "address": {
        "street": "345 Birch St",
        "apartmentNumber": "Apt 4",
        "zipCode": "12345",
        "city": "Example City",
        "country": "Example Country"
      },
      "lastTimeSeen": new Date("2023-01-10T14:45:00.000Z"),
      "contact": {
        "email": "jack.taylor@example.com",
        "phone": "901-234-5678"
      }
    },
    {
      "id": "5e3c9a62-c692-4d12-b68f-7a9e5c9a7f61",
      "name": "Karen",
      "surname": "Moore",
      "age": 34,
      "gender": Gender.FEMALE,
      "employed": false,
      "studentStatus": true,
      "stillMissing": true,
      "address": {
        "street": "789 Oak St",
        "apartmentNumber": "Apt 8",
        "zipCode": "23456",
        "city": "Example City",
        "country": "Example Country"
      },
      "lastTimeSeen":new Date("2023-01-11T09:30:00.000Z") ,
      "contact": {
        "email": "karen.moore@example.com",
        "phone": "123-456-7890"
      }
    },
    {
      "id": "cf6a4f26-18f4-4b91-a3a8-78d4703a92a0",
      "name": "Leo",
      "surname": "Lee",
      "age": 27,
      "gender": Gender.MALE,
      "employed": true,
      "studentStatus": false,
      "stillMissing": false,
      "address": {
        "street": "654 Fir St",
        "apartmentNumber": "Apt 3",
        "zipCode": "34567",
        "city": "Example City",
        "country": "Example Country"
      },
      "lastTimeSeen": new Date("2023-01-12T16:15:00.000Z") ,
      "contact": {
        "email": "leo.lee@example.com",
        "phone": "234-567-8901"
      }
    },
    {
      "id": "fe635b16-1b18-4d1a-9f3b-8e3945bfe356",
      "name": "Mia",
      "surname": "Anderson",
      "age": 32,
      "gender":  Gender.FEMALE,
      "employed": true,
      "studentStatus": false,
      "stillMissing": true,
      "address": {
        "street": "432 Maple St",
        "apartmentNumber": "Apt 7",
        "zipCode": "45678",
        "city": "Example City",
        "country": "Example Country"
      },
      "lastTimeSeen": new Date("2023-01-13T11:00:00.000Z"),
      "contact": {
        "email": "mia.anderson@example.com",
        "phone": "345-678-9012"
      }
    },
    {
      "id": "35c0c0e3-b8c4-4707-8319-90e1c61f777c",
      "name": "Noah",
      "surname": "Walker",
      "age": 29,
      "gender": Gender.MALE,
      "employed": false,
      "studentStatus": true,
      "stillMissing": false,
      "address": {
        "street": "876 Pine St",
        "apartmentNumber": "Apt 5",
        "zipCode": "56789",
        "city": "Example City",
        "country": "Example Country"
      },
      "lastTimeSeen": new Date("2023-01-14T18:45:00.000Z"),
      "contact": {
        "email": "noah.walker@example.com",
        "phone": "456-789-0123"
      }
    },
    {
      "id": "a7bf2a76-124f-4cc3-8b16-c19f163c6189",
      "name": "Olivia",
      "surname": "White",
      "age": 36,
      "gender":  Gender.FEMALE,
      "employed": true,
      "studentStatus": false,
      "stillMissing": true,
      "address": {
        "street": "765 Cedar St",
        "apartmentNumber": "Apt 2",
        "zipCode": "67890",
        "city": "Example City",
        "country": "Example Country"
      },
      "lastTimeSeen": new Date("2023-01-15T13:30:00.000Z"),
      "contact": {
        "email": "olivia.white@example.com",
        "phone": "567-890-1234"
      }
    },
    {
      "id": "31d77485-6881-43e8-87b8-eb8c96101902",
      "name": "Peter",
      "surname": "Jones",
      "age": 30,
      "gender": Gender.MALE,
      "employed": true,
      "studentStatus": false,
      "stillMissing": true,
      "address": {
        "street": "123 Oak St",
        "apartmentNumber": "Apt 6",
        "zipCode": "78901",
        "city": "Example City",
        "country": "Example Country"
      },
      "lastTimeSeen": new Date("2023-01-16T09:15:00.000Z"),
      "contact": {
        "email": "peter.jones@example.com",
        "phone": "678-901-2345"
      }
    }

]  