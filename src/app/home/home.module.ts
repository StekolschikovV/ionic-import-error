import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {TestModule} from '../test/test.module'
// import {TestComponentComponent} from '../test-component/test-component.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}