import { Component, OnInit } from '@angular/core';
import {Temple} from './temple.model';

@Component({
  selector: 'app-json-model',
  templateUrl: './json-model.component.html',
  styleUrls: ['./json-model.component.css']
})
export class JsonModelComponent implements OnInit {
  templeList: Temple;
  json1: any = '';

  constructor(){}

  ngOnInit() {
    this.assignJson();
    this.assignModel();
  }

  assignModel(){
     this.templeList = this.json1;
     console.log('Temple List', this.templeList);
  }

  assignJson() {
    this.json1 = {
      "status": 200,
      "message": "Event list.",
      "payload": {
        "data": [
          {
            "id": 1,
            "name": "Poonam",
            "description": "Maha Poonam",
            "startDate": "2017-03-12 00:00:00",
            "endDate": "2017-03-13 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 1,
                "eventId": "1",
                "roomTypeId": "1",
                "rate": "1500",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 2,
            "name": "Geeta Path",
            "description": "Maha Geeta Path",
            "startDate": "2017-03-14 00:00:00",
            "endDate": "2017-03-15 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 2,
                "eventId": "2",
                "roomTypeId": "1",
                "rate": "300",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 5,
            "name": "Ramayan",
            "description": "Ramayan Path",
            "startDate": "2017-03-20 00:00:00",
            "endDate": "2017-03-21 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 5,
                "eventId": "5",
                "roomTypeId": "1",
                "rate": "300",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 6,
            "name": "Slok",
            "description": "Slok",
            "startDate": "2017-03-26 00:00:00",
            "endDate": "2017-03-27 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 6,
                "eventId": "6",
                "roomTypeId": "1",
                "rate": "300",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 45,
                "eventId": "6",
                "roomTypeId": "32",
                "rate": "400",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 8,
            "name": "Masti Dairo",
            "description": "Masti Dairo",
            "startDate": "2017-04-01 00:00:00",
            "endDate": "2017-04-01 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 8,
                "eventId": "8",
                "roomTypeId": "1",
                "rate": "300",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 116,
                "eventId": "8",
                "roomTypeId": "32",
                "rate": "550",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 9,
            "name": "Maha Masti Dairo",
            "description": "Maha Masti Dairo",
            "startDate": "2017-04-02 00:00:00",
            "endDate": "2017-04-02 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 9,
                "eventId": "9",
                "roomTypeId": "1",
                "rate": "300",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 117,
                "eventId": "9",
                "roomTypeId": "32",
                "rate": "600",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 10,
            "name": "Nai kau Dairo",
            "description": "Nai kau Dairo",
            "startDate": "2017-04-03 00:00:00",
            "endDate": "2017-04-04 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 10,
                "eventId": "10",
                "roomTypeId": "1",
                "rate": "300",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 118,
                "eventId": "10",
                "roomTypeId": "32",
                "rate": "600",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 13,
            "name": "value",
            "description": " value",
            "startDate": "2017-05-30 00:00:00",
            "endDate": "2017-05-31 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 13,
                "eventId": "13",
                "roomTypeId": "30",
                "rate": "200",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 14,
                "eventId": "13",
                "roomTypeId": "31",
                "rate": "500",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 15,
                "eventId": "13",
                "roomTypeId": "34",
                "rate": "100",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 16,
                "eventId": "13",
                "roomTypeId": "39",
                "rate": "4000",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 17,
                "eventId": "13",
                "roomTypeId": "40",
                "rate": "1000",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 14,
            "name": "Jayanti",
            "description": "Jayanti",
            "startDate": "2017-03-01 00:00:00",
            "endDate": "2017-03-02 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 18,
                "eventId": "14",
                "roomTypeId": "30",
                "rate": "200",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 19,
                "eventId": "14",
                "roomTypeId": "31",
                "rate": "500",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 20,
                "eventId": "14",
                "roomTypeId": "34",
                "rate": "100",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 21,
                "eventId": "14",
                "roomTypeId": "39",
                "rate": "4000",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 22,
                "eventId": "14",
                "roomTypeId": "40",
                "rate": "1000",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 15,
            "name": "Sakhya Jayanti",
            "description": "Nai kau",
            "startDate": "2017-04-13 00:00:00",
            "endDate": "2017-04-14 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 23,
                "eventId": "15",
                "roomTypeId": "30",
                "rate": "200",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 24,
                "eventId": "15",
                "roomTypeId": "31",
                "rate": "500",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 25,
                "eventId": "15",
                "roomTypeId": "34",
                "rate": "100",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 26,
                "eventId": "15",
                "roomTypeId": "39",
                "rate": "4000",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 27,
                "eventId": "15",
                "roomTypeId": "40",
                "rate": "1000",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 16,
            "name": "Sakhya JayantiSakhya Jayanti",
            "description": "Sakhya JayantiSakhya Jayanti",
            "startDate": "2017-03-05 00:00:00",
            "endDate": "2017-03-06 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 28,
                "eventId": "16",
                "roomTypeId": "30",
                "rate": "200",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 29,
                "eventId": "16",
                "roomTypeId": "31",
                "rate": "500",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 30,
                "eventId": "16",
                "roomTypeId": "34",
                "rate": "100",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 31,
                "eventId": "16",
                "roomTypeId": "39",
                "rate": "4000",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 32,
                "eventId": "16",
                "roomTypeId": "40",
                "rate": "1000",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 17,
            "name": "test 22",
            "description": "test 22",
            "startDate": "2017-06-01 00:00:00",
            "endDate": "2017-06-02 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 33,
                "eventId": "17",
                "roomTypeId": "30",
                "rate": "200",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 34,
                "eventId": "17",
                "roomTypeId": "31",
                "rate": "500",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 35,
                "eventId": "17",
                "roomTypeId": "34",
                "rate": "100",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 36,
                "eventId": "17",
                "roomTypeId": "39",
                "rate": "4000",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 37,
                "eventId": "17",
                "roomTypeId": "40",
                "rate": "1000",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 19,
            "name": "Nai kau",
            "description": "Nai kau",
            "startDate": "2017-07-02 00:00:00",
            "endDate": "2017-07-11 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 40,
                "eventId": "19",
                "roomTypeId": "30",
                "rate": "200",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 41,
                "eventId": "19",
                "roomTypeId": "31",
                "rate": "500",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 42,
                "eventId": "19",
                "roomTypeId": "34",
                "rate": "100",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 43,
                "eventId": "19",
                "roomTypeId": "39",
                "rate": "4000",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 44,
                "eventId": "19",
                "roomTypeId": "40",
                "rate": "1000",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 20,
            "name": "Extra item",
            "description": "Extra item",
            "startDate": "2000-01-20 00:00:00",
            "endDate": "2000-01-20 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 51,
                "eventId": "20",
                "roomTypeId": "30",
                "rate": "200",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 52,
                "eventId": "20",
                "roomTypeId": "31",
                "rate": "500",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 53,
                "eventId": "20",
                "roomTypeId": "34",
                "rate": "100",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 54,
                "eventId": "20",
                "roomTypeId": "39",
                "rate": "4000",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 55,
                "eventId": "20",
                "roomTypeId": "40",
                "rate": "1000",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 21,
            "name": "Dont Go",
            "description": "Dont Go",
            "startDate": "2017-03-08 00:00:00",
            "endDate": "2017-03-08 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 81,
                "eventId": "21",
                "roomTypeId": "30",
                "rate": "200",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 82,
                "eventId": "21",
                "roomTypeId": "31",
                "rate": "500",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 83,
                "eventId": "21",
                "roomTypeId": "34",
                "rate": "100",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 84,
                "eventId": "21",
                "roomTypeId": "39",
                "rate": "4000",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 85,
                "eventId": "21",
                "roomTypeId": "40",
                "rate": "1000",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 28,
            "name": "Sakhya Jayanti1",
            "description": "Sakhya Jayanti1",
            "startDate": "2017-04-24 00:00:00",
            "endDate": "2017-04-25 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 124,
                "eventId": "28",
                "roomTypeId": "30",
                "rate": "200",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 125,
                "eventId": "28",
                "roomTypeId": "31",
                "rate": "500",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 126,
                "eventId": "28",
                "roomTypeId": "34",
                "rate": "100",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 127,
                "eventId": "28",
                "roomTypeId": "39",
                "rate": "4000",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 128,
                "eventId": "28",
                "roomTypeId": "40",
                "rate": "1000",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 29,
            "name": "Sakhya Jayanti232",
            "description": "Sakhya Jayanti112",
            "startDate": "2017-08-01 00:00:00",
            "endDate": "2017-08-02 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 129,
                "eventId": "29",
                "roomTypeId": "30",
                "rate": "200",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 130,
                "eventId": "29",
                "roomTypeId": "31",
                "rate": "500",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 131,
                "eventId": "29",
                "roomTypeId": "34",
                "rate": "100",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 132,
                "eventId": "29",
                "roomTypeId": "39",
                "rate": "4000",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 133,
                "eventId": "29",
                "roomTypeId": "40",
                "rate": "1000",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 30,
            "name": "Localhost",
            "description": "Localhost",
            "startDate": "2017-03-28 00:00:00",
            "endDate": "2017-03-29 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 134,
                "eventId": "30",
                "roomTypeId": "30",
                "rate": "200",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 135,
                "eventId": "30",
                "roomTypeId": "31",
                "rate": "500",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 136,
                "eventId": "30",
                "roomTypeId": "34",
                "rate": "100",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 137,
                "eventId": "30",
                "roomTypeId": "39",
                "rate": "4000",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 138,
                "eventId": "30",
                "roomTypeId": "40",
                "rate": "1000",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 31,
            "name": "self used",
            "description": "self used",
            "startDate": "2017-08-07 00:00:00",
            "endDate": "2017-08-08 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 139,
                "eventId": "31",
                "roomTypeId": "30",
                "rate": "200",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 140,
                "eventId": "31",
                "roomTypeId": "31",
                "rate": "500",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 141,
                "eventId": "31",
                "roomTypeId": "34",
                "rate": "100",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 142,
                "eventId": "31",
                "roomTypeId": "39",
                "rate": "4000",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 143,
                "eventId": "31",
                "roomTypeId": "40",
                "rate": "1000",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          },
          {
            "id": 38,
            "name": "mjkaasdfa",
            "description": "alldkk",
            "startDate": "2017-10-21 00:00:00",
            "endDate": "2018-01-19 00:00:00",
            "templeId": "1",
            "isEnable": "1",
            "event_room_type_rate": [
              {
                "id": 158,
                "eventId": "38",
                "roomTypeId": "30",
                "rate": "200",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 159,
                "eventId": "38",
                "roomTypeId": "31",
                "rate": "500",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 160,
                "eventId": "38",
                "roomTypeId": "34",
                "rate": "100",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 161,
                "eventId": "38",
                "roomTypeId": "39",
                "rate": "4000",
                "templeId": "1",
                "isEnable": "1"
              },
              {
                "id": 162,
                "eventId": "38",
                "roomTypeId": "40",
                "rate": "1000",
                "templeId": "1",
                "isEnable": "1"
              }
            ],
            "temple": {
              "id": 1,
              "name": "Shree Swaminarayan Mandir - Vadtal",
              "aliasName": "Vadtal",
              "address": "vadtal",
              "countryId": "1",
              "stateId": "1",
              "cityId": "1",
              "pincode": "",
              "email": null,
              "landlineNo": "",
              "mobileNo": "8141811428",
              "image": "1490172110.jpg",
              "updatedBy": "1074",
              "isEnable": "1"
            }
          }
        ]
      },
      "pager": []
    }

    console.log("Json Key", this.json1.id);
  }
}
