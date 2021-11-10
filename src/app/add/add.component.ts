import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { formatDate } from '@angular/common';
import { AbstractControl,FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms';
import { Router,ActivatedRoute  } from '@angular/router';

import { taskObj } from '../shared/task.model';


// import { EmployeeService } from '../shared/employee.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addTodoForm: FormGroup;
  submitted = false;  
  state:any;
  task:any;

  
  taskObj:taskObj ;

  constructor(private addTodoBuilder: FormBuilder,private router:Router,private actRoute:ActivatedRoute,) { 
   
    this.taskObj = new taskObj;


   
  }

  ngOnInit(): void {
  }
  
  getNewTaskId()
  {
    const oldRecords = localStorage.getItem('taskList');
    if(oldRecords !== null)
    {
      const taskList = JSON.parse(oldRecords);
      return taskList.length+1;
    }
    else{
      return 1;
    }
  }


    addTask(){
     
      this.submitted = true;
      const latestTaskId = this.getNewTaskId();
      const oldRecords = localStorage.getItem('taskList');
      this.taskObj.id = latestTaskId;

      
      if(oldRecords !== null)
      {
        const taskList = JSON.parse(oldRecords);
        taskList.push(this.taskObj);
        localStorage.setItem('taskList',JSON.stringify(taskList));
      }
      else{
        const taskArr = [];
        taskArr.push(this.taskObj);
        localStorage.setItem('taskList',JSON.stringify(taskArr));
      }

      this.taskObj.task = '';
      this.taskObj.state = '';
      
    }

    
    gotoTaskList()
    {
      this.router.navigateByUrl('/todos')
    }
  
   
}
