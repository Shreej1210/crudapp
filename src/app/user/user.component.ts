import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Appstate } from '../states/app.state'
import{Observable} from 'rxjs';
import { AddUser, DeleteUser, GetUsers, UpdateUser } from '../actions/app.action';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm:FormGroup|any;
  userInfo:[]|any;
  @Select(Appstate.selectStateData)userInfo$:Observable<any>|undefined
  constructor(private store:Store,private fb:FormBuilder)
  {}
  ngOnInit(): void {
    this.userForm=this.fb.group({
      id:[''],
      name:[''],
      username:[''],
      email:[''],
      phone:[''],
      website:['']
    })
    this.store.dispatch(new GetUsers());
    this.userInfo$?.subscribe((returnData)=>
      {
        this.userInfo=returnData;
      })

    }
    addUser()
    {
      this.store.dispatch(new AddUser(this.userForm.value));
      this.userForm.reset();
    }
    updateUser(id:number,i:number)
    {
      const newData={
        id:id,
        name:'Arun kumar',
        username:'arun',
        email:'abcd@gmail.com',
        phone:'00000000',
        website:'arun.cloud.in'
      }
     
        this.store.dispatch(new UpdateUser(newData,id,i));
       
    }
    deleteUser(i:number)
    {
      this.store.dispatch(new DeleteUser(i));
      
    }
    }
    
  


