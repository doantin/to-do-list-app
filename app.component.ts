import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  addTask(item: String){
    this.list.push({id:this.list.length,name:item});
    console.warn(this.list)

  }
  removeTask(id:Number){
    console.warn(id)
    this.list = this.list.filter(item=>item.id!==id)
  }
  list:any[] = [];
  filter: 'all' | 'active' | 'done' = 'all';
  title = 'ListAngular';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }


}
