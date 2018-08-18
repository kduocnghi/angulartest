import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  name ="enter your name" ;
  valueInput = "";
  forgot=false;
  banh = "";
  constructor() { 
    

  }

  ngOnInit() {
  }

  toggle(){
    this.forgot = !this.forgot;
  }

  showEvent(event){
    console.log(event);
  }


}
