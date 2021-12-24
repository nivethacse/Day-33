import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export function MotorBikes() {
  const history = useHistory();

  const [bikes, setBikes] = useState([]);
  const getBikes = () => {
    fetch("https://619a40d09022ea0017a7b0a9.mockapi.io/bikes")
      .then((data) => data.json())
      .then((car) => setBikes(car));
  };
  useEffect(getBikes, []);

  const deleteBike = (id) => {
    fetch(`https://619a40d09022ea0017a7b0a9.mockapi.io/bikes/${id}`, {
      method: "DELETE",
    }).then(() => getBikes());
  };

  return (
    <Container maxWidth="lg">
      <div className="v">
        <div className="btn" onClick={() => history.push("/")}>Home</div>
        <div className="btn" onClick={() => history.push("/add-motorbike")}><i className="fas fa-plus" style={{ color: "white" }}></i>Add Bike</div>
      </div>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {bikes.map(({ id, brand, modal, price, url }) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 350 }} className="car-card">
              <CardMedia
                component="img"
                alt={brand + " " + modal}
                height="220"
                image={url}
                className="vechile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="#66fcf1" sx={{ textAlign: 'center', textShadow: "0px 0px 5px rgba(102,252,241,0.8)" }}>
                  {brand} {modal}
                </Typography>
                <Typography variant="body2" color="#66fcf1" sx={{ fontSize: "1.1rem" }}>
                  <span className="tag">Price: </span>{price}
                </Typography>
              </CardContent>
              <CardActions>
                <button className="btnx third" onClick={() => {
                  history.push("/motorbike/" + id);
                }}>see more</button>
                <button className="btnx third" onClick={() => {
                  history.push("/motorbike/edit/" + id);
                }}><i class="fas fa-pen"></i></button>
                <button className="btnx third"
                  onClick={() => {
                    deleteBike(id);
                  }}
                ><i class="fas fa-trash"></i>
                </button>

              </CardActions>
            </Card>
          </Grid>
        ))}


      </Grid>
    </Container>
  );
}
