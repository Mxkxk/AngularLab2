import { Component, OnInit, Input } from '@angular/core';
import { Comment, comments } from '../shared/comment';
import { Item, itemsConst } from '../shared/item';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {

  @Input()
  item: Item = null as any;  

  constructor() {
  }

  ngOnInit(): void {
  }

}
