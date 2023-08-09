import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HandlRequetsService } from '../services/handl-requets.service';
import { TasksComponent } from '../componenets/tasks/tasks.component';
import { taskModel } from '../componenets/list/taskModel';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
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

    edittask(): void {
console.log(this.data)

      this.closeDialog()
        const task: taskModel = {
        title: this.title,
      description:this.description,
    };

    
    
    this.taskService.updateTask(this.data,task).subscribe(() => {

    });
  }


}
