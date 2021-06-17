import React from "react";
import { VscEdit } from "react-icons/vsc";
import { VscSave } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      clicked: false,
      inputValue: "",
      textareaValue: "",
      input: "",
      textarea: ""
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({input: this.state.inputValue});
    this.setState({textarea: this.state.textareaValue});
  }

  inputChangeHandler(event) {
    this.setState({ inputValue: event.target.value });
  }

  textareaChangeHandler(event) {
    this.setState({ textareaValue: event.target.value });
  }

  render() {
    return (
      <div className={this.state.checked ? "card-item" : "card"}>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className={"card-inner__caption"}>
            <input
              autoComplete="off"
              className={
                this.state.clicked
                  ? "card-text__caption"
                  : "card-text__caption-none"
              }
              placeholder={
                this.state.clicked ? "Enter Caption" : "Click Button >>>"
              }
              value={this.state.inputValue}
              onChange={(e) => this.inputChangeHandler(e)}
              disabled={this.state.clicked ? false : true}
            />

            <div className="buttons">
              <button
                className={
                  this.state.clicked ? "card-button__none" : "card-button"
                }
                onClick={() => {
                  this.setState((state) => ({ clicked: !state.clicked }));
                  if (this.state.checked === true) {
                    this.setState({ checked: false });
                  }
                }}
              >
                <VscEdit />
              </button>

              <input
                type="checkbox"
                className={this.state.clicked ? "card-input__none" : ""}
                onChange={() => {
                  this.setState((state) => ({ checked: !state.checked }));
                }}
                checked={this.state.checked}
              />

              <div className={this.state.clicked ? "" : "edit-button"}>
                <button
                  type="submit"
                  // onClick={() => this.onSaved()}
                  onClick={() => {
                    this.setState((state) => ({ clicked: !state.clicked }));
                  }}
                  className="button-save"
                >
                  <VscSave />
                </button>
                <button className="button-close"
                onClick={() => {
                  this.setState((state) => ({ clicked: !state.clicked }));
                  if (this.state.checked === true) {
                    this.setState({ checked: false });
                  };
                  this.setState({inputValue: this.state.input});
                  this.setState({textareaValue: this.state.textarea})
                }}
                >
                  <VscClose />
                </button>
              </div>
            </div>
          </div>

          <hr></hr>

          <textarea
            type="text"
            autoComplete="off"
            className={this.state.clicked ? "card-text" : "card-text__none"}
            placeholder={this.state.clicked ? "Enter Text" : ""}
            value={this.state.textareaValue}
            onChange={(e) => this.textareaChangeHandler(e)}
            disabled={this.state.clicked ? false : true}
          />
        </form>
      </div>
    );
  }
}

export default Card;
