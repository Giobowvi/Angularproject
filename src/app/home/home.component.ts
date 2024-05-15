
import { Component } from '@angular/core';
import { HotelsService } from '../shared/hotels.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hotels: any[] = [];
  

  constructor(private hotelsService: HotelsService) { }

  ngOnInit(): void {
    this.hotelsService.getAllProducts().subscribe((hotels: any[]) => {
      this.hotels = hotels;
    });
  }
}