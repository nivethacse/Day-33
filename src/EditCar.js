import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { validateForm } from './App';

export function EditCar() {
  // useParams to get id from link of the car
  const { id } = useParams();

  // useState on cars to take care of updation of that variable
  const [car, setCars] = useState(null);

  useEffect(() => {
    fetch(`https://619a40d09022ea0017a7b0a9.mockapi.io/cars/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((v) => setCars(v));
  }, [id]);

  return car ? <UpdateCar car={car} /> : "";
}


function UpdateCar({ car }) {
  // useHistory to change page link(Navigation purpose)
  const history = useHistory();

  // useState on every category of data to take care of updation of that particular variable 
  const [brand, setBrand] = useState(car.brand);
  const [modal, setModal] = useState(car.modal);
  const [description, setDescription] = useState(car.description);
  const [engine, setEngine] = useState(car.engine);
  const [bodystyle, setBodystyle] = useState(car.bodystyle);
  const [classtype, setClasstype] = useState(car.classtype);
  const [price, setPrice] = useState(car.price);
  const [url, setUrl] = useState(car.url);

  // Function to edit car in existing data
  const editCar = () => {
    const updatedCar = {
      brand, modal, description, engine, bodystyle, classtype, price, url
    };

    fetch(`https://619a40d09022ea0017a7b0a9.mockapi.io/cars/${car.id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedCar),
        headers: { "Content-Type": "application/json", },
      }
    ).then(() => history.push("/cars"));
  };

  // useFormik used for validation of the form used to add car
  const formik = useFormik({
    initialValues: { brand: brand, modal: modal, description: description, engine: engine, bodystyle: bodystyle, classtype: classtype, price: price, url: url },
    validate: validateForm,
    onSubmit: (values) => {
      console.log("onSubmit", values);
      editCar();
    }
  });

  return (
    <form className="add-car-form" onSubmit={formik.handleSubmit}>
      <Button onClick={() => history.goBack()}
        variant="oulined"
        style={{ color: "#000", marginRight: "auto" }}
        startIcon={<ArrowBackIcon />}
      >Back
      </Button>
      <Typography gutterBottom variant="h5" component="div" color="#000" sx={{ textAlign: 'center', textTransform: "uppercase" }}>
        Edit Car Info
      </Typography>
      <TextField
        id="name" name="brand" value={formik.values.brand} type="text"
        onChange={(event) => {
          formik.handleChange(event);
          setBrand(event.target.value);
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.brand && formik.touched.brand && formik.errors.brand}
        error={formik.errors.brand && formik.touched.brand && formik.errors.brand !== ""}
        label="Enter Car Brand" variant="outlined" />
      <TextField
        id="name" name="modal" value={formik.values.modal} type="text"
        onChange={(event) => {
          formik.handleChange(event);
          setModal(event.target.value);
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.modal && formik.touched.modal && formik.errors.modal}
        error={formik.errors.modal && formik.touched.modal && formik.errors.modal !== ""}
        label="Enter Modal Name" variant="outlined" />
      <TextField
        id="name" name="description" value={formik.values.description} type="text"
        onChange={(event) => {
          formik.handleChange(event);
          setDescription(event.target.value);
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.description && formik.touched.description && formik.errors.description}
        error={formik.errors.description && formik.touched.description && formik.errors.description !== ""}
        label="Description" variant="outlined" />
      <TextField
        id="name" name="engine" value={formik.values.engine} type="text"
        onChange={(event) => {
          formik.handleChange(event);
          setEngine(event.target.value);
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.engine && formik.touched.engine && formik.errors.engine}
        error={formik.errors.engine && formik.touched.engine && formik.errors.engine !== ""}
        label="Engine Modal" variant="outlined" />
      <TextField
        id="name" name="bodystyle" value={formik.values.bodystyle} type="text"
        onChange={(event) => {
          formik.handleChange(event);
          setBodystyle(event.target.value);
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.bodystyle && formik.touched.bodystyle && formik.errors.bodystyle}
        error={formik.errors.bodystyle && formik.touched.bodystyle && formik.errors.bodystyle !== ""}
        label="Body Style" variant="outlined" />
      <TextField
        id="name" name="classtype" value={formik.values.classtype} type="text"
        onChange={(event) => {
          formik.handleChange(event);
          setClasstype(event.target.value);
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.classtype && formik.touched.classtype && formik.errors.classtype}
        error={formik.errors.classtype && formik.touched.classtype && formik.errors.classtype !== ""}
        label="Class-Type" variant="outlined" />
      <TextField
        id="name" name="price" value={formik.values.price} type="text"
        onChange={(event) => {
          formik.handleChange(event);
          setPrice(event.target.value);
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.price && formik.touched.price && formik.errors.price}
        error={formik.errors.price && formik.touched.price && formik.errors.price !== ""}
        label="Price" variant="outlined" />
      <TextField
        id="name" name="url" value={formik.values.url} type="url"
        onChange={(event) => {
          formik.handleChange(event);
          setUrl(event.target.value);
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.url && formik.touched.url && formik.errors.url}
        error={formik.errors.url && formik.touched.url && formik.errors.url !== ""}
        label="Image URL" variant="outlined" />

      <Button type="submit" variant="contained" style={{ background: "#000" }}>Update</Button>
    </form>
  );
}

