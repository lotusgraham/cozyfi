import React from 'react';
import Formsy from 'formsy-react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';

const Form = React.createClass({

  /**
   * As an alternative to `MuiThemeProvider` you can add a theme directly into context.
   * See the [Material-UI themes](http://www.material-ui.com/#/customization/themes) docs for details.
   *
   * childContextTypes: {
   *   muiTheme: React.PropTypes.object,
   * },
   * getChildContext(){
   *   return {
   *     muiTheme: getMuiTheme(),
   *   }
   * },
   */

  getInitialState() {
    return {
      canSubmit: false,
    };
  },

  errorMessages: {
    wordsError: "Please only use letters",
    numericError: "Please provide a number",
    urlError: "Please provide a valid URL",
  },

  styles: {
    paperStyle: {
      width: 500,
      margin: 'auto',
      padding: 20,
    },
    switchStyle: {
      marginBottom: 16,
    },
    submitStyle: {
      marginTop: 32,
    },
  },

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  },

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  },

  submitForm(data) {
    console.log(JSON.stringify(data, null, 4));
  },

  notifyFormError(data) {
    console.error('Form error:', data);
  },

  render() {
    let {paperStyle, switchStyle, submitStyle } = this.styles;
    let { wordsError, numericError, urlError } = this.errorMessages;

    return (
      <div>
        <Paper style={paperStyle}>
          <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
          >
          <FormsyText
            name="Google Places"
            validations="isWords"
            validationError={wordsError}
            required
            hintText="Enter Google Address or Title"
            floatingLabelText="Google Places"
          />


          <div>Uncheck all that don't Apply</div>
            <FormsyCheckbox
              name="hasWifi"
              label="Fast Wifi"
              style={switchStyle}
            />
            <FormsyCheckbox
                name="hasCaffeine"
                label="Caffiene"
                style={switchStyle}
                checked={false}
              />
              <FormsyCheckbox
                  name="hasFood"
                  label="Food"
                  style={switchStyle}
                />
            <FormsyCheckbox
                  name="hasOutlets"
                  label="Outlets"
                  style={switchStyle}
                  defaultChecked={true}
              />
            <FormsyCheckbox
                name="hasTableSpace"
                label="Table Space"
                style={switchStyle}
                defaultChecked={true}

              />
              <FormsyCheckbox
                    name="hasOutdoorSpace"
                    label="Outdoors"
                    style={switchStyle}
                />
              <FormsyCheckbox
                  name="isQuiet"
                  label="Quiet"
                  style={switchStyle}
                />
            <FormsyText
              name="quirks"
              validations="isNumeric"
              hintText="Is this space lacking anything crucial? Does the Wifi ever let you down? Is there somethign we should know??"
              floatingLabelText="Quirks"
              multiLine={true}
              fullWidth={true}
            />
            <FormsyText
              name="perks"
              validations="isNumeric"
              hintText="What are your favorite things about this space? Why do you love to work here? "
              floatingLabelText="Perks"
              multiLine={true}
              fullWidth={true}
            />
            <FormsyText
              name="Additional Specific Directions Needed?"
              validations="isWords"
              validationError={wordsError}
              hintText="Any specific directions needed to find this place?"
              floatingLabelText="Directions"
            />
            <RaisedButton
              style={submitStyle}
              type="submit"
              label="Submit"
              disabled={!this.state.canSubmit}
            />
          </Formsy.Form>
        </Paper>
      </div>
    );
  },
});

export default Form;
