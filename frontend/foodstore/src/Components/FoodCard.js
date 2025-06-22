import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

class FoodCard extends React.Component{
    
    constructor()
    {
        super();
    }

    render(){
        return (
            <div>
                 <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                       <CardMedia
                         component="img"
                         height="290"
                         image={`./assets/${this.props.name}.jpg`}
                         alt="green iguana"
                         sx={{objectFit:"fill"}}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                         {this.props.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                             {this.props.description}
                        </Typography>
                        </CardContent>
                        </CardActionArea>
                          <CardActions>
                               <Button size="small">Learn More</Button>
                         </CardActions>
                    </Card>
            </div>
        )
    }
}

export default  FoodCard;