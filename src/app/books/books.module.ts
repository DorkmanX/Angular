import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { TableComponent } from './table/table.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent,
    AboutComponent,
    TableComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MenuComponent,TableComponent,AboutComponent,EditComponent]
})
export class ProfileModuleModule { }
