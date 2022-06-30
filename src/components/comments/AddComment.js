import {useForm} from 'react-hook-form'
import {useAppContext} from "../../context";

const AddComment = ({idCoctail}) => {
    const {register, handleSubmit} = useForm();
    const {saveComments} = useAppContext();
    const submit = (text, e) => {
        e.preventDefault();
        saveComments(parseInt(idCoctail),text.author ,text.text, )
    };
    

    return (
        <fieldset>
            <form onSubmit={handleSubmit(submit)}>
                <div className="form-group">
                    <input {...register('author')} type="text" className="form-control mb-3 mt-3" placeholder="Name" required/>
                    <textarea {...register('text')} className="form-control mb-3" rows="4" cols="50" placeholder="Comment" required/>
                    <button
                        className="register btn btn-primary"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </fieldset>);
}

export default AddComment
