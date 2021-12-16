import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Card from './components/UI/Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxUnderHeader: false,
      data: {
        inputValue: '',
        textareaValue: '',
      }
    }
  }

  onCheckboxUnderHeaderChange = () => {
    this.setState((state) => ({
      checkboxUnderHeader: !state.checkboxUnderHeader,
    }));    
    console.log(this.state.checkboxUnderHeader)
  }

  updateData = (tempData) => {
    this.setState({
      data: { ...tempData },
    });
    
  }

  render() {
    const {
      data,
      checkboxUnderHeader
    } = this.state

    const numbers = [1, 2, 3, 4, 5, 6, 7]
    const listCard = numbers.map((number) => <Card 
      key={number} 
      data={data}
      updateValue={this.updateData} 
      {...this.state.data} 
      checkboxUnderHeader={checkboxUnderHeader}
      />)

    return (
      <div className="conteiner">
        <Header 
         onCheckboxUnderHeaderChange={this.onCheckboxUnderHeaderChange}
        />
        <div className="cardItem">
          {listCard}
        </div>
      </div>
    );
  }
}

export default App;
