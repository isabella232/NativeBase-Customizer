import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import ColorPicker from "../../StyledComponents/ColorPicker";
import Slider from "../../StyledComponents/Slider";
import AllHeader from "./AllHeader";
import { appliedTheme, changeValue } from "../../Actions/theme";

class Anatomy extends Component {
  render() {
    return (
      <WrapperDiv>
        <AllHeader />
        <FormGroup noBorder>
          <FormRow>
            <FormCol>
              <Text header uiSize="m">
                Content
              </Text>
            </FormCol>
          </FormRow>

          <FormRow>
            <FormCol>
              <Text>FontFamily</Text>
            </FormCol>
            <FormCol>
              <Input
                type="text"
                value={this.props.variables.fontFamily}
                onChange={e =>
                  this.props.changeValue("fontFamily", parseInt(e.target.value))
                }
              />
            </FormCol>
          </FormRow>

          <FormRow>
            <FormCol>
              <Text>Text Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.textColor}
                onChangeColor={color =>
                  this.props.changeValue("textColor", color)
                }
              />
            </FormCol>
          </FormRow>
        </FormGroup>
        <FormGroup>
          <FormRow>
            <FormCol>
              <Text header uiSize="m">
                Footer
              </Text>
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Text>Height</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.footerHeight}
                onChange={e =>
                  this.props.changeValue(
                    "footerHeight",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Text>FontSize</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.tabBarTextSize}
                onChange={e =>
                  this.props.changeValue(
                    "tabBarTextSize",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Text>Active Background Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.tabActiveBgColor}
                onChangeColor={color =>
                  this.props.changeValue("tabActiveBgColor", color)
                }
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Text>Active Text Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.tabBarActiveTextColor}
                onChangeColor={color =>
                  this.props.changeValue("tabBarActiveTextColor", color)
                }
              />
            </FormCol>
          </FormRow>
        </FormGroup>
      </WrapperDiv>
    );
  }
}

function bindAction(dispatch) {
  return {
    appliedTheme: () => dispatch(appliedTheme()),
    changeValue: (property, val) => dispatch(changeValue(property, val))
  };
}

const mapStateToProps = state => ({
  variables: state.theme.variable
});

export default connect(mapStateToProps, bindAction)(Anatomy);