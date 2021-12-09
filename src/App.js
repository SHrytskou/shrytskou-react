import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Card from './components/UI/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        inputValue: '',
        textareaValue: '',
      }
    }
  }

  updateData = (tempData) => {
    this.setState({
      data: { ...tempData },
    });
  }

  render() {
    return (
      <div className="conteiner">
        <Header />
        <Card
          {...this.state.data}
          updateValue={this.updateData} />
      </div>
    );
  }
}

export default App;
