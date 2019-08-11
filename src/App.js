import React, {Component} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import GridContainer from "./components/GridContainer";
import Container from "@material-ui/core/Container/Container";
import Grid from "@material-ui/core/Grid";
import NewItemBar from "./components/NewItemBar";
import Paper from "../node_modules/@material-ui/core/Paper/Paper";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import Notifier, {openSnackbar} from "./components/Notifier";


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: '',
      items: []
    };
  }

  handleInputChange = (e) => {
    this.setState({input:e.target.value});
  };

  handleAddItem = (e) => {
    e.preventDefault();
    if (this.state.input.length > 0) {
      let newItem = {value: this.state.input, checked: false};
      openSnackbar(`Added: "${this.state.input}"`);
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
          input: ''
        }
      });
    }
    else {
      openSnackbar('May as well do something while you\'re doing nothing');
    }
  };

  handleChecked = (e) => {

      this.setState({

        items: this.state.items.map((item,index) => {
          if (index.toString() === e.target.value) {
            item.checked = !item.checked;
          }
          return item;
        })
      });

      openSnackbar("Saved changes!");
  };

  handleRemove = (e) => {
    this.setState({
      items: this.state.items.filter((item,index) => {
        return index.toString() !== e.currentTarget.dataset.value ? item : '';
      })
    });
    openSnackbar("Deleted!");

  };

  saveLocally = () => {
    localStorage.setItem('todo', JSON.stringify(this.state.items));
  };

  componentDidMount() {
    let savedData = JSON.parse(localStorage.getItem('todo'));
    this.setState({items:savedData});
  }

  componentDidUpdate(nextProps, nextState, x) {
    this.saveLocally();
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Container maxWidth={"sm"}>
          <GridContainer>
            <Grid item xs={12} >
              <NewItemBar items={this.state.items} handleChange={this.handleInputChange} handleAdd={this.handleAddItem} handleSubmit={this.handleAddItem} input={this.state.input} />
            </Grid>
            <Grid item xs={12} >
              {this.state.items.length > 0 &&
              <Paper>
                <TodoList items={this.state.items}>
                  {this.state.items.sort((a,b) => a.checked - b.checked).map((item, index) => <TodoItem item={item.value} key={index} index={index} checked={item.checked} handleChecked={this.handleChecked}  handleRemove={this.handleRemove}/>)}
                </TodoList>
              </Paper>
              }
            </Grid>
          </GridContainer>
        </Container>
        <Notifier/>
      </div>
    );
  }

}