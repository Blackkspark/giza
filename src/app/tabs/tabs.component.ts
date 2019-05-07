import { Component, OnInit } from '@angular/core';
import {Tab} from "../tab";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabs: Tab[] = [
    { id: 0, count: 1, title: 'Contact our specialist', text: 'Contact our specialist' },
    { id: 1, count: 0, title: 'Prepayment', text: 'Prepayment' },
    { id: 2, count: 0, title: 'Printing', text: 'Printing' },
  ];


  selectedTab: Tab = this.tabs[0];


  constructor() { }

  ngOnInit() {
  }
  onSelect(tab: Tab): void {
    this.selectedTab  = tab;
    tab.count += 1;

  }

  onSelectClose(tab:Tab): void {
    let i = this.tabs.findIndex(t=> t ==tab);
    if(this.selectedTab == tab) {
      
      if(i>0)
        this.selectedTab = this.tabs[i-1];
      else
        this.selectedTab = this.tabs[i+1];
    }
    this.tabs = this.tabs.filter(t => t != tab );




  }


}
