import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PathConstants } from '@constants/path-constants';
import { LoggedInGuard } from '@guards/logged-in.guard';
import { HomeComponent } from '@views/home/home.component';
import { LoginComponent } from '@views/login/login.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: PathConstants.HOME,
    canActivate: [LoggedInGuard],
  },
  {
    component: LoginComponent,
    path: PathConstants.LOGIN,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `/${PathConstants.HOME}`,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
