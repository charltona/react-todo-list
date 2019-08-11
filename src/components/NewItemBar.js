import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Grid from "@material-ui/core/Grid/Grid";
import IconButton from "@material-ui/core/IconButton/IconButton";
import AddIcon from "@material-ui/icons/Add";


export default class NewItemBar extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className={`inputform`}>
        <Grid container spacing={0}>
          <Grid item xs={11}>
        <TextField id="new-item" placeholder="Add new item" fullWidth onChange={this.props.handleChange} value={this.props.input} autoComplete={`off`} />
          </Grid>
          <Grid item xs={1}>
            <IconButton size="small" onClick={this.props.handleAdd}><AddIcon/></IconButton>
          </Grid>
        </Grid>

      </form>
    )
  }
}