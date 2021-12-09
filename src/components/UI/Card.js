import React from 'react';
import { VscEdit, VscSave, VscClose } from 'react-icons/vsc';

//import CardHeaderInput from './CardHeaderInput';
import './Card.css';

import classnames from 'classnames';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      checked: false,
      tempData: {
        inputValue: '',
        textareaValue: '',
      }
    };
  }


  changeHandler = ({ target: { name, value } }) => {
    this.setState(({ tempData }) => ({
      tempData: {
        ...tempData,
        [name]: value
      },
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
 
    this.props.updateValue(this.state.tempData);

    this.setState({
      clicked: false,
      checked: false,
    });
  }

  onCancel = () => {
    this.setState((state, { inputValue, textareaValue }) => ({
      clicked: false,
      checked: false,
      tempData: {
        inputValue,
        textareaValue,
      }
    }));
  }

  onEdit = () => {
    this.setState({
      clicked: true,
      checked: false,
    });
  }

  onCheckboxChange = () => {
    this.setState(({ checked }) => ({ checked: !checked }));
  }

  render() {
    const {
      clicked,
      checked,
      tempData: {
        inputValue,
        textareaValue,
      },
    } = this.state;

    const inputClass = classnames('card-text__caption-none', {
      'card-text__caption': clicked,
    });
    const btnEditClass = classnames('card-button', {
      'card-button__none': clicked,
    });
    const checkboxClass = classnames({
      'card-input__none': clicked,
    });
    const saveCancelButtonsClass = classnames({
      'save-cancel__buttons': !clicked,
    });
    const textareaClass = classnames('card-text__none', {
      'card-text': clicked,
    });

    return (
      <div className={checked ? 'card-item' : 'card'}>
        <form onSubmit={this.handleSubmit}>
          <div className="card-inner__caption">
            <input
              autoComplete="off"
              className={inputClass}
              placeholder={clicked ? 'Enter Caption' : ''}
              name="inputValue"
              value={inputValue}
              onChange={this.changeHandler}
              disabled={!clicked}
            />

            <div className="buttons">
              <button
                className={btnEditClass}
                onClick={this.onEdit}
                disabled={clicked}
              >
                <VscEdit />
              </button>

              <input
                type="checkbox"
                className={checkboxClass}
                onChange={this.onCheckboxChange}
                checked={checked}
                disabled={clicked}
              />

              <div className={saveCancelButtonsClass}>
                <button
                  type="submit"
                  className="button-save"
                  disabled={!clicked}
                >
                  <VscSave />
                </button>

                <button
                  className="button-cancel"
                  onClick={this.onCancel}
                  disabled={!clicked}
                >
                  <VscClose />
                </button>
              </div>
            </div>
          </div>

          <hr />

          <textarea
            type="text"
            autoComplete="off"
            className={textareaClass}
            placeholder={clicked ? 'Enter Text' : ''}
            name="textareaValue"
            value={textareaValue}
            onChange={this.changeHandler}
            disabled={!clicked}
          />
        </form>
      </div>
    );
  }
}

export default Card;
