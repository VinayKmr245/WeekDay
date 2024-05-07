import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const JobCard = ({data}) => {
  console.log(data, "data in JobCard")
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data}
        </Typography>
      </CardContent>
      </Card>
  )
}

export default JobCard