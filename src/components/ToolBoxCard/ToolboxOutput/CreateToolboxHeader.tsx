
import React from 'react';
import { Button, Box, Typography, Grid, TextField, ListItemIcon, Menu,MenuItem, Container } from "@mui/material";

const projectsList = [
    {
      value: 'Project1',
      label: 'Project1',
    },
    {
      value: 'Project2',
      label: 'Project2',
    },
    {
      value: 'Project3',
      label: 'Project3',
    },
  ];
  const streamsList = [
    {
      value: 'Stream1',
      label: 'Stream1',
    },
    {
      value: 'Stream2',
      label: 'Stream2',
    },
    {
      value: 'Stream3',
      label: 'Stream3',
    },
  ];
const CreateToolboxHeader: React.VFC=()=>{
return (
  <Grid style={{display:'flex', width: '100%', justifyContent: 'end'}} spacing={2}>
    <div className='craetetoolbox-header' style={{display:'flex'}}>
      <Grid item style={{width: '100%'}}>
          <TextField
            id="project"
            name="project"
            fullWidth
            style={{width:'250px', marginRight: '25px'}}
            select
            label="Choose a project"
            variant="standard"
          >
           {projectsList.map((project) => (
              <MenuItem key={project.value} value={project.value}>
                {project.label}
              </MenuItem>
             ))}
          </TextField>        
      </Grid>
      <Grid item xs={4}>
          <TextField
            id="standard"
            name="stream"
            fullWidth
            style={{width:'250px', marginRight:'50px'}}
            select
            label="Select Stream"
            variant="standard"
          >
            {streamsList.map((stream) => (
      <MenuItem key={stream.value} value={stream.value}>
        {stream.label}
      </MenuItem>
    ))}
          </TextField>
      </Grid>
      <Grid  style={{ marginTop: "15px" }}>
      <Button
            variant="contained"
            style={{ float: "right", marginTop:'20px' }}
            color="primary"
            type="submit"
            className="button"
          >
            <span className="button-text">Add to</span>
          </Button>
      </Grid>
    </div>
</Grid>
)
};
export default CreateToolboxHeader;