import React from 'react';
import { connect } from 'react-redux';
import { getAllUserPosts } from '../../actions';
import { CommentsPost } from '../CommentsPost/CommentsPost';
import './UserPosts.css';

export class UserPosts extends React.Component {
  componentDidMount(){
    const id = this.props.match.params.id;
    getAllUserPosts(id)

  }
  render() {
   
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {this.props.userPosts[0].postId}</h4>
        {
          this.props.userPosts && this.props.userPosts.map(post => (
            <div>
              <h5>{post.id}-{post.name}</h5> 
              <p>
                {post.body}
              </p>
              <CommentsPost id={post.id}>
              </CommentsPost>
            </div>
          ))
        }

        
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    getAllUserPosts: (id) => dispatch(getAllUserPosts(id))
  };
}

function mapStateToProps(state) {
  return {
    userPosts: state.userPosts
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPosts);