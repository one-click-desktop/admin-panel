import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TopbarComponent } from '@components/topbar/topbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiModule } from '@one-click-desktop/api-module';
import { ConfigurationService } from '@services/configuration/configuration.service';
import { HomeComponent } from '@views/home/home.component';
import { LoginComponent } from '@views/login/login.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, TopbarComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ApiModule.forRoot(ConfigurationService.getConfiguration),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
