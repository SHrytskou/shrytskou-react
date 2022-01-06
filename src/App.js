import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Card from "./components/UI/Card";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnlyViewMode: false,
      data: [
        {
          id: 1,
          title: "",
          text: "",
        },
        {
          id: 2,
          title: "",
          text: "",
        },
        {
          id: 3,
          title: "",
          text: "",
        },
		{
          id: 4,
          title: "",
          text: "",
        },
		{
          id: 5,
          title: "",
          text: "",
        },
		{
          id: 6,
          title: "",
          text: "",
        },
		{
          id: 7,
          title: "",
          text: "",
        },
      ],
    };
  }

  onIsOnlyViewModeChange = () => {
    this.setState((state) => ({
      isOnlyViewMode: !state.isOnlyViewMode,
    }));
  };

  updateData = (cardId, tempData) => {
    const cardIndex = this.state.data.findIndex(({ id }) => id === cardId);
    const newData = [...this.state.data];
    newData[cardIndex] = { ...this.state.data[cardIndex], ...tempData };

    this.setState({
      data: newData,
    });
  };

  render() {
    const { data, isOnlyViewMode } = this.state;

    return (
      <div className="conteiner">
        <Header onIsOnlyViewModeChange={this.onIsOnlyViewModeChange} />
        <div className="cardItem">
          {data.map(({ id, ...cardData }) => {
            return (
              <Card
                key={id}
                id={id}
                isOnlyViewMode={isOnlyViewMode}
                updateValue={this.updateData}
                {...cardData}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
