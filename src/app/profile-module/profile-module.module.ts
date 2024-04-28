import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    MenuComponent,
    AboutComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MenuComponent,TableComponent,AboutComponent]
})
export class ProfileModuleModule { }
