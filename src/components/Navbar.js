import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function Navbar() {

    return (
      <>
        <AppBar position="static" color="default" className="todo-header">
          <Toolbar>
            <Typography variant={"h6"}>Todo list</Typography>
          </Toolbar>
        </AppBar>
      </>
    )

}