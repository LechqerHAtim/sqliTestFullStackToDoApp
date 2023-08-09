import { Component, OnInit } from '@angular/core';
import { HandlRequetsService } from 'src/app/services/handl-requets.service';
import { taskModel } from './taskModel';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { TasksComponent } from '../tasks/tasks.component';
import { EditTaskComponent } from 'src/app/edit-task/edit-task.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  taskList: any[] = [];
  title=''
  description=''
  // newTask!: taskModel;


  constructor(private taskService: HandlRequetsService,private dialog: MatDialog) { }


  openCreateTaskDialog(): void {
    console.log('yes')
    const dialogRef = this.dialog.open(TasksComponent, {
      width: '700px' 
    });

    dialogRef.afterClosed().subscribe(result => {
        this.fetchTasks();
      if (result) {
      }
    });
  }

    openEditTaskDialog(id: any): void {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '700px' ,     
       data: id // Pass the task data to the dialog

    });

    dialogRef.afterClosed().subscribe(result => {
        this.fetchTasks();
      if (result) {
      }
    });
  }

  
ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.taskService.getAllTasks().subscribe(data => {
      this.taskList = data;
    });
  }

  createTask(): void {
        const task: taskModel = {
        title: this.title,
      description:this.description,
    };

    
    this.taskService.createTask(task).subscribe(() => {
      this.fetchTasks();
    });
  }

  updateTask(taskId: number, updatedTaskObj: any): void {
    this.showRegistrationForm=true
    this.title=updatedTaskObj.title
    this.description=updatedTaskObj.description
const task: taskModel = {
        title: this.title,
      description:this.description,
    };
// console.log(task)

    this.taskService.updateTask(updatedTaskObj.id, task).subscribe(() => {
     console.log(this.fetchTasks());
    });
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.fetchTasks();
    });
  }




  
    colors: string[] = ['#FF5733', '#33FF57', '#5733FF', '#FF3399', '#33FFFF'];

    // Function to get color dynamically based on index
    getColor(index: number): string {
      return this.colors[index % this.colors.length];
    }

  
    showRegistrationForm: boolean = false;

    addTask() {

        this.showRegistrationForm = false;
    }

}
