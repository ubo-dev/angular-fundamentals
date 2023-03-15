import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, SimpleChanges, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('img') postImg = ''

  // event emitter used to send data to parent component 
  // Output() use to make evet reachable for parent component
  @Output() imgSelected = new EventEmitter<string>();

  constructor() { 
    console.log('constructor is called', this.postImg);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy is called');
  }
  // ngOnChanges runs when input property changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is called');
  }

  // ngDoCheck runs when angular checks for changes
  // goal of ngDoCheck perform updates angular may miss
  ngDoCheck(): void {
    console.log('ngDoCheck is called');
  }

  ngOnInit() {
    console.log('ngOnInit is called', this.postImg);
  }


  ngAfterContentChecked() 
  {
    console.log('ngAfterContentChecked is called');
  }

  ngAfterContentInit() 
  {
    console.log('ngAfterContentInit is called');
  }

  ngAfterViewChecked() 
  {
    console.log('ngAfterViewChecked is called');
  }

  ngAfterViewInit() 
  {
    console.log('ngAfterViewInit is called');
  }

  

}
