import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

interface ShopItemCardProps {
  title: string;
  imagePath: string;
  creator: string;
  price: number;
}

const ShopItemCard = ({
  title,
  imagePath,
  creator,
  price,
}: ShopItemCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={imagePath} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {creator} | $ {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ShopItemCard;
