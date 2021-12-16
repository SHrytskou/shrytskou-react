import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onCheckboxUnderHeaderChange = () => {
      this.props.onCheckboxUnderHeaderChange()
  }; 

  render() {
    return (
      
      <div className="header">
      <div className="header-inner">
        <h2 className="header-item">Header</h2>        
      </div>

      <div className="checkboxUnderHeader">
            <label>
              <input
                type="checkbox"
                //checked={checkboxUnderHeader}
                onChange={this.onCheckboxUnderHeaderChange}  
              />{" "}
              View only
            </label>
          </div>
      </div>
    );
  }
}

export default Header;
