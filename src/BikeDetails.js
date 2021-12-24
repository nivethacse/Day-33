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

export function BikeDetails() {
  // useHistory to change page link(Navigation purpose)
  const history = useHistory();

  // useParams to get id from link of the user
  const { id } = useParams();

  const [bike, setBikes] = useState({});
  useEffect(() => {
    fetch(`https://619a40d09022ea0017a7b0a9.mockapi.io/bikes/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((v) => setBikes(v));
  }, [id]);


  // data of image url for carousel purpose
  const data = [
    {
      "image": "https://www.commoncentsmom.com/wp-content/uploads/2020/03/expensive-motorcycle.jpeg"
    },
    {
      "image": "https://thumbor.forbes.com/thumbor/fit-in/655x491/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbes.com%2Fimageserve%2F564116f8e4b0ffa7afe6f533%2F0x0.jpg%3Ffit%3Dscale%26background%3D000000"
    },
    {
      "image": "https://data1.ibtimes.co.in/en/full/543108/harley-davidson-breakout.jpg"
    },
    {
      "image": "https://www.motorbeam.com/wp-content/uploads/2015-Kawasaki-Ninja-H2R-Wallpaper-1200x900.jpg"
    },
    {
      "image": "https://assets.newatlas.com/dims4/default/44598bb/2147483647/strip/true/crop/2588x1403+0+0/resize/1440x781!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Febay-tron-lightcycle.jpeg"
    },
    {
      "image": "https://cdn.hiconsumption.com/wp-content/uploads/2013/03/R135-Wraith-Combat-by-Confederate-Motorcycles-0.jpg"
    },
    {
      "image": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2020/04/08155132/Vyrus-Alyen-988-6.jpg"
    },
    {
      "image": "https://ca-times.brightspotcdn.com/dims4/default/f9ab538/2147483647/strip/true/crop/500x333+0+0/resize/840x559!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2a%2Fa5%2F5a0f74484224e6674577e72b15d0%2Flat-throttle-k1amn4nc20080527132357"
    },
    {
      "image": "https://i.pinimg.com/736x/2e/65/09/2e65092c66e479001bdad685e475a8b3.jpg"
    }
  ];


  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };

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
              {bike.brand} {bike.modal}
            </Typography>
            <Typography gutterBottom variant="body2" color="#66fcf1">
              {bike.description}
            </Typography>
            <Typography gutterBottom variant="body2" color="#66fcf1">
              <span className="tag">Engine: </span>{bike.engine}
            </Typography>
            <Typography variant="body2" color="#66fcf1">
              <span className="tag">Price: </span>{bike.price}
            </Typography>
            <Typography variant="body2" color="#66fcf1">
              <span className="tag">Official Website: </span>
              <IconButton
                onClick={() => window.location.href = bike.website}
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
                onClick={() => window.location.href = bike.wiki}
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
              alt={bike.brand + " " + bike.modal}
              height="auto"
              image={bike.url} />
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
