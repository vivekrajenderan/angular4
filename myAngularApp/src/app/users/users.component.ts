import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private crudService: CrudServiceService) { }
  public userData: any = {};
  public userList: any;
  public postData: any;
  fsubmit: string = 'DEFUALT';
  errormsg: string = '';
  successmsg: string='';
  ngOnInit() { 
  this.crudService.getlist('users').subscribe(result => {  	
  		console.log(localStorage.getItem('tokenKey'));
    
  	    let res=result.json();
        this.userList = res.user_list;
         
      });
  }

  addUser(userData) {        
    this.crudService.sendData('users/add',userData).subscribe(result => {
      let res=result.json();
      if(res.status==1)
      {
      this.errormsg="";   
      this.successmsg=res.msg;        
      setTimeout(()=>{ 
      this.reload();      
      $('#addModal').modal('hide');
      },4000); 
      
      }
      else
      {      
      this.errormsg=res.msg;
      this.successmsg="";
      setTimeout(()=>{ 
      this.errormsg = '';
 		},4000);

      }     
    });
  }

  editData(result, index) {
    this.userData=result;
    console.log(result, index);    
    this.errormsg=""; 
    this.successmsg="";
  }
  reset(){
    this.userData="";    
    this.userData = {'fsubmit':'yes'};   
    this.errormsg=""; 
    this.successmsg="";   
  }

  reload()
  {
  this.ngOnInit();
  }
  
}
