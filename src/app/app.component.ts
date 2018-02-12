import{Component}from'@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './common/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private navForm:FormGroup;
  private searchInput:string='';
  private modalBody:string;
    constructor (public authService: AuthService,
        public router: Router,
        private modalService:NgbModal){
        if (!this.authService.isLoggedIn()) {
          this.router.navigate(['/']);
          }
        }
    search(modalSearch){
        this.modalService.open(modalSearch);
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
      }

      signOut() {
        this.authService.signOut();
      }
}
