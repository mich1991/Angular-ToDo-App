import { Component } from '@angular/core';
import {Task} from './task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode = false;
  taskName = ''
  taskDate = ''
  config: { [key: string] : string | Date } = {}
  tasks: Task[] = [
    {
      name: "Workout",
      deadline: '2021-03-02',
      done: false
    },
    {
      name: "Cleaning",
      deadline: '2021-03-07',
      done: false
    },
    {
      name: "Angular",
      deadline: '2021-03-04',
      done: false
    }
  ]

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Todo list',
        footer: 'Todo list made in Angular',
        date: new Date()
      }
    }, 1000)
  }

  clearTasks(){
    this.tasks =[]
  }

  createTask(){
    const task: Task = {
      name : this.taskName,
      deadline : this.taskDate,
      done: false
    }
    this.tasks.push(task)
    this.taskName=''
    this.taskDate=''
  }
  switchMode(){
    this.editMode = !this.editMode
  }
}
