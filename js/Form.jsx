import React from 'react';
import Formsy from 'formsy-react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';
    import { GoogleMap, GoogleMapLoader, Marker, SearchBox } from "react-google-maps";
import FormMap from './FormMap'

    const searchStyles = {
        border: '1px solid transparent',
        borderRadius: '1px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
        boxSizing: 'border-box',
        MozBoxSizing: 'border-box',
        fontSize: '14px',
        height: '32px',
        marginTop: '27px',
        outline: 'none',
        padding: '0 12px',
        textOverflow: 'ellipses',
        width: '400px',
    }

    const styles = {
        root: {
            flex: .5,
            flexDirection: 'row',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        },
        cozyFi: {
            "border": `1px solid transparent`,
            "borderRadius": `1px`,
            "boxShadow": `0 2px 6px rgba(0, 0, 0, 0.3)`,
            "boxSizing": `border-box`,
            "MozBoxSizing": `border-box`,
            "fontSize": `14px`,
            "height": `32px`,
            "marginTop": `27px`,
            "outline": `none`,
            "padding": `0 12px`,
            "textOverflow": `ellipses`,
            "width": `200px`
        }
    };


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
    alert(JSON.stringify(data, null, 4));
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
          <div className="cozyFiMap" style={styles.cozyfi}> <FormMap /> </div>
          <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
          >
          <FormsyText
            name="quirks"
            validations="isNumeric"
            hintText="      Is this space lacking anything crucial? Does the Wifi ever let you down? Is there somethign we should know??"
            floatingLabelText="Quirks"
            multiLine={true}
            fullWidth={true}
            rows={2}
          />
          <FormsyText
            name="perks"
            validations="isNumeric"
            hintText="      What are your favorite things about this space? Why do you love to work here? "
            floatingLabelText="Perks"
            multiLine={true}
            fullWidth={true}
            rows={2}

          />
          <FormsyText
            name="direct"
            validations="isWords"
            validationError={wordsError}
            hintText="      Any specific directions needed to find this place?"
            floatingLabelText="Directions"
            multiLine={true}
            rows={2}
          /><div></div>
          <br></br>
          <div>Uncheck all that don't Apply</div>
          <div>
            <br></br>
            <br></br>
            </div>
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
