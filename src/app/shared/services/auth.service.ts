import {Injectable} from '@angular/core';
import {Token, User} from '../interfaces';

@Injectable({providedIn: 'root'})
export class AuthService {

  private token: Token | null
  error = ''

  register(user: User): void {
    localStorage.setItem(JSON.stringify(user.email), JSON.stringify(user))
    this.setToken()
  }
  login(user: User): boolean {
    const key = user.email
    const validUser = localStorage.getItem(JSON.stringify(key))
    if (validUser) {
      this.getToken()
      return true
    }
    else {
      this.error = 'Не верный email или пароль'
      return false
    }
  }
  setToken(): any {
    const randomStr = `f${(~~(Math.random() * 1e8)).toString(16)}`
    const expiresDate = new Date(new Date().getTime() + 3600 * 1000).toString()
    this.token = {token: randomStr, expiresIn: expiresDate}
    localStorage.setItem('token', JSON.stringify(this.token))
    return this.token
  }
  getToken(): string {
    const token = localStorage.getItem('token')
    const parsedToken = JSON.parse(token)
    const expiresDate = parsedToken.expiresIn
    const expiredPeriod = new Date() > expiresDate
    console.log((new Date(expiresDate).getTime() - new Date().getTime()) / 1000 / 60)

    if (expiredPeriod) {
      this.logout()
      return null
    }
    return this.token = parsedToken
  }
  isAuthenticated(): boolean {
    this.getToken()
    return !!this.token
  }
  logout(): void {
    localStorage.clear()
  }
}
