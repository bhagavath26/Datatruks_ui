import React, { Component } from 'react';
import '../styles/formElement.scss';
export class FormElements extends Component {
  render() {
    return (
      <div>
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

          </form>
      
      </div>
    )
  }
}

export default FormElements
