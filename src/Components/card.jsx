

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MainCard = ({ title, imgsrc,Name }) => {
  return (
    <Card sx={{ maxWidth: 345 ,margin:"10px"}}>
    <CardMedia
      sx={{ height: 140 }}
      image={imgsrc}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {Name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {title}
      </Typography>
    </CardContent>
  </Card>
  );
};

  
  export default MainCard;