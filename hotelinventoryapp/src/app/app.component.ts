import { AfterViewInit, Component, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //template: '<h1>Hotel Inventory App</h1>s',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'hotelinventoryapp';
  role = 'Admin';

  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInit() {
    this.name.nativeElement.innerText = 'Hotel Inventory App';
  }

  // load the component dynamically using view child 
  
  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
