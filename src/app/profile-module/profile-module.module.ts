import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponentComponent } from '../user-profile-component/user-profile-component.component';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  declarations: [
    UserProfileComponentComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [UserProfileComponentComponent]
})
export class ProfileModuleModule { }
