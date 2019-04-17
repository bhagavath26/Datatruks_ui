import React, { Component } from 'react';
import '../styles/formElement.scss';
export class FormElements extends Component {
  render() {
    return (
      <div class="flex-center">
         <form class="form-md">
            <div class="form-group">
              <input id="form_name1" class="form-control" type="text" required/>
              <label for="form_name1">Label</label>
            </div>            
            <div class="form-group">
              <input id="form_name2" class="form-control" type="text"  disabled/>
              <label for="form_name2">Label</label>
            </div>
            <div class="form-group">
              <input id="form_name3" class="form-control" type="text" required/>
              <label for="form_name3">Label</label>
              <span class="error_message">Error Message</span>
            </div>
            <div class="text-area">
            <div class="form-group">
              <textarea id="message" class="form__field" placeholder="Your Message" rows="6"></textarea>
              <label for="message" class="form__label">Your Message</label>
            </div>
            </div>
            <div class="select">
              <select class="select-text" required>
                <option value="" disabled selected></option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <span class="select-highlight"></span>
              <span class="select-bar"></span>
              <label class="select-label">Select</label>
			    	</div>
    <div class="radio_btn">
      <p>
        <input type="radio" id="test1" name="radio-group" checked/>
        <label for="test1">Apple</label>
      </p>
      <p>  
        <input type="radio" id="test2" name="radio-group"/>
        <label for="test2">Peach</label>
      </p>
    </div>  
<div class="checkbox">
  <div class="md-checkbox">
    <input id="i2" type="checkbox" />
    <label for="i2">Item 1</label>
  </div>
</div>
  </form>
<form>
<ul class="tg-list">
  <li class="tg-list-item">
    <input class="tgl tgl-light" id="cb1" type="checkbox"/>
    <label class="tgl-btn" for="cb1"></label>
  </li>
  <li class="tg-list-item">
    <input class="tgl tgl-ios" id="cb2" type="checkbox"/>
    <label class="tgl-btn" for="cb2"></label>
  </li>
  <li class="tg-list-item">
    <input class="tgl tgl-skewed" id="cb3" type="checkbox"/>
    <label class="tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="cb3"></label>
  </li>
  <li class="tg-list-item">
    <input class="tgl tgl-flat" id="cb4" type="checkbox"/>
    <label class="tgl-btn" for="cb4"></label>
  </li>
  <li class="tg-list-item">
    <input class="tgl tgl-flip" id="cb5" type="checkbox"/>
    <label class="tgl-btn" data-tg-off="Nope" data-tg-on="Yeah!" for="cb5"></label>
  </li>
</ul>
</form>
</div>
    )
  }
}

export default FormElements
