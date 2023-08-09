import { Component, Inject, OnInit } from '@angular/core';
import { taskModel } from '../list/taskModel';
import { HandlRequetsService } from 'src/app/services/handl-requets.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
    title: string='';
  description: string=''

 constructor(private taskService: HandlRequetsService,  @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TasksComponent>,){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

    createTask(): void {


      this.closeDialog()
        const task: taskModel = {
        title: this.title,
      description:this.description,
    };

    
    
    this.taskService.createTask(task).subscribe(() => {

    });
  }


}
