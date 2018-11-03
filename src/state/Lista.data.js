import { extendObservable } from "mobx";

class ListaData {
  constructor(){
    extendObservable(
      this,
      {
        tareas: [
          {
            id: 1,
            value : "Ir por los lentes"
          },
          {
            id: 2,
            value : "Pagar los lentes"
          }
        ],
        currentItem : { value : '' }
      }
    );
  }

  setItem(value) {
    if (this.getCurrentItem().id) {
      this.updateItem(value);
    } else {
      this.addItem(value);
    }

  }

  addItem(value) {
    const item = {
      id: this.getLastId(),
      value : value
    }
    this.tareas = [...this.tareas,item];
  }

  removeItem(item) {
    this.tareas = this.tareas.filter((todo) => todo.id !== item.id );
    this.sortList();
  }

  setCurrentItem(value) {
    if (value === '')
      this.currentItem.id = undefined;
    this.currentItem.value = value; 
  }

  setEditCurrentItem(item) {
    this.currentItem = item;
  }

  updateItem(value) {
    this.tareas.map((i) => {
      if (this.getCurrentItem().id === i.id)
        i.value = value;
      return i;
    });
    // itemFinded = value;
    this.currentItem = {
      value : '',
      id : undefined
    }
  }

  getCurrentItem() {
    return this.currentItem;
  }

  sortList() {
    this.tareas = this.tareas.sort((a,b) => a>b);
  }

  getLastId(){
    if ( this.tareas.length !== 0 ){
      let id = this.tareas[this.tareas.length - 1].id + 1;
      return id;
    }
    return 0
  }

}

const listaData = new ListaData();
export default listaData;
