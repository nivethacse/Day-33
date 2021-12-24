import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export function Cars() {
  const history = useHistory();

  const [cars, setCars] = useState([]);
  const getCars = () => {
    fetch("https://619a40d09022ea0017a7b0a9.mockapi.io/cars")
      .then((data) => data.json())
      .then((car) => setCars(car));
  };
  useEffect(getCars, []);

  const deleteCar = (id) => {
    fetch(`https://619a40d09022ea0017a7b0a9.mockapi.io/cars/${id}`, {
      method: "DELETE",
    }).then(() => getCars());
  };

  return (
    <Container maxWidth="lg">
      <div className="v">
        <div className="btn" onClick={() => history.push("/")}>Home</div>
        <div className="btn" onClick={() => history.push("/add-car")}><i className="fas fa-plus" style={{ color: "white" }}></i>Add Car</div>
      </div>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {cars.map(({ id, brand, modal, price, url }) => (
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
                  history.push("/car/" + id);
                }}>see more</button>
                <button className="btnx third" onClick={() => {
                  history.push("/car/edit/" + id);
                }}><i class="fas fa-pen"></i></button>
                <button className="btnx third"
                  onClick={() => {
                    deleteCar(id);
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
