import React from "react";
import { VscEdit, VscSave, VscClose } from "react-icons/vsc";

import "./Card.css";


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      checked: false,
      tempData: {
        title: this.props.title,
        text: this.props.text,
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

    this.props.updateValue(this.props.id, this.state.tempData);

    this.setState({
      clicked: false,
      checked: false,
    });
  };

  onCancel = () => {
    this.setState((state, { title, text }) => ({
      clicked: false,
      checked: false,
      tempData: {
        title,
        text,
      },
    }));
  };

  onEdit = () => {
    this.setState({
      clicked: true,
      checked: false,
    });
  };

  onHeaderCardChange = () => {
    this.setState(({ checked }) => ({ checked: !checked }));
  };

  static getDerivedStateFromProps(props) {
    return props.isOnlyViewMode ?
      ({
        clicked: false,
        tempData: {
          title: props.title,
          text: props.text,
        },
      })
      : null
  }

  render() {
    const {
      clicked,
      checked,
      tempData: { title, text },
    } = this.state;

    const { isOnlyViewMode } = this.props;

    const inputClass = clicked 
      ? "card-input__edit-text" 
      : "card-input";

    const textareaClass = clicked
      ? "card-textarea"
      : "card-textarea__edit-text";

    return (
      <div className={checked ? "card-item" : "card"}>
        <form onSubmit={this.handleSubmit}>
          <div className="card-inner__caption">
            <div>
              <input
                type="text"
                autoComplete="off"
                className={inputClass}
                placeholder={clicked ? "Enter Caption" : ""}
                name="title"
                value={title}
                onChange={this.changeHandler}
                disabled={!clicked}
              />
            </div>
            <div className="buttons">

            {!clicked ? (
                <div>
                  <button
                    className={
                      !isOnlyViewMode ? "card-button" : "card-button__none"
                    }
                    onClick={this.onEdit}
                    disabled={clicked}
                  >
                    <VscEdit className="vscEdit" />
                  </button>

                  <input
                    type="checkbox"
                    onChange={this.onHeaderCardChange}
                    checked={checked}
                  />
                </div>
              ) : null}

              {clicked ? (
                <div>
                  <button
                    type="submit"
                    className={!isOnlyViewMode ? "button-save" : null}
                  >
                    <VscSave />
                  </button>

                  <button
                    className={!isOnlyViewMode ? "button-cancel" : null}
                    onClick={this.onCancel}
                  >
                    <VscClose />
                  </button>
                </div>
              ) : null}

            </div>
          </div>
          <hr />

          <div>
            <textarea
              type="text"
              autoComplete="off"
              className={textareaClass}
              placeholder={clicked ? "Enter Text" : ""}
              name="text"
              value={text}
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
