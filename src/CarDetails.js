import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TabIcon from '@mui/icons-material/Tab';
import wiki from "./wiki.svg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Carousel } from 'react-carousel-minimal';

export function CarDetails() {
  // useHistory to change page link(Navigation purpose)
  const history = useHistory();

  // useParams to get id from link of the user
  const { id } = useParams();

  const [car, setCars] = useState({});
  useEffect(() => {
    fetch(`https://619a40d09022ea0017a7b0a9.mockapi.io/cars/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((v) => setCars(v));
  }, [id]);


// data of image url for carousel purpose
  const data = [
    {
      "image": "https://nova-ott-images-tn.ssl.cdn.cra.cz/r991x558n/3871d232-12cf-4c92-88b8-72503d57c49b"
    },
    {
      "image": "https://www.unilad.co.uk/wp-content/uploads/2019/09/bugatti-300.jpg"
    },
    {
      "image": "http://www.autoclassmagazine.com/web/wp-content/uploads/2019/09/Bugatti-Chiron-Speed-record-2-Auto-Class-Magazine.jpg"
    },
    {
      "image": "https://img.auto.cz/foto/bugatti-chiron-bugatti-chiron/NjkweDQyNS9jZW50ZXIvbWlkZGxlL3NtYXJ0L2ZpbHRlcnM6cXVhbGl0eSg4NSkvaW1n/5899021.jpg?v=0&st=NZArOnDfxwIzO8DiXl_htxSoQD9G5CfN3Vs6926s4lI&ts=1600812000&e=0"
    },
    {
      "image": "https://i0.wp.com/www.thesupercarblog.com/wp-content/uploads/2019/09/Bugatti-Chiron-Super-Sport-300-Plus-3.jpg?ssl=1"
    },
    {
      "image": "https://media.evo.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1632411617/evo/2021/09/Bugatti%20Chiron%20Super%20Sport%20300%20deliveries-3.jpg"
    },
    {
      "image": "https://cdn.24htech.asia/wp-content/uploads/2021/11/19192013/image-bugatti-chiron-163729921335202.jpg"
    },
    {
      "image": "https://i1.wp.com/images.financialexpress.com/2017/09/Bugatti-Chiron-large.jpg"
    }
  ];


  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };

  ///
  return (
    <Container maxWidth="md" sx={{ background: "#505962", width: "100vw" }} className="detail-container">
      <Button onClick={() => history.goBack()}
        variant="oulined"
        style={{ color: "#66fcf1" }}
        startIcon={<ArrowBackIcon />}
      >Back
      </Button>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography gutterBottom variant="body2" color="#66fcf1" sx={{ fontSize: "2rem", textShadow: "0px 0px 8px rgba(102,252,241,0.8)" }}>
              {car.brand} {car.modal}
            </Typography>
            <Typography gutterBottom variant="body2" color="#66fcf1">
              {car.description}
            </Typography>
            <Typography gutterBottom variant="body2" color="#66fcf1">
              <span className="tag">Engine: </span>{car.engine}
            </Typography>
            <Typography gutterBottom variant="body2" color="#66fcf1">
              <span className="tag">Body Style: </span>{car.bodystyle}
            </Typography>
            <Typography gutterBottom variant="body2" color="#66fcf1">
              <span className="tag">Class Type: </span>{car.classtype}
            </Typography>
            <Typography variant="body2" color="#66fcf1">
              <span className="tag">Price: </span>{car.price}
            </Typography>
            <Typography variant="body2" color="#66fcf1">
              <span className="tag">Official Website: </span>
              <IconButton
                onClick={() => window.location.href = 'https://www.bugatti.com/models/chiron-models/chiron-super-sport/'}
                className="edit-button"
                color="primary"
                aria-label="hide"
                cursor="pointer"
              >
                <TabIcon style={{ fill: "#66fcf1" }} />
              </IconButton>
            </Typography>
            <Typography variant="body2" color="#66fcf1">
              <span className="tag">More Info: </span>
              <IconButton
                onClick={() => window.location.href = car.wiki}
                className="wiki"
                color="primary"
                aria-label="hide"
                cursor="pointer"
              >
                <img src={wiki} alt="wiki" style={{ width: "3rem", background: "white", borderRadius: "26px" }} />
              </IconButton>
            </Typography>


          </CardContent>

        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 550 }} className="con">
            <CardMedia
              className="imgg"
              component="img"
              alt={car.brand + " " + car.modal}
              height="auto"
              image={car.url} />
          </Card>
        </Grid>

      </Grid>

      <div style={{ textAlign: "center" }}>

        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }} />
        </div>
      </div>

    </Container>
  );
}
