import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import ColorPicker from "../../StyledComponents/ColorPicker";
import AllHeader from "./AllHeader";
import { appliedTheme, changeValue } from "../../Actions/theme";

class List extends Component {
  render() {
    return (
      <WrapperDiv>
        <FormGroup noBorder>
          <FormRow>
            <FormCol>
              <Text header uiSize="m">
                List
              </Text>
            </FormCol>
          </FormRow>
          {this.props.page.subPage != "List Icon" && (
            <FormRow>
              <FormCol>
                <Text>Font Size</Text>
              </FormCol>
              <FormCol>
                <Input
                  type="number"
                  value={this.props.variables.DefaultFontSize}
                  onChange={e =>
                    this.props.changeValue(
                      "DefaultFontSize",
                      parseInt(e.target.value)
                    )
                  }
                />
              </FormCol>
            </FormRow>
          )}

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
              <Text>Color</Text>
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
          {this.props.page.subPage === "List Separator" && (
            <FormRow>
              <FormCol>
                <Text>Separator FontSize</Text>
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
          )}
          {this.props.page.subPage === "List Thumbnail" && (
            <FormRow>
              <FormCol>
                <Text>Note FontSize</Text>
              </FormCol>
              <FormCol>
                <Input
                  type="number"
                  value={this.props.variables.listNoteSize}
                  onChange={e =>
                    this.props.changeValue(
                      "noteFontSize",
                      parseInt(e.target.value)
                    )
                  }
                />
              </FormCol>
            </FormRow>
          )}
          {this.props.page.subPage === "List Avatar" && (
            <FormRow>
              <FormCol>
                <Text>Note FontSize</Text>
              </FormCol>
              <FormCol>
                <Input
                  type="number"
                  value={this.props.variables.noteFontSize}
                  onChange={e =>
                    this.props.changeValue(
                      "noteFontSize",
                      parseInt(e.target.value)
                    )
                  }
                />
              </FormCol>
            </FormRow>
          )}
          {this.props.page.subPage === "List Icon" && (
            <FormRow>
              <FormCol>
                <Text>Icon Size</Text>
              </FormCol>
              <FormCol>
                <Input
                  type="number"
                  value={this.props.variables.iconFontSize}
                  onChange={e =>
                    this.props.changeValue(
                      "iconFontSize",
                      parseInt(e.target.value)
                    )
                  }
                />
              </FormCol>
            </FormRow>
          )}

          {(this.props.page.subPage === "List Avatar" ||
            this.props.page.subPage === "List Thumbnail") && (
            <FormRow>
              <FormCol>
                <Text>Note Color</Text>
              </FormCol>
              <FormCol>
                <ColorPicker
                  value={this.props.variables.listNoteColor}
                  onChangeColor={color =>
                    this.props.changeValue("listNoteColor", color)
                  }
                />
              </FormCol>
            </FormRow>
          )}

          <FormRow>
            <FormCol>
              <Text>Padding</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.listItemPadding}
                onChange={e =>
                  this.props.changeValue(
                    "listItemPadding",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow>

          <FormRow>
            <FormCol>
              <Text>Background Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.listBg}
                onChangeColor={color => this.props.changeValue("listBg", color)}
              />
            </FormCol>
          </FormRow>

          {/* <FormRow>
            <FormCol>
              <Text>Underlay Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker value={this.props.variables.listBtnUnderlayColor} />
            </FormCol>
          </FormRow> */}

          <FormRow>
            <FormCol>
              <Text>Border Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.listBorderColor}
                onChangeColor={color =>
                  this.props.changeValue("listBorderColor", color)
                }
              />
            </FormCol>
          </FormRow>
          {this.props.page.subPage === "List Thumbnail" && (
            <FormRow>
              <FormCol>
                <Text>Right Text Size</Text>
              </FormCol>
              <FormCol>
                <Input
                  type="number"
                  value={this.props.variables.listNoteSize}
                  onChange={e =>
                    this.props.changeValue(
                      "listNoteSize",
                      parseInt(e.target.value)
                    )
                  }
                />
              </FormCol>
            </FormRow>
          )}
          {this.props.page.subPage === "List Thumbnail" && (
            <FormRow>
              <FormCol>
                <Text>Right Text Color</Text>
              </FormCol>
              <FormCol>
                <ColorPicker
                  value={this.props.variables.sTabBarActiveTextColor}
                  onChangeColor={color =>
                    this.props.changeValue("sTabBarActiveTextColor", color)
                  }
                />
              </FormCol>
            </FormRow>
          )}
          {this.props.page.subPage === "List Divider" && (
            <FormRow>
              <FormCol>
                <Text>Divider Background</Text>
              </FormCol>
              <FormCol>
                <ColorPicker
                  value={this.props.variables.listDividerBg}
                  onChangeColor={color =>
                    this.props.changeValue("listDividerBg", color)
                  }
                />
              </FormCol>
            </FormRow>
          )}
        </FormGroup>
        <AllHeader />
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
  variables: state.present.theme.variable,
  page: state.present.navigation
});

export default connect(mapStateToProps, bindAction)(List);