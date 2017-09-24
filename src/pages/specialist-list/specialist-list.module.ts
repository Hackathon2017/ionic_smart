import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialistListPage } from './specialist-list';

@NgModule({
  declarations: [
    SpecialistListPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecialistListPage),
  ],
})
export class SpecialistListPageModule {}
