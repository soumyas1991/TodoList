import { Component, OnInit ,Pipe, PipeTransform} from '@angular/core';
import { Router} from '@angular/router';
import { taskObj } from '../shared/task.model';



//import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  

  taskList:taskObj [];
  //employees:any = [];
  query:any;
  constructor(private router:Router) {
  
    this.taskList = [];
   
   }

  ngOnInit(): void {
    const records = localStorage.getItem("taskList");
    if(records !== null)
    {
      this.taskList = JSON.parse(records);
    }
  }



  deletetask(id:any)
  {
    if (confirm('Are you sure to delete this record ?') == true) {
      const oldRecords = localStorage.getItem('taskList');
    
      if(oldRecords !== null)
      {
        const taskList = JSON.parse(oldRecords);
        taskList.splice(taskList.findIndex((a:any) =>a.id == id),1);
        localStorage.setItem('taskList',JSON.stringify(taskList));

        const records = localStorage.getItem("taskList");
        if(records !== null)
        {
          this.taskList = JSON.parse(records);
        }
      }
    }
  }
  clearSearch() { 
    this.query = '';
  }

  toggleState(id:any,state:any)
  {
    const oldRecords = localStorage.getItem('taskList');
    
    if(oldRecords !== null)
    {
      let taskList = JSON.parse(oldRecords);
      taskList = taskList.map((list:any)=>{
        if(list.id == id)
        {
          if(state == 'Pending')
          {
            list.state = 'Finished';
          }
          else{
            list.state = 'Pending';
          }
          
        }
        return list;
      })
      localStorage.setItem("taskList", JSON.stringify(taskList));
      this.taskList = taskList;
     
     
    }
   
  }
  


}

