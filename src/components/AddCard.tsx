import React, { Component, createRef } from 'react';
import { allowedBrands, allowedColors } from '../Variables';
import '../css/Forms.css';

interface AddCardProps {
  props?      : any;
  addHandler  : any;
  toggleAdd   : any;
}

interface AddCardState {
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

class AddCard extends Component<AddCardProps, AddCardState> {
  private brandRef  = createRef<HTMLInputElement>();
  private nameRef   = createRef<HTMLInputElement>();
  private colorRef  = createRef<HTMLInputElement>();
  private priceRef  = createRef<HTMLInputElement>();
  private goalRef   = createRef<HTMLInputElement>();

  constructor(props: any) {
    super(props);

    this.addCardSubmitted   = this.addCardSubmitted.bind(this);
    this.clickedCancel      = this.clickedCancel.bind(this);
    this.clickedGoalPreset  = this.clickedGoalPreset.bind(this);
  }

  addCardSubmitted(e: any) {
    e.preventDefault();
    this.hideFormError();

    const cBrand = this.brandRef.current;
    const cColor = this.colorRef.current;
    const cName  = this.nameRef.current;
    const cPrice = this.priceRef.current;
    const cGoal  = this.goalRef.current;

    if(cBrand && cColor && cName && cPrice && cGoal) {
      if(cBrand.value && cColor.value && cName.value && cPrice.value && cGoal.value) {
        this.props.addHandler({
          brand   : cBrand.value,
          color   : cColor.value,
          product : cName.value,
          price   : cPrice.value,
          goal    : cGoal.value,
        });
        this.resetAddForm();
      }
      else {
        this.showFormError();
      }
    }
  }

  clickedCancel(e: any) {
    e.preventDefault();
    this.props.toggleAdd();
  }

  clickedGoalPreset(qty: number) {
    this.hidePresetError();
    const cPrice = this.priceRef.current;
    const cGoal  = this.goalRef.current;

    if(cGoal && cPrice && cPrice.value){
      const cCost       = parseFloat(cPrice.value);
      const costPerUse  = (cCost / qty).toFixed(2);
      cGoal.value       = costPerUse;
    }
    else {
      this.showPresetError();
    }
  }

  hideFormError() {
    document.querySelector('.App-add-card')?.classList.remove('error');
  }

  hidePresetError() {
    document.querySelector('.goal-presets')?.classList.remove('error');
  }

  showFormError() {
    document.querySelector('.App-add-card')?.classList.add('error');
  }

  showPresetError() {
    document.querySelector('.goal-presets')?.classList.add('error');
  }

  resetAddForm() {
    const cBrand = this.brandRef.current;
    const cColor = this.colorRef.current;
    const cName  = this.nameRef.current;
    const cPrice = this.priceRef.current;
    const cGoal  = this.goalRef.current;

    // reset form after successful add
    if(cBrand && cColor && cName && cPrice && cGoal) {
      cBrand.value  = '';
      cColor.value  = '';
      cName.value   = '';
      cPrice.value  = '';
      cGoal.value   = '';
    }
  }

  renderFormButtons() {
    return (
      <div className="form-row">
        <button type="submit" className="save">Save</button>
        <button className="cancel" onClick={this.clickedCancel}>Cancel</button>
      </div>
    );
  }

  renderGoalButtons() {
    return (
      <>
        <hr />
        <table className="goal-presets">
          <thead>
            <tr>
              <th colSpan={4}>
                <p>
                  Set your goal by number of uses
                  <small>
                    After you have set a Price above, please select a preset number of uses below and we will automatically calculate the cost per use below for you
                  </small>
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4}>
                <div className="error-message">
                  Please enter a Price to have the Goal Cost calculated
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={(e: any) => { e.preventDefault(); this.clickedGoalPreset(50); }}>
                  50
                </button>
              </td>
              <td>
                <button onClick={(e: any) => { e.preventDefault(); this.clickedGoalPreset(100); }}>
                  100
                </button>
              </td>
              <td>
                <button onClick={(e: any) => { e.preventDefault(); this.clickedGoalPreset(500); }}>
                  500
                </button>
              </td>
              <td>
                <button onClick={(e: any) => { e.preventDefault(); this.clickedGoalPreset(1000); }}>
                  1000
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }

  renderInput(label: string, type: string, name: string, placeholder: string, ref: any) {
    return (
      <div className="form-row">
        <label>
          {label}
          <input
            type={type}
            name={name}
            autoComplete="off"
            placeholder={placeholder}
            ref={ref}
          />
        </label>
      </div>
    );
  }

  renderSelect(label: string, name: string, vals: Array<string>, placeholder: string, ref: any) {
    const selOptions = vals.map((v: any) => {
      let vCapitalized = v.charAt(0).toUpperCase() + v.slice(1);
      return (
        <option key={v} value={v}>{vCapitalized}</option>
      );
    });

    return (
      <div className="form-row">
        <label>
          {label}
          <select name={name} ref={ref}>
            <option>{placeholder}</option>
            {selOptions}
          </select>
        </label>
      </div>
    );
  }

  render() {
    return (
      <div className="App-add-card">
        <h2>Add New Purchase</h2>
        <div className="error-message">Please fill out all fields</div>
        <form id="add-card" onSubmit={this.addCardSubmitted}>
          {this.renderSelect('Brand', 'brand', allowedBrands, 'Select the brand of the item', this.brandRef)}
          {this.renderSelect('Color', 'color', allowedColors, 'Select the primary color of the item', this.colorRef)}
          {this.renderInput('Product Name', 'text', 'product', 'Enter the name of the item', this.nameRef)}
          {this.renderInput('Price', 'number', 'price', 'Enter the cost of the item', this.priceRef)}
          {this.renderGoalButtons()}
          {this.renderInput('Goal (Cost per Use)', 'number', 'goal', 'Enter your ideal cost per use', this.goalRef)}
          {this.renderFormButtons()}
        </form>
      </div>
    );
  }
}

export default AddCard;