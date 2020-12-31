import React, { Component } from 'react';
import { ItemDict } from '../Interfaces';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/Header.css';

interface HeaderProps {
  items: ItemDict;
  adding      : boolean;
  editing     : boolean;
  toggleAdd   : any;
  toggleEdit  : any;
  saveHandler : any;
}

interface HeaderState {
}

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: any) {
    super(props);

    this.clickedAdd   = this.clickedAdd.bind(this);
    this.clickedEdit  = this.clickedEdit.bind(this);
    this.clickedSave  = this.clickedSave.bind(this);
  }

  clickedAdd() {
    this.props.toggleAdd();
  }

  clickedEdit() {
    this.props.toggleEdit();
  }

  clickedSave() {
    this.props.saveHandler();
  }

  renderEditBtn(editFunction: any) {
    if(this.props.items && Object.keys(this.props.items).length){
      const editText = this.props.editing ? 'Save Changes' : 'Edit Items';

      return (
        <button className="edit-btn" onClick={editFunction}>
          {editText}
        </button>
      );
    }

    return '';
  }

  render() {
    return (
      <>
        <header className="App-header">
          OVERPAID?
          <div className="App-header-links">
            <a href="https://github.com/itzbillyliu/overpaid" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            {this.renderEditBtn(this.clickedEdit)}
          </div>
        </header>
        <div className="floating-actions">
          <div className="floating-add" onClick={this.clickedAdd}>
            <div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className="floating-save" onClick={this.clickedSave}>
            <div>
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;