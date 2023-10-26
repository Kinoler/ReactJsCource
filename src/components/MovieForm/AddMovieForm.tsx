import { useNavigate, useLocation } from 'react-router-dom';
import './MovieForm.css';
import Dialog from '../Dialog/Dialog';
import MovieForm from './MovieForm';
import MovieBackendModel from '../../models/MovieBackendModel';
import { addMovie } from '../../api/api';

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
  };
  
  export default AddMovieForm;