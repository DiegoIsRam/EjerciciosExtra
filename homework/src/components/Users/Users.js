import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions/index';
import './Users.css';

export class Users extends Component {
  
  render() {
    console.log(this.props.users)
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        {/* Aqui deberias poner tu lista de usuarios! */}

        <table>
          <thead>
            <tr className="header">
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users && this.props.users.map(user =>{ return ( 
              <tr>
                <td>
                  {user.name}
                </td>
                <td>
                  {user.username}
                </td>

                <td>
                  <Link to={`/users/${user.id}/posts`} className="button">Posts</Link>
                </td>
              </tr>

            )})
            }
          </tbody>
        </table>
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: () => dispatch(getAllUsers())
  };
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)



