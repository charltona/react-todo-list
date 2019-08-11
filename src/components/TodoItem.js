import React, {Component} from 'react';
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import IconButton from "@material-ui/core/IconButton/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";


export default class TodoItem extends Component {

  render() {
    return (
      <div className={`list-item-container ${this.props.checked ? 'checked' : 'unchecked'} `}>
        <ListItem button className={`list-item ${this.props.checked ? 'checked' : ''}`}>
          <ListItemIcon>
            <Checkbox edge={`end`} size="small" onChange={this.props.handleChecked.bind(this)} value={this.props.index}
                      checked={this.props.checked}/>
          </ListItemIcon>
          <ListItemText primary={this.props.item}/>
          <ListItemSecondaryAction>
            <IconButton size={`small`} onClick={this.props.handleRemove.bind(this)} data-value={this.props.index}>
              <DeleteIcon fontSize="small"/>
            </IconButton>
          </ListItemSecondaryAction>
          <ListItemSecondaryAction>

          </ListItemSecondaryAction>
        </ListItem>
      </div>
    )
  }
}