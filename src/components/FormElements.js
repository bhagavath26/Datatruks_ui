import React, { Component } from 'react';
import '../styles/formElement.scss';
export class FormElements extends Component {
  render() {
    return (
      <div class="flex-center">
         <form class="cs_form_md">
            <div class="cs_form_group">
              <input id="form_name1" class="form-control" type="text" required/>
              <label for="form_name1">Label</label>
            </div>            
            <div class="cs_form_group">
              <input id="form_name2" class="form-control" type="text"  disabled/>
              <label for="form_name2">Label</label>
            </div>
            <div class="cs_form_group">
              <input id="form_name3" class="form-control" type="text" required/>
              <label for="form_name3">Label</label>
              <span class="error_message">Error Message</span>
            </div>
            <div class="cs_text_area">
            <div class="cs_form_group">
              <textarea id="message" class="form__field" placeholder="Your Message" rows="6"></textarea>
              <label for="message" class="form__label">Your Message</label>
            </div>
            </div>
            <div class="cs_select">
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
    <div class="cs_radio_btn">
      <p>
        <input type="radio" id="test1" name="radio-group" checked/>
        <label for="test1">Apple</label>
      </p>
      <p>  
        <input type="radio" id="test2" name="radio-group"/>
        <label for="test2">Peach</label>
      </p>
    </div>  
<div class="cs_checkbox">
  <div class="md-checkbox">
    <input id="i2" type="checkbox" />
    <label for="i2">Item 1</label>
  </div>
</div>
<div class="cs_chip">
  <div class="chip-head">C</div>
  <div class="chip-content">Chip Content</div>
  <div class="chip-close">
    <svg class="chip-svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>
  </div>
</div>
  </form>
<form>
<ul class="cs_tg_list">
  <li class="cs_tg-list-item">
    <input class="cs_tgl cs_tgl-light" id="cb1" type="checkbox"/>
    <label class="cs_tgl-btn" for="cb1"></label>
  </li>
  <li class="cs_list-item">
    <input class="cs_tgl cs_tgl-ios" id="cb2" type="checkbox"/>
    <label class="cs_tgl-btn" for="cb2"></label>
  </li>
  <li class="cs_tg-list-item">
    <input class="cs_tgl cs_tgl-skewed" id="cb3" type="checkbox"/>
    <label class="cs_tgl-btn" data-tg-off="OFF" data-tg-on="ON" for="cb3"></label>
  </li>
  <li class="cs_tg-list-item">
    <input class="cs_tgl cs_tgl-flat" id="cb4" type="checkbox"/>
    <label class="cs_tgl-btn" for="cb4"></label>
  </li>
  <li class="cs_tg-list-item">
    <input class="cs_tgl cs_tgl-flip" id="cb5" type="checkbox"/>
    <label class="cs_tgl-btn" data-tg-off="Nope" data-tg-on="Yeah!" for="cb5"></label>
  </li>
</ul>

</form>
</div>
    )
  }
}

export default FormElements
