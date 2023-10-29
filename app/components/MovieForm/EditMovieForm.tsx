import { useNavigate, useLocation } from "@remix-run/react";
import './MovieForm.css';
import Dialog from '../Dialog/Dialog';
import MovieForm from './MovieForm';
import type MovieBackendModel from '../../../app/models/MovieBackendModel';
import { updatetMovieByIdAsync } from '../../../app/api/api';

interface EditMovieFormProps {
    movieEditModel?: MovieBackendModel | null
  }

function EditMovieForm({movieEditModel}: EditMovieFormProps) {
    const navigate = useNavigate();
    const { search } = useLocation();

    const handleSaveEdit = (value: MovieBackendModel) => {
        updatetMovieByIdAsync(value);
        navigate(`/${search}`);
    };
    
    const handleClose = () => {
        navigate(`/${search}`);
    };
    
    return (
        <Dialog title={"Edit Movie"} children={(<MovieForm onSubmit = {handleSaveEdit} movieEditModel={movieEditModel}/>)} onClose={handleClose}/>
        );
  }
  
  export default EditMovieForm;