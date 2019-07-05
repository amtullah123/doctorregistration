import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { ClinicAddressComponent } from './clinic-address/clinic-address.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DoctorRegistrationComponent,
    NavbarComponent,
    FooterComponent,
    SpecializationComponent,
    ClinicAddressComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
