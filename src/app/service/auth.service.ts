import { computed, Injectable, signal } from '@angular/core';
export type UserRole = 'admin' | 'user' | null;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUserRole = signal<UserRole>(null);

  public currentUserRole = this._currentUserRole.asReadonly();

  public isAdmin = computed(() => this._currentUserRole() === 'admin');
  public isUser = computed(() => this._currentUserRole() === 'user');

  /**
   * Sets the current user's role. This is the only way the role should be changed.
   * @param role The role to set ('admin' or 'user').
   */
  public setRole(role: 'admin' | 'user'): void {
    this._currentUserRole.set(role);
  }


  public logout(): void {
    this._currentUserRole.set(null);
  }
}
