import './CommentsTema.css';
import { ExampleComment } from './CommentsMateria'

const CommentsTema = (props) => {
    return (
        <div className="CommentsTema">
            <h1 className="CommentsTema__title">Comentarios</h1>
            <ExampleComment>
                <ExampleComment />
                <ExampleComment />
            </ExampleComment>
        </div>
    );
};

export default CommentsTema;