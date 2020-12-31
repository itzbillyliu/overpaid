import React, { Component } from 'react';
import { ItemDict } from '../Interfaces';
import PurchasedItems from './PurchasedItems';

interface PurchasesProps {
  purchases: ItemDict;
  // purchases: Array<{
  //   key       : string;
  //   brand?    : string;
  //   color?    : string;
  //   product?  : string;
  //   img?      : string;
  //   price?    : number;
  //   uses?     : number;
  //   goal?     : number;
  //   status?   : boolean;
  // }>;
  adding        : boolean;
  editing       : boolean;
  deleteHandler : any;
}

interface PurchasesState {
}

class Purchases extends Component<PurchasesProps, PurchasesState> {
  constructor(props: any) {
    super(props);

    this.deleteCard   = this.deleteCard.bind(this);
    this.selectCards  = this.selectCards.bind(this);
  }

  deleteCard(itemKey: any) {
    this.props.deleteHandler(itemKey);
  }

  selectCards(itemKey: any) {
    if(this.props.editing) return;

    let fa            = document.querySelectorAll('.floating-actions');
    let faCls         = 'selected';
    let newItems      = this.props.purchases;
    let selectedItems = 0;

    for(const key in newItems) {
      const item = newItems[key];

      if(item.key === itemKey)
        item.status = !item.status;
      if(item.status)
        selectedItems++;
    }

    this.setState({
      items: newItems
    });

    selectedItems > 0 ? fa[0].classList.add(faCls) : fa[0].classList.remove(faCls);
  }

  render() {
    return (
      <PurchasedItems purchases={this.props.purchases}
                      editing={this.props.editing}
                      deleteHandler={this.deleteCard}
                      selectHandler={this.selectCards} />
    );
  }
}

export default Purchases;