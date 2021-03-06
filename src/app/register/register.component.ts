import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from '../message/message.service';
import { UserService } from '../users/user/user.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  moduleId: module.id.toString(), 
  selector : 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    user : any = {};
    loading = false;
    email = new FormControl('', [Validators.required, Validators.email]);

    constructor(private router : Router, 
                private userService : UserService, 
                private messageService : MessageService) {
            this.user.isSuperUser = false;
    }

register() {
    this.loading = true;
    this.userService.create(this.user).subscribe(data => {
        this.messageService .success('Registro efetuado com Sucesso', true);
        this.router.navigate(['/login']);
    }, error => {
        this.messageService.error(error);
        this.loading = false;
    });
}
}
