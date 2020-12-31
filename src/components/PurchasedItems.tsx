import React, { Component } from 'react';
import { ItemDict } from '../Interfaces';
import { faCheck, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/PurchasedItems.css';

interface PurchasedItemsProps {
  purchases     : ItemDict;
  editing       : boolean;
  deleteHandler : any;
  selectHandler : any;
};

interface PurchasedItemsState {
};

class PurchasedItems extends Component<PurchasedItemsProps, PurchasedItemsState> {
  constructor(props: any) {
    super(props);
    this.clickDelete  = this.clickDelete.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  clickDelete(itemKey: any) {
    this.props.deleteHandler(itemKey);
  }

  toggleSelect(itemKey: any) {
    this.props.selectHandler(itemKey);
  }

  render() {
    const purchaseCollection  = this.props.purchases;
    const isEditing           = this.props.editing;

    if(Object.keys(purchaseCollection).length === 0) {
      return (
        <div className="no-items">
          <div className="blob">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#F37021" d="M37.8,-50.2C52.2,-57.2,69.1,-53.4,76.5,-43.3C83.9,-33.1,81.9,-16.6,73.2,-5C64.6,6.6,49.5,13.2,40.3,20.4C31.2,27.6,28,35.3,22.3,35.3C16.6,35.2,8.3,27.3,0.2,27C-8,26.8,-16,34.1,-25.2,36.2C-34.5,38.3,-45,35.2,-55.5,28.3C-66.1,21.3,-76.7,10.7,-74.7,1.1C-72.8,-8.4,-58.3,-16.9,-47.7,-23.6C-37,-30.4,-30.2,-35.4,-22.9,-32.4C-15.6,-29.5,-7.8,-18.5,2,-21.9C11.7,-25.4,23.5,-43.2,37.8,-50.2Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="overlayed">
            <h3>No items</h3>
            Please click on the (+) button on the bottom right to start adding items!
          </div>
        </div>
      );
    }

    let itemsArr = [];
    for(const key in purchaseCollection) {
      const item = purchaseCollection[key];
      itemsArr.push(item);
    }
    console.log(itemsArr);

    // sort by price
    itemsArr.sort((a: any, b: any) => {
      if( a.price && b.price ){
        return (a.price < b.price) ? 1 : -1;
      }
      return 0;
    });

    let activeItems = itemsArr.filter((item: any) => {
      return item.goal > item.uses;
    });

    let inactiveItems = itemsArr.filter((item: any) => {
      return item.goal <= item.uses;
    });

    const renderItems = (items: any) => {
      return items.map((item: any) => {
        let cardCls = "Purchase-card " + item.color;
        if(!isEditing && item.status){
          cardCls += ' selected';
        }

        // determine whether goal is reached
        let uses        = item.uses > 0 ? (item.uses + 1) : 1;
        let useGoalTxt  = 'Unused';
        if(item.uses >= item.goal) {
          useGoalTxt = 'Goal Met';
        }
        else if(item.uses > 0) {
          useGoalTxt = item.uses + ' / ' + item.goal;
        }

        // calculate cost per use
        let costPerUse        = ( item.price / uses ).toFixed(2).toString();
        let decimalPointIndex = costPerUse.indexOf('.00');
        if(decimalPointIndex > 0) {
          costPerUse = costPerUse.substr(0, decimalPointIndex);
        }

        // inline style for card image
        let cardStyle = {
          backgroundImage : 'url(' + item.img + ')',
          backgroundSize  : 'cover',
        };

        return (
          <div
            className={cardCls}
            key={item.key}
            style={cardStyle}
            onClick={(e) => {this.toggleSelect(item.key)}}
          >
            <div className="selected-overlay">
              <div>
                <FontAwesomeIcon icon={faCheck} />
              </div>
            </div>
            <div className="edit-overlay">
              <div>
                <div><FontAwesomeIcon icon={faEdit} /></div>
                <div onClick={(e) => {this.clickDelete(item.key)}} >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </div>
              </div>
            </div>
            <div className="Card-text-container count-container">
              <div className="Card-text count">
                {useGoalTxt}
              </div>
            </div>
            <div className="Card-text-container">
              <div className="Card-text brand">
                {item.brand}
              </div>
              <div className="Card-text product">
                {item.product}
              </div>
              <div className="Card-text price">
                ${item.price} <small>(${costPerUse} per use)</small>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="Purchases-container">
          {renderItems(activeItems)}
          {renderItems(inactiveItems)}
      </div>
    );
  }
}

export default PurchasedItems;