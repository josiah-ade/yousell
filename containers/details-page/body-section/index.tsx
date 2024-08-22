import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import Main from "./BodyComponents/main";
import Sidebar from "./BodyComponents/sidebar";

function BodySection({data}: {data: any}) {
  return (
    <div className='details__page__body__div'>
        <Grid container spacing={2} className='details__page__body__grid'>
            <Grid xs={12} sm={12} md={9} lg={8}>
                <Main data={data}/>
            </Grid>
            <Grid xs={12} sm={12} md={3} lg={4}>
              <Sidebar data={data}/>
            </Grid>
        </Grid>
    </div>
  )
}

export default BodySection