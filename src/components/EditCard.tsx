import React, { Component } from 'react';
import '../css/Forms.css';

interface EditCardProps {
  props?: any;
}

interface EditCardState {
  items: Array<{
    key       : string;
    brand?    : string;
    color?    : string;
    product?  : string;
    img?      : string;
    price?    : number;
    uses?     : number;
    goal?     : number;
    status?   : boolean;
  }>;
}

class EditCard extends Component<EditCardProps, EditCardState> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="App-edit-card">
      </div>
    );
  }
}

export default EditCard;