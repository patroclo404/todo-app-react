import React, { Component } from "react";
import { observer } from "mobx-react";

import AddItem from "./add-item.component";
import listaData from "../state/Lista.data";


class Lista extends Component {
  constructor(props) {
    super(props);

    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.itemToEdit = '';
  }

  render() {

    const lista = listaData.tareas.map((item,i) => {
      return <li 
              className="list-group-item"
              key={item.id}>
                <div className="container">
                  <div className="row">
                    <div onClick={ () => this.deleteItem(item) }  className="col-10">
                      {item.value}  
                    </div>
                    <div className="col-2">
                      <button 
                        onClick={() => this.editItem(item)}
                        className="btn btn-default">Edit</button>
                    </div>
                  </div>
                </div>
              </li>;
    });

    return (
  
      <div className="container">
        <div className="row">
          <AddItem item={this.itemToEdit} />
          <div className="col-12">
          <h1>
            Lista
          </h1>
          <div>
            <ul className="list-group">
              {lista}
            </ul>
          </div>
          </div>
        </div>
      </div>
    );
  }

  deleteItem(item) {
    listaData.removeItem(item);
  }

  editItem(e) {
    const item = {
      id : e.id,
      value: e.value
    }
    listaData.setEditCurrentItem(item);
  }

}

export default observer(Lista);