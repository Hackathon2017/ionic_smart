import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SpecialistServiceProvider } from '../providers/specialist-service/specialist-service';
import { HttpModule } from '@angular/http';
import { DomainServiceProvider } from '../providers/domain-service/domain-service';
import { SpecialityServiceProvider } from '../providers/speciality-service/speciality-service';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { MessageServiceProvider } from '../providers/message-service/message-service';
import { RateServiceProvider } from '../providers/rate-service/rate-service';
import { SpecialistDetailServiceProvider } from '../providers/specialist-detail-service/specialist-detail-service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    HttpModule ,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpecialistServiceProvider,
    DomainServiceProvider,
    SpecialityServiceProvider,
    UserServiceProvider,
    MessageServiceProvider,
    RateServiceProvider,
    SpecialistDetailServiceProvider
  ]
})
export class AppModule {}
