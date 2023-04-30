import { Component, OnInit } from '@angular/core';
import { AlertController, IonProgressBar, NavController} from '@ionic/angular';
import { UtilService } from '../util.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController){
    this.formularioLogin = this.fb.group({
      'email': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),


    })
  }


  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.email == f.correo && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado', 'true');
      this.navCtrl.navigateRoot('tabs');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Tan incorrectos los datos hno',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
}
