import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnChanges {
  @Input() treeData: any;
  constructor() { }

  ngOnInit() {
    // console.log(this.treeData)
  }
  ngOnChanges() {
    // console.log(this.treeData)
  }

}
