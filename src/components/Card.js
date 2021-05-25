import React from "react";

import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    return (
      <div className={this.state.checked ? 'card-item' : 'card'}>
        <div className={"card-inner__caption"}>
          <h3 className="card-caption">Card Title</h3>
          <input
            type="checkbox"
            onChange={() => {
              this.setState((state) => ({ checked: !state.checked }));
            }}
          />
        </div>

        <hr></hr>

        <div>
          <p>Some Text</p>
        </div>
      </div>
    );
  }
}

export default Card;
