import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'detail/:id',
    loadChildren: () => import('./Screens/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./Screens/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Screens/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./Screens/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./Screens/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'commande',
    loadChildren: () => import('./Screens/commande/commande.module').then( m => m.CommandePageModule)
  },  {
<<<<<<< HEAD
    path: 'contact',
    loadChildren: () => import('./Screens/contact/contact.module').then( m => m.ContactPageModule)
=======
    path: 'profile',
    loadChildren: () => import('./Screens/profile/profile.module').then( m => m.ProfilePageModule)
>>>>>>> cbbeb9085e89ac0eb866ea23164c88e29fb4a29f
  },

  
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
