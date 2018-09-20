import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <TodoList />
        </Provider>
      </div>
    );
  }
}

export default App;

/* <form action="/action_page.php">
First name: <input type="text" name="fname"><br>
Last name: <input type="text" name="lname"><br>
<input type="submit" value="Submit">
</form> 

 
class Person {
  constructor(money, name) {
    this.money = money
    this.name = name
  }

  walk() {
    console.log("I am walking")
  }
}

const p = new Person(100, "some person")
p.walk()

const p = {
  money: 100,
  name: "some person",
  walk: () => {
    console.log("I am walking")
  }
}
p.walk()



*/