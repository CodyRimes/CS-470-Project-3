import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";

//Creating constants for row and column dimensions
const SubGridRows = 3;
const SubGridColumns = 3;

//Declaring an empty array
let SubGridArray = [];

//For each iteration in which we should have a column in our empty array
for (let i = 0; i < SubGridColumns; i++)
{
    //Lets put an array in it so we can put a representation for our columns
    SubGridArray[i] = [];
    for (let j = 0; j < SubGridRows; i++)
    {
        //Now inside that array we're at, let's put some null values where our rows would be
        SubGridArray[i][j] = null
    }
}

//Makes the board (i.e. 4 sub grids).
function Board(props)
{
     const {SubGridNames} = props;
     return SubGridNames.map((ReceivedSubGridName,index) =>
        // This is our container grid component. It will contain all components within one "subgrid" of the pentago board game.
        // Just as a side note, it is to my knowledge that anything after the opening <grid tag but before the enclosing of opening tag, i.e. the ">" (but not the closing tag) is known as a prop
        // Thus container, key, sx, xs, and item are props (note that "key" is a special prop react uses to know when to update the rendered UI)
        //FYI for future reference it is not usually smart to set your key equal the index of an array, because if you manipulate that array it could shift the indexes, which would shift the keys,
        //and prompt react to rerender every key'd element, thus defeating the purpose of react only rerendering changes. See this video for refernce: https://www.youtube.com/watch?v=c0OwxIdP5CM
        <Grid  container
              key={index}
                {/*//Note how MUI gives you a baked in prop (property) that you can take advantage of for defining custom style while also having access to theme*/}
                sx={{
                border: 1,
                borderRadius: 1,
                width: '20%',
                height: '20%'
        }} xs={6} item>
            <Button variant='contained' startIcon={<UndoIcon/>} onClick={() => {

            }}>
                Rotate left
                {/*We will need a click listener here to launch the rotation function when the user clicks on this button*/}
            </Button>
            {ReceivedSubGridName}

            <Button variant='contained' endIcon={<RedoIcon/>} onClick={() => {

            }}>
                Rotate right
                {/*We will need a click listener here to launch the rotation function when the user clicks on this button*/}
            </Button>
        {/*  We will declare another grid within the container grid as it will contain the 3x3 cells for each subgrid in the pentago game or would it be our cells function?  */}
            <Grid sx={{
                border: 1,
                borderRadius: 1,
                width: '20%',
                height: '20%'
            }} xs={9} item>

                <Cells cellPropsToPassIn={SubGridArray}
                    >

                </Cells>

            </Grid>

        </Grid>
    );



}

export default Board;

function Cells(props)
{
    //Usually props are object types (i.e. a bag of properties). In this case the cell receives an array type. Thus we do not need to destructure the incoming prop.
    //We can however capture the props variable and assign something equal to it with a more useful name for when we look at this code later
    let OurThreeByThreeArray = props;

    //Let's return our rendered object though
    return (
        <Box sx={{
            width: 50,
            height: 50,
            backgroundColor: 'secondary.main',
            border: 1,
            borderColor: 'black',
            borderRadius: '50%'
        }}
        >
            This is cell number:
        </Box>

        //WHEN A CLICK HAPPENS ON THIS CELL, WE WILL NEED TO HANDLE IT. I.E. FOR THE PENTAGO GAME CHANGE THE COLOR DEPENDING ON WHO's TURN IT IS

    );
}
