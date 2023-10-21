import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplashComponent } from './component/splash/splash/splash.component';
import { HomeComponent } from './component/home/home.component';
import { LogInComponent } from './component/log-in/log-in/log-in.component';
import { SignUpComponent } from './component/sign-up/sign-up/sign-up.component';
import {AngularFireModule} from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';
import { VerifyComponent } from './component/verify/verify/verify.component';
import { TopUpComponent } from './component/top-up/top-up/top-up.component';
import { ResetPasswordComponent } from './component/forgotPassword/reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HomeComponent,
    LogInComponent,
    SignUpComponent,
    DashboardComponent,
    VerifyComponent,
    TopUpComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
