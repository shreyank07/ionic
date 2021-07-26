import { Component, OnInit,ViewChild } from '@angular/core';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel'

@Component({
  selector: 'app-weboffers',
  templateUrl: './weboffers.page.html',
  styleUrls: ['./weboffers.page.scss'],
})
export class WeboffersPage implements OnInit {

  @ViewChild(NgxWheelComponent, { static: false }) wheel;

  seed = [...Array(12).keys()]
  idToLandOn: any;
  items: any[];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL
  textAlignment: TextAlignment = TextAlignment.OUTER

  ngOnInit(){
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    const colors = ['#FF0000', '#FF7F00' , '#FFFF00' , '#00FF00' , '#0000FF' , '#4B0082']
    this.items = this.seed.map((value) => ({
      fillStyle: colors[value % 6],
      text: `Prize ${value}`,
      id: value,
      textFillStyle: 'black',
      textFontSize: '16'
    }))
  }
  reset() {
    this.wheel.reset()
  }
  // before() {
  //   alert('Your wheel is about to spin')
  // }
  getValue ;
  value ;
  async spin() {
    
    // var valueList = ["100","110","40","80","10","120","30","70"];
    // var getValue = valueList[Math.floor(Math.random() * valueList.length)];
    
    this.getValue = this.seed[Math.floor(Math.random() * this.seed.length)];
     this.idToLandOn = this.getValue;
    await new Promise(resolve => setTimeout(resolve, 0));
    this.wheel.spin()
  }

  after() {
    var valueList = ["5","10","8","1","40","3","15","13","24","9","21","17"];
    this.value = valueList[this.getValue]
    alert(this.value)
  }
}
