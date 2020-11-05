import {Injectable} from '@angular/core';
import {Token, User} from '../interfaces';

@Injectable({providedIn: 'root'})
export class AuthService {

  private token: Token | null
  validUser: boolean
  error = ''
  userName = ''

  register(user: User): void {
    user.previousBattles = []
    localStorage.setItem(JSON.stringify(['user']), JSON.stringify(user))
    this.setToken()
  }

  login(user: User): boolean {
    const key = user.email
    const potentialValidUser = localStorage.getItem(JSON.stringify(key))
    this.userName = user.name

    if (potentialValidUser) {
      this.validUser = JSON.parse(potentialValidUser).password === user.password
    }
    if (!this.validUser || !potentialValidUser) {
      this.error = 'Не верный email или пароль'
      return false
    } else if (this.validUser) {
      this.getToken()
      return true
    }
  }
  setToken(): Token {
    // tslint:disable-next-line:no-bitwise
    const randomStr = `f${(~~(Math.random() * 1e8)).toString(16)}`
    const expiresDate = new Date(new Date().getTime() + 3600).toString()

    this.token = {token: randomStr, expiresIn: expiresDate}
    localStorage.setItem('token', JSON.stringify(this.token))
    return this.token
  }
  getToken(): string {
    const token = localStorage.getItem('token')
    const parsedToken = JSON.parse(token)
    const expiresDate = parsedToken.expiresIn
    const expiredPeriod = new Date() > expiresDate

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
