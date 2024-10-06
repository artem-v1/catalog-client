import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

/**
 * This guard return true if the user is logged in
 * This guard can be further modified to :
 * * * check user roles using keycloakService.isUserInRole() function
 */
export const AuthGuard: CanActivateFn = async (route, state) => {
    const keycloakService = inject(KeycloakService);
    const router = inject(Router);

    //return keycloakService.isLoggedIn();

     // Проверяем авторизован ли пользователь
  const isLoggedIn = await keycloakService.isLoggedIn();

  if (isLoggedIn) {
    // Если пользователь авторизован, разрешаем доступ к странице
    return true;
  } else {
    // Если пользователь не авторизован, перенаправляем на страницу логина
    try {
      // Передаем в Keycloak URL, на который нужно вернуться после авторизации
      await keycloakService.login({
        redirectUri: window.location.origin + state.url,
      });
      return false; // Пока перенаправление происходит, возвращаем false, блокируя переход на страницу
    } catch (error) {
      console.error('Login redirect failed', error);
      return false; // В случае ошибки блокируем переход
    }
  }

};