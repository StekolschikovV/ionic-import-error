import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {TestComponentComponent} from '../test-component/test-component.component'

@NgModule({
  imports: [
    TestComponentComponent,
    CommonModule,
    FormsModule,
    IonicModule,
    // declatations: [TestComponentComponent],
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  // declarations: [HomePage, TestComponentComponent]
  declarations: [HomePage]
})
export class HomePageModule {}
