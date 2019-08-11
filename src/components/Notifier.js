import React, {Component} from 'react';
import Snackbar from "@material-ui/core/Snackbar/Snackbar";

let openSnackbarFn;

class Notifier extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      message: '',
    }
  }

  componentDidMount() {
    openSnackbarFn = this.openSnackbar;
  }

  openSnackbar = ({message}) => {
    this.setState({
      open: true,
      message: message
    });
  };

  handleSnackbarClose = () => {
    this.setState({
      open: false,
      message: ''
    });
  };

  render() {


    return (
      <Snackbar
        anchorOrigin={{vertical:'bottom', horizontal:'center'}}
        message={this.state.message}
        autoHideDuration={2000}
        onClose={this.handleSnackbarClose}
        open={this.state.open}
      />
    )
  }


}
export function openSnackbar(message) {
  openSnackbarFn({message})
}

export default Notifier;