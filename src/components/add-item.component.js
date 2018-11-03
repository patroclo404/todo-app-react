import React, { Component } from "react";
import listaData from "../state/Lista.data";
import { observer } from "mobx-react";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.onAddItem = this.onAddItem.bind(this);
    this.setItem = this.setItem.bind(this);
  }

  render() {
    
    return (
      <div className="col-6 col-xs-12">
        <div className="input-group">
          <input tipe="text"
            className="form-control"
            id="item"
            value={listaData.getCurrentItem().value}
            onChange={this.setItem} />
          <div className="input-group-append">
            <button className="btn" onClick={ this.onAddItem } >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }

  setItem(e) {
    e.preventDefault();
    listaData.setCurrentItem(e.target.value);
  }

  onAddItem() {
    var item = listaData.getCurrentItem();
    if (item.value !== '') {
      listaData.setItem(item.value);
      listaData.setCurrentItem('');
      // console.log(listaData.tareas);
    }
  }

}

export default observer(AddItem);