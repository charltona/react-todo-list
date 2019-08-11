import React, {Component} from 'react';
import List from "@material-ui/core/List/List";

export default class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items
    }

  }

  render() {
    return (
    <List dense>
      {this.props.children}
    </List>

    )
  }
}