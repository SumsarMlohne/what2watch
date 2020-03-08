import React, {Component} from 'react';
import './App.css';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {




  render(){
    return(
      <div className="App" style={{background: '#F5F5DC'}}>
        <Main />
      </div>
      )
  } 
}

export default App;
