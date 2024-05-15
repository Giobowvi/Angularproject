import { Component } from '@angular/core';
import { RoomService } from '../shared/room.service';

@Component({
  selector: 'app-hotelbooking',
  templateUrl: './hotelbooking.component.html',
  styleUrls: ['./hotelbooking.component.css']
})
export class HotelbookingComponent {
  rooms: any[] = [];
  

  constructor(private RoomService: RoomService) { }

  ngOnInit(): void {
    this.RoomService.getAllRooms().subscribe((rooms: any[]) => {
      this.rooms = rooms;
    });
  }


  filteredRooms = this.rooms;

  filterByPrice(price: number) {
    this.filteredRooms = this.rooms.filter(room => room.price === price);
  }

  


}