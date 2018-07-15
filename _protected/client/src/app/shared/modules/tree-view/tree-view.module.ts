import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewComponent } from './tree-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [TreeViewComponent],
   exports: [TreeViewComponent]
})
export class TreeViewModule { }
