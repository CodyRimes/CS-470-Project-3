
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import Board from './Board';

//npx to create react project. Command is quite literally: npx create-react-project "Your project name here"
//npm start to launch project in browser
//install MUI package and add to the project for UI components that are prebuilt
//inside the working directory in a PowerShell window we run this command to add MUI: npm install @mui/material @emotion/react @emotion/styled
//Package.json is a reference for how to to build the project. The node_modules folder is what holds
//the actual packages (actual source code for packages) for those references
// npm install -force or delete node_modules and redo npm install

import logo from './logo.svg';
import './App.css';
import {Typography} from "@mui/material";
function App() {

    let SubGridNames = ["Top Left Box", "Top Right Box", "Bottom Left Box", "Bottom Right Box"];


  return (
    <div className="App">



        {/*The sx prop lets you work with a superset of CSS that packages all of the style functions exposed in @mui/system. You can specify any valid CSS using this prop, as well as many theme-aware properties that are unique to MUI System.*/}
        <Grid container sx={{
                border: 2,
                borderRadius: 1,
                width: 1,
                height: '100vh'
            }} >
            <Grid item xs={12}>
                <Typography>
                    My big huge grid
                </Typography>
            </Grid>
            <Board SubGridNames={SubGridNames}/>
        </Grid>


    </div>
  );
}

export default App;
