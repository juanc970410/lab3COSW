import { Injectable } from'@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { Http } from '@angular/http';
import { AuthService } from '../common/auth.service';
import { User } from '../models/user';

@Injectable()
export class UserService extends APIService{
    private users: User[] =[
    new User ("Bill","Gates","https://pbs.twimg.com/profile_images/929933611754708992/ioSgz49P_400x400.jpg"),
    new User ("Mark","Zuckerberg","https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/416x416.jpg?background=000000&cropX1=419&cropX2=1409&cropY1=53&cropY2=1044")];

    constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http){
        super(config, authService, http);
        }

    list(): User[] {
    return this.users;
  }
    create(name: string, lastname: string, image: string) {
    this.users.push(new User(name, lastname, image));
  }

    login(username: string, password: string) {
    return this.post('user/login', { username, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }

}