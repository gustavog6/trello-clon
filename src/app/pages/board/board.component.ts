import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { Dialog } from '@angular/cdk/dialog';

import { FormControl } from '@angular/forms';

import { Column, ToDo } from '../../models/todo.model';
import {
  faXmark,
  faPlus,
  faEllipsis,
  faArrowUpRightFromSquare,
  faSquarePlus,
} from '@fortawesome/free-solid-svg-icons';

import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  faXmark = faXmark;

  faPlus = faPlus;

  faEllipsis = faEllipsis;

  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  faSquarePlus = faSquarePlus;

  title = new FormControl('');

  newCardTitle = new FormControl('');

  isOpen = false;

  triggerOrigin: any;

  constructor(private dialog: Dialog) {}

  toggle(trigger: any) {
    this.triggerOrigin = trigger;
    this.isOpen = !this.isOpen;
  }

  columns: Column[] = [
    {
      title: 'To Do',
      todos: [
        {
          id: '1',
          title: 'maquetar login',
        },
        {
          id: '2',
          title: 'maquetar boards',
        },
        {
          id: '3',
          title: 'maquetar board',
        },
      ],
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '4',
          title: 'no abandonar el curso',
        },
      ],
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'empezar el curso',
        },
      ],
    },
  ];

  todos: ToDo[] = [];

  doing: ToDo[] = [];

  done: ToDo[] = [];

  drop($event: CdkDragDrop<ToDo[]>) {
    if ($event.previousContainer === $event.container) {
      moveItemInArray(
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    } else {
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    }
  }

  dropList(event: any) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  addColumn() {
    this.columns.push({
      title: this.title.value,
      todos: [],
    });
    this.title.reset('');
  }

  addCard(column: Column) {
    column.todos.push({
      id: '9',
      title: this.newCardTitle.value,
    });
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      data: {
        todo: todo,
      },
    });
    dialogRef.closed.subscribe((output) => console.log(output));
  }
}
