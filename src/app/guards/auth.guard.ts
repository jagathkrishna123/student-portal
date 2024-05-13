import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router)
  if (authService.isLogged()) {
    return true
  }
  else{
   router.navigateByUrl("")
    return false
  }
 
};
