import React from "react";
import "./Header.css";

import styled from "styled-components";
import "./check.svg";

const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  position: absolute;

  &:checked + Label:before {
    background-color: #49d120;
    border-color: #319612;
  }

  &:checked + Label:after {
    opacity: 1;
  }
`;

const Label = styled.label`
  padding-left: 30px;

  font-size: 1em;
  color: rgb(100, 156, 207);
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    width: 15px;
    height: 15px;

    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 3px;

    position: absolute;
    top: 5px;
    left: 10px;
    z-index: 1;

    transition: background .1s linear, border .1s linear;
  };

  &:after {
    content: "";
    display: block;
    width: 11px;
    height: 11px;

    background: url(
      "/static/media/check.a5bdd197.svg"
    ) no-repeat;
    background-size: 11px 11px;
    opacity: 0;

    position: absolute;
    top: 7px;
    left: 12px;
    z-index: 2;

    transition: opacity .1s linear;
  }
`;


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <div className="header-inner">
          <h2 className="header-item">Header</h2>
        </div>

        <div className="checkbox">
          
          <Input
            type="checkbox"
            id="checkbox__only-view"
            onChange={() => this.props.onIsOnlyViewModeChange()}
          />

          <Label htmlFor="checkbox__only-view">
            Only view
          </Label>
        </div>
      </div>
    );
  }
}

export default Header;
