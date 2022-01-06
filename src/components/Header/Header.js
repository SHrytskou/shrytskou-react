import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      
      <div className="header">
      <div className="header-inner">
        <h2 className="header-item">Header</h2>        
      </div>

      <div className="checkbox__only-view">
            <label>
              <input
                type="checkbox"
                onChange={() => this.props.onIsOnlyViewModeChange()}  
              />{" "}
              Only view
            </label>
          </div>
      </div>
    );
  }
}

export default Header;
