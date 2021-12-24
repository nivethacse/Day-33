import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useFormik } from "formik";
import { validateForm } from './App';

export function AddMotorBike() {
  // useHistory to change page link(Navigation purpose)
  const history = useHistory();

  // useState on every category of data to take care of updation of that particular variable 
  const [brand, setBrand] = useState("");
  const [modal, setModal] = useState("");
  const [description, setDescription] = useState("");
  const [engine, setEngine] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");

  // Function to add bike to existing data
  const addBike = () => {
    const newBike = {
      brand, modal, description, engine, price, url
    };


    fetch(`https://619a40d09022ea0017a7b0a9.mockapi.io/bikes`, {
      method: "POST",
      body: JSON.stringify(newBike),
      headers: { 'Content-Type': 'application/json' }
    }).then(() => history.push("/motorbikes"));
  };

  // useFormik used for validation of the form used to add bike
  const formik = useFormik({
    initialValues: { brand: "", modal: "", description: "", engine: "", price: "", url: "" },
    validate: validateForm,
    onSubmit: (values) => {
      console.log("onSubmit", values);
      addBike();
    }
  });

  return (
    <form className="add-bike-form" onSubmit={formik.handleSubmit}>
      <Button onClick={() => history.goBack()}
        variant="oulined"
        style={{ color: "#000", marginRight: "auto" }}
        startIcon={<ArrowBackIcon />}
      >Back
      </Button>
      <Typography gutterBottom variant="h5" component="div" color="#000" sx={{ textAlign: 'center', textTransform: "uppercase" }}>
        Add Bike Info
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
        label="Enter Bike Brand" variant="outlined"
      />
      <TextField
        id="name" name="modal" value={formik.values.modal} type="text"
        onChange={(event) => {
          formik.handleChange(event);
          setModal(event.target.value);
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.modal && formik.touched.modal && formik.errors.modal}
        error={formik.errors.modal && formik.touched.modal && formik.errors.modal !== ""}
        label="Enter Modal Name" variant="outlined"
      />
      <TextField
        id="name" name="description" value={formik.values.description} type="text"
        onChange={(event) => {
          formik.handleChange(event);
          setDescription(event.target.value);
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.description && formik.touched.description && formik.errors.description}
        error={formik.errors.description && formik.touched.description && formik.errors.description !== ""}
        label="Description" variant="outlined"
      />
      <TextField
        id="name" name="engine" value={formik.values.engine} type="text"
        onChange={(event) => {
          formik.handleChange(event);
          setEngine(event.target.value);
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.engine && formik.touched.engine && formik.errors.engine}
        error={formik.errors.engine && formik.touched.engine && formik.errors.engine !== ""}
        label="Engine Modal" variant="outlined"
      />
      <TextField
        id="name" name="price" value={formik.values.price} type="text"
        onChange={(event) => {
          formik.handleChange(event);
          setPrice(event.target.value);
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.price && formik.touched.price && formik.errors.price}
        error={formik.errors.price && formik.touched.price && formik.errors.price !== ""}
        label="Price" variant="outlined"
      />
      <TextField
        id="name" name="url" value={formik.values.url} type="url"
        onChange={(event) => {
          formik.handleChange(event);
          setUrl(event.target.value);
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.url && formik.touched.url && formik.errors.url}
        error={formik.errors.url && formik.touched.url && formik.errors.url !== ""}
        label="Image URL" variant="outlined"
      />
      <Button type="submit" variant="contained" style={{ background: "#000" }}>Add</Button>
    </form>
  );
}
