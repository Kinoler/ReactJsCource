import { useNavigate, useLocation } from "@remix-run/react";
import './MovieForm.css';
import Dialog from '../Dialog/Dialog';
import MovieForm from './MovieForm';
import type MovieBackendModel from '../../../app/models/MovieBackendModel';
import { addMovie } from '../../../app/api/api';

function AddMovieForm() {
    const navigate = useNavigate();
    const { search } = useLocation();

    const handleAdd = async (value: MovieBackendModel) => {
        var addedMovie = await addMovie(value);
        if(addedMovie)
            navigate(`/${addedMovie?.id}${search}`);
    };
    
    const handleClose = () => {
        navigate(`/${search}`);
    };
    
    return (
        <Dialog title={"Add Movie"} children={(<MovieForm onSubmit = {handleAdd}/>)} onClose={handleClose}/>
    );
  }
  
  export default AddMovieForm;