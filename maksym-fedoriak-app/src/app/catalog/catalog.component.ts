import { Component, OnInit } from '@angular/core';
import { Item, itemsConst } from '../shared/item';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items = itemsConst;

  selectedItem: Item = null as any;

  constructor() {     
  }

  ngOnInit(): void {
  }

  onSelect(item : Item){
    this.selectedItem = item;
  }
}