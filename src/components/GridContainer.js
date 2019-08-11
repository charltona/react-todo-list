import React from 'react';
import Grid from '@material-ui/core/Grid';

export default class GridContainer extends React.Component {

  render() {
    return (
      <>
        <Grid container direction="row" justify="center" align="center" spacing={0}>
          {this.props.children}
        </Grid>
      </>
    )
  }
}