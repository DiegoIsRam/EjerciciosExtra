import React from 'react';
import { connect } from 'react-redux';
import { getAllCommentsPosts } from '../../actions/index';

import './CommentsPost.css';

export class CommentsPost extends React.Component {
    
     componentDidMount() {
        const id = this.props.id
         this.props.getAllCommentsPost(id)
        .then(c =>{
          console.log("Comentarios cargados con éxito...")
        })
        .catch(err =>console.error(err))
    }

    render() {
        const idPost = this.props.id
        return (
            <div className="details">
                <h4>Comentarios del Post {idPost}</h4>
                {!this.props.commentsPost ? console.log("Espero ...") : 
                this.props.commentsPost.map((comment) => (
                  <div className= "container">
                    <p key ={comment.id}> 
                    <h4>{comment.id} - {comment.name}</h4> 
                    {comment.body}
                    </p>
                  </div>
              )
             )}
            </div>
        )
    }
}

export function mapStateToProps(state) {
  return {
    commentsPost: state.commentsPost,
  };
}

export function mapDispatchToProps(dispatch) {
    return {
        getAllCommentsPost: (id) => dispatch(getAllCommentsPosts(id))
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommentsPost );