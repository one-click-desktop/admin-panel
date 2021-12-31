import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ChartModule } from 'primeng/chart';

import { TopbarComponent } from '@components/topbar/topbar.component';
import { CorsInterceptor } from '@interceptors/cors/cors.interceptor';
import { HttpErrorInterceptor } from '@interceptors/http-error/http-error.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiModule } from '@one-click-desktop/api-module';
import { ConfigurationService } from '@services/configuration/configuration.service';
import { HomeComponent } from '@views/home/home.component';
import { LoginComponent } from '@views/login/login.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GlobalResourcesComponent } from './components/global-resources/global-resources.component';
import { ResourcePieChartComponent } from './components/resource-pie-chart/resource-pie-chart.component';
import { ServerResourcesComponent } from './components/server-resources/server-resources.component';
import { ServersListComponent } from './components/servers-list/servers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopbarComponent,
    HomeComponent,
    ServersListComponent,
    GlobalResourcesComponent,
    ServerResourcesComponent,
    ResourcePieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ChartModule,
    ApiModule.forRoot(ConfigurationService.getConfiguration),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
