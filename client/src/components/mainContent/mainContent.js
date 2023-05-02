import React from 'react';
import Grid from '@mui/material/Grid';
import Stories from '../home/stories/stories';


const MainContent = () => {
  return (
    <div>
        <Grid container>
            
            <Grid xs={2} >
                SideBar
            </Grid>
            <Grid xs={1}>
                empty
            </Grid>
            <Grid xs={5} >
                <Stories/>
                main Page - post feeds
            </Grid>
            <Grid xs={3}>
                def
            </Grid>
            <Grid xs={1}>
                ghi
            </Grid>

        </Grid>
      
    </div>
  )
}

export default MainContent;
