import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Component } from '@angular/core';
import { LoginData } from '../../models/login.data';
import { PassDataService } from '../../shared/services/pass_data.service';
@Component({
    selector: 'app- form',
    templateUrl: 'form.comonent.html'
})
export class FormComponent {
    form: FormGroup;
    loginData: LoginData;
    name = new FormControl("", Validators.required);
    password = new FormControl("", Validators.required);

    constructor(
        fb: FormBuilder,
       private passDataService: PassDataService
    ) {
        this.form = fb.group({
            "name": this.name,
            "password": this.password
        });
    }
    onSubmit() {
        let name = this.form.get("name").value;
        let password = this.form.get("password").value;
        this.loginData = new LoginData(name, password);
        this.passDataService.changeData(this.loginData.name,this.loginData.password);
    }
}