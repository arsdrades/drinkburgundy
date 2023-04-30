import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../servicio/getapi.service';
import { MiapiService } from '../miapi.service';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {
getdata: any[] = [];
public products = [];
  constructor( public _services: GetapiService, private api: MiapiService) { 

  }

  ngOnInit() { 
    this.api.getProduct().subscribe((data) => (this.products = data));
    
    
 
  }

}
