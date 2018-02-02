import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private crudService: CrudServiceService) { }

  ngOnInit() {
  }

}
