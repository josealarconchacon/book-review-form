import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

Injectable({
  providedIn: 'root',
});

export const bookDetailGuard: CanActivateFn = (route, state) => {
  const id = Number(route.paramMap.get('id'));
  if (isNaN(id) || id < 1) {
    alert('Invalid Book!');
  }
  return true;
};
