import React from "react";
import { VscEdit, VscSave, VscClose } from "react-icons/vsc";

//import CardHeaderInput from './CardHeaderInput';
import "./Card.css";

import classnames from "classnames";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      checked: false,
      //checkboxUnderHeader: false,
      tempData: {
        inputValue: "",
        textareaValue: "",
      },
    };
  }

  changeHandler = ({ target: { name, value } }) => {
    this.setState(({ tempData }) => ({
      tempData: {
        ...tempData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.updateValue(this.state.tempData);

    this.setState({
      clicked: false,
      checked: false,
    });
  };

  onCancel = () => {
    this.setState((state, { inputValue, textareaValue }) => ({
      clicked: false,
      checked: false,
      tempData: {
        inputValue,
        textareaValue,
      },
    }));
  };

  onEdit = () => {
    this.setState({
      clicked: true,
      checked: false,
    });
  };

  onCheckboxHeaderCardChange = () => {
    this.setState(({ checked }) => ({ checked: !checked }));
  };

  /* onCheckboxUnderHeaderChange = (props) => {
    this.setState((state, { inputValue, textareaValue }) => ({
      clicked: false,
      tempData: {
        inputValue,
        textareaValue,
      },
    }));
  }; */

  static getDerivedStateFromProps(props, state) {
    if (props.checkboxUnderHeader === true) {
      return {
        clicked: false,
        tempData: { ...props.data },
      };
    }
    return null;
  }

  render() {
    const {
      clicked,
      checked,
      tempData: { inputValue, textareaValue },
    } = this.state;

    const { checkboxUnderHeader } = this.props;

    const inputClass = classnames("card-text__caption-none", {
      "card-text__caption": clicked,
    });
    const editCheckboxHeaderCardClass = classnames("edit-checkbox__header", {
      "edit-checkbox__header-none": clicked,
    });
    /* const checkboxClass = classnames({
      "card-input__none": clicked,
    }); */
    const saveCancelButtonsClass = classnames({
      "save-cancel__buttons-none": !clicked,
    });

    const textareaClass = classnames("card-text__none", {
      "card-text": clicked,
    });

    return (
      <div className={checked ? "card-item" : "card"}>
        <form onSubmit={this.handleSubmit}>
          <div className="card-inner__caption">
            <div className={!checkboxUnderHeader ? "" : "card-button__none"}>
              <input
                type="text"
                autoComplete="off"
                className={inputClass}
                placeholder={clicked ? "Enter Caption" : ""}
                name="inputValue"
                value={inputValue}
                onChange={this.changeHandler}
                disabled={!clicked}
              />
            </div>
            <div className="buttons">
              <div className={editCheckboxHeaderCardClass}>
                <button
                  className={
                    !checkboxUnderHeader ? "card-button" : "card-button__none"
                  }
                  onClick={this.onEdit}
                  disabled={clicked}
                >
                  <VscEdit />
                </button>

                <input
                  type="checkbox"
                  onChange={this.onCheckboxHeaderCardChange}
                  checked={checked}
                />
              </div>

              <div className={saveCancelButtonsClass}>
                <button
                  type="submit"
                  className={
                    !checkboxUnderHeader ? "button-save" : "card-button__none"
                  }
                >
                  <VscSave />
                </button>

                <button
                  className={
                    !checkboxUnderHeader ? "button-cancel" : "card-button__none"
                  }
                  onClick={this.onCancel}
                >
                  <VscClose />
                </button>
              </div>
            </div>
          </div>
          <hr />

          <div className={!checkboxUnderHeader ? "" : "card-button__none"}>
            <textarea
              type="text"
              autoComplete="off"
              className={textareaClass}
              placeholder={clicked ? "Enter Text" : ""}
              name="textareaValue"
              value={textareaValue}
              onChange={this.changeHandler}
              disabled={!clicked}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Card;
