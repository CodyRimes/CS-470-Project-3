import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import {Typography} from "@mui/material";

//Creating constants for row and column dimensions
const SubGridRows = 3;
const SubGridColumns = 3;



//Makes the board (i.e. 4 sub grids).
function Board(props)
{
     const {SubGridNames} = props;


     //making 3x3 subgrid array for each board call (the board function should be called 4 times, thus we will want 4 3x3 arrays for each sub-board)
    //Declaring an empty array
    let SubGridArray = new Array(SubGridRows);

//For each iteration in which we should have a
    for (let i = 0; i < SubGridRows; i++)
    {
        //Lets put an array in it so we can put a representation for our columns
        SubGridArray[i] = new Array(SubGridColumns);

        for (let j = 0; j < SubGridColumns; j++)
        {
            //Now inside that array we're at, let's put some null values where
            SubGridArray[i][j] = <Cell key = {(i + 1) * (j + 1)} state cellStateSetter CellColumn = {j} CellRow = {i} />;
        }
    }




     return SubGridNames.map((ReceivedSubGridName,index) =>
        // This is our container grid component. It will contain all components within one "subgrid" of the pentago board game.
        // Just as a side note, it is to my knowledge that anything after the opening <grid tag but before the enclosing of opening tag, i.e. the ">" (but not the closing tag) is known as a prop
        // Thus container, key, sx, xs, and item are props (note that "key" is a special prop react uses to know when to update the rendered UI)
        //FYI for future reference it is not usually smart to set your key equal the index of an array, because if you manipulate that array it could shift the indexes, which would shift the keys,
        //and prompt react to rerender every key'd element, thus defeating the purpose of react only rerendering changes. See this video for refernce: https://www.youtube.com/watch?v=c0OwxIdP5CM
        //Note how MUI gives you a baked in prop (property) that you can take advantage of for defining custom style while also having access to theme in the sx prop
         <Grid  container key={index} xs={6} item sx={{
            border: 1,
            borderRadius: 1,
            width: '20%',
            justifyContent:"center",
            alignItems:"center"
         }}>
            <Button variant='contained' startIcon={<UndoIcon/>} xs={1} onClick={() => {

            }}>
                Rotate left
                {/*We will need a click listener here to launch the rotation function when the user clicks on this button*/}
            </Button>
             <Typography xs={1} >
                {ReceivedSubGridName}
             </Typography>
            <Button variant='contained' endIcon={<RedoIcon/>} xs={1} onClick={() => {

            }}>
                Rotate right
                {/*We will need a click listener here to launch the rotation function when the user clicks on this button*/}
            </Button>
        {/*  We will declare another grid within the container grid as it will contain the 3x3 cells for each subgrid in the pentago game or would it be our cells function?  */}
            <Grid sx={{
                border: 1,
                borderRadius: 1,

            }}  xs={12} item container>

                {SubGridArray}

            </Grid>

        </Grid>
    );



}

export default Board;

function Cell(props)
{
    //Usually props are object types (i.e. a bag of properties). In this case the cell receives an array type. Thus we do not need to destructure the incoming prop.
    //We can however capture the props variable and assign something equal to it with a more useful name for when we look at this code later
    const {CellColumn, CellRow, state, cellStateSetter} = props;

    console.log(props);
    console.log(CellColumn, CellRow, state, cellStateSetter);

    //Let's return our rendered object though
    return (
        <Grid container sx={{

            backgroundColor: 'secondary.main',
            border: 1,
            borderColor: 'black',
            borderRadius: '50%',
            justifyContent:"center",
            alignItems:"center"
        }} xs={4} item
        >
            <Grid item xs={12} sx={{
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Typography >
                    This is cell
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{
            justifyContent:"center",
            alignItems:"center"
            }}>
                <Typography >
                Column: {CellColumn + 1}
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Typography>
                Row: {CellRow + 1}
                </Typography>
            </Grid>

        </Grid>

        //WHEN A CLICK HAPPENS ON THIS CELL, WE WILL NEED TO HANDLE IT. I.E. FOR THE PENTAGO GAME CHANGE THE COLOR DEPENDING ON WHO's TURN IT IS

    );
}
