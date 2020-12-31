import React, { Component } from 'react';
import { ItemDict } from './Interfaces';
import { demoCards } from './Variables';
import Header from './components/Header';
import AddCard from './components/AddCard';
import EditCard from './components/EditCard';
import Purchases from './components/Purchases';
import './css/App.css';

interface AppProps {
  props?: any;
}

interface AppState {
  items: ItemDict;
  isAdding      : boolean;
  isEditingGrid : boolean;
  isEditingItem : boolean;
}

class App extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      items         : this.getCards(),
      isAdding      : false,
      isEditingGrid : false,
      isEditingItem : false
    };

    this.addCard          = this.addCard.bind(this);
    this.deleteCard       = this.deleteCard.bind(this);
    this.saveCards        = this.saveCards.bind(this);
    this.toggleAddCard    = this.toggleAddCard.bind(this);
    this.toggleEditCards  = this.toggleEditCards.bind(this);
  }

  addCard(cardDict: any) {
    let newItems    = this.state.items;
    cardDict.key    = cardDict.brand.toLowerCase().replace(' ', '') + '-' +
                      cardDict.product.toLowerCase().replace(' ', '') + '-' +
                      cardDict.color.toLowerCase().replace(' ', '') + '-' +
                      Date.now();
    cardDict.img    = '';
    cardDict.status = false;
    cardDict.uses   = 0;

    let count = 1;
    if(cardDict.key in newItems) {
      while(cardDict.key in newItems) {
        count++;
      }
      cardDict.key += count.toString();
    }
    newItems[cardDict.key] = cardDict;

    this.setState({
      items: newItems
    });
  }

  deleteCard(itemKey: any) {
    let newItems  = this.state.items;
    delete newItems.itemKey;

    this.setState({
      items: newItems
    });

    if(Object.keys(newItems).length === 0) {
      this.setState({
        isEditingGrid: false
      });
    }
  }

  getCards() {
    return demoCards;
  }

  saveCards() {
    let fa        = document.querySelectorAll('.floating-actions');
    let faCls     = 'selected';
    let newItems  = this.state.items;
    fa[0].classList.remove(faCls);

    for(const key in newItems) {
      const item = newItems[key];

      if(item.status === true) {
        let numUses = (item.uses || 0) + 1;
        item.status = false;
        item.uses   = numUses;
      }
    }

    this.setState({
      items: newItems
    });
  }

  toggleAddCard() {
    this.setState({
      isAdding  : !this.state.isAdding
    });
  }

  toggleEditCards() {
    this.setState({
      isEditingGrid : !this.state.isEditingGrid
    });
  }

  toggleEditItem() {
    this.setState({
      isEditingItem : !this.state.isEditingItem
    });
  }

  render() {
    let AppCls = "App";
    if(this.state.isAdding){
      AppCls += " currently-adding";
    }
    else if(this.state.isEditingItem){
      AppCls += " currently-editing-item";
    }
    else if(this.state.isEditingGrid){
      AppCls += " currently-editing-grid";
    }

    return (
      <div className={AppCls}>
        <Header items={this.state.items}
                adding={this.state.isAdding}
                editing={this.state.isEditingGrid}
                toggleAdd={this.toggleAddCard}
                toggleEdit={this.toggleEditCards}
                saveHandler={this.saveCards} />
        <div className="App-content">
          <AddCard toggleAdd={this.toggleAddCard}
                   addHandler={this.addCard} />
          <EditCard />
          <Purchases purchases={this.state.items}
                     adding={this.state.isAdding}
                     editing={this.state.isEditingGrid}
                     deleteHandler={this.deleteCard} />
        </div>
      </div>
    );
  }
}

export default App;