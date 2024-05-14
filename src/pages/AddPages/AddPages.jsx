import { useState } from "react";
import { Input, Button } from "antd";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import MoviesSchema from "../../validation/movies.validation";
import Swal from "sweetalert2";
import { usePostMoviesMutation  } from "../../services/moviesQuerySlice";

const AddPage = () => {
  const [postMovies] = usePostMoviesMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      posterImg: "",
      genre: "",
      releaseYear: "",
    },
    onSubmit: async (values) => {
      try {
        await postMovies({
          title: values.title,
          posterImg: values.posterImg,
          genre: values.genre,
          releaseYear: values.releaseYear,
        });
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => navigate("/"));
      } catch (error) {
        console.error("Error adding movie:", error);
      }

      formik.resetForm();
    },
    validationSchema: MoviesSchema,
  });

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "55px" }}>Add New Movies</h1>
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "50%", margin: "20px auto" }}
      >
        <Input
          style={{ marginBottom: "10px" }}
          placeholder="Title"
          type="text"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title && (
          <span style={{ color: "red" }}>{formik.errors.title}</span>
        )}

        <Input
          style={{ marginBottom: "10px" }}
          placeholder="Poster Img"
          type="text"
          name="posterImg"
          onChange={formik.handleChange}
          value={formik.values.posterImg}
        />
        {formik.errors.posterImg && (
          <span style={{ color: "red" }}>{formik.errors.posterImg}</span>
        )}

        <Input
          style={{ marginBottom: "10px" }}
          placeholder="Genre"
          type="text"
          name="genre"
          onChange={formik.handleChange}
          value={formik.values.genre}
        />
        {formik.errors.genre && (
          <span style={{ color: "red" }}>{formik.errors.genre}</span>
        )}

        <Input
          style={{ marginBottom: "10px" }}
          placeholder="Release Year"
          type="number"
          name="releaseYear"
          onChange={formik.handleChange}
          value={formik.values.releaseYear}
        />
        {formik.errors.releaseYear && (
          <span style={{ color: "red" }}>{formik.errors.releaseYear}</span>
        )}

        <Button type="primary" htmlType="submit">
          Add Movies
        </Button>
      </form>
    </>
  );
};

export default AddPage;
