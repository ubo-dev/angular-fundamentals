import { HeaderComponent } from './../header/header.component';
import {
  Component,
  OnInit,
  DoCheck,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hotelname = 'Hotel California';
  numberOfRooms = 10;
  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];
  title = 'Room List';

  // using view child to access the header component from the rooms component
  // static: true is used to make sure that the view is initialized before the component is initialized

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponents!: QueryList<HeaderComponent>;
  //constructor should be used for dependency injection
  constructor() {}

  // A lifecycle hook that is called after Angular has fully initialized
  // a component's view.
  // Define an `ngAfterViewInit()` method to handle any additional initialization tasks.
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  // diffrence between ngOnOnit and ngAfterViewInit is that ngAfterViewInit is called after the view is initialized
  ngAfterViewInit() {
    this.headerComponent.title = 'Rooms View';

    this.headerChildrenComponents.forEach((headerComponent) => {
      headerComponent.title = 'Last Title';
    });
  }

  //ngDoCheck is a lifecycle hook that is called after every change detection cycle
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  //ngOnInit is a lifecycle hook that is called after the constructor
  ngOnInit(): void {
    console.log(this.headerComponent);

    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe',
        amenities: 'AC, TV, WiFi',
        price: 1000,
        photos:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gordionhotel.com%2F&psig=AOvVaw1db99h5-ekRtMEiZ9flgY1&ust=1678887858055000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCQ7OXG2_0CFQAAAAAdAAAAABAD',
        checkinTime: new Date('2020-01-01'),
        checkoutTime: new Date('2020-01-02'),
        rating: 4,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe with Balcony',
        amenities: 'AC, TV, WiFi, Fridge',
        price: 1000,
        photos:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gordionhotel.com%2F&psig=AOvVaw1db99h5-ekRtMEiZ9flgY1&ust=1678887858055000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCQ7OXG2_0CFQAAAAAdAAAAABAD',
        checkinTime: new Date('2020-02-02'),
        checkoutTime: new Date('2020-02-03'),
        rating: 5,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'AC, TV, WiFi, Fridge, Microwave',
        price: 1000,
        photos:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gordionhotel.com%2F&psig=AOvVaw1db99h5-ekRtMEiZ9flgY1&ust=1678887858055000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCQ7OXG2_0CFQAAAAAdAAAAABAD',
        checkinTime: new Date('2020-02-02'),
        checkoutTime: new Date('2020-02-03'),
        rating: 2.6,
      },
    ];
  }

  hideRooms = false;
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Private Suite',
      amenities: 'AC, TV, WiFi, Fridge, Microwave',
      price: 1000,
      photos:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gordionhotel.com%2F&psig=AOvVaw1db99h5-ekRtMEiZ9flgY1&ust=1678887858055000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCQ7OXG2_0CFQAAAAAdAAAAABAD',
      checkinTime: new Date('2020-02-02'),
      checkoutTime: new Date('2020-02-03'),
      rating: 2.6,
    };
    // ... is the spread operator that is used to add an element to an array without mutating the original array
    this.roomList = [...this.roomList, room];
  }
}
