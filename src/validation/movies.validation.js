import * as Yup from 'yup';

const MoviesSchema = Yup.object().shape({
    title: Yup.string().required("Filmin adini daxil et"),
    posterImg: Yup.string().url('URL olmalidir').required("Filmin Seklini daxil edin"),
    genre: Yup.string().required('Film haqqinda melumat daxil edin'),
    releaseYear: Yup.number().min(1).required('Filmin Ilini daxil edin').positive().integer(),
})
export default MoviesSchema
  // await postMovies(newMovie);