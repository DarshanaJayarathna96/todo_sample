// import React, { Component } from 'react';
// import axios from 'axios';

// export default class EditTodo extends Component {

//     constructor(props) {
//         super(props);
//         this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
//         this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             title: '',
//             completed: 'false'
//         }
//     }

//     componentDidMount() {
//         axios.get('http://localhost:3001/tasks/'+this.props.match.params.id)
//             .then(response => {
//                 this.setState({
//                     title:response.data.title,
//                     completed: response.data.completed
//                 })   
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//     }

//     onChangeTodoDescription(e) {
//         this.setState({
//             title: e.target.value
//         });
//     }


//     onChangeTodoCompleted(e) {
//         this.setState({
//             completed: !this.state.completed
//         });
//     }

//     onSubmit(e) {
//         e.preventDefault();


//         const obj = {
//             title: this.state.title,
//             completed: this.state.completed
//         };
//         console.log(obj);



//         axios.patch('http://localhost:3001/tasks/'+this.props.match.params.id, obj)
//             .then(res => console.log(res.data));
        
//         this.props.history.push('/');
//     }

//     render() {
//         return (
//             <div>
//                 <h3 align="center">Update Todo</h3>
//                 <form onSubmit={this.onSubmit}>

//                 <div className="form-group"> 
//                         <label>Description: </label>
//                         <input  type="text"
//                                 className="form-control"
//                                 value={this.state.title}
//                                 onChange={this.onChangeTodoDescription}
//                                 />
//                     </div>

//                     <div className="form-check">
//                         <input  className="form-check-input"
//                                 id="completedCheckbox"
//                                 type="checkbox"
//                                 name="completedCheckbox"
//                                 onChange={this.onChangeTodoCompleted}
//                                 checked={this.state.completed}
//                                 value={this.state.completed}
//                                 />
//                         <label className="form-check-label" htmlFor="completedCheckbox">
//                             Completed
//                         </label>                        
//                     </div>

//                     <br />

//                     <div className="form-group">
//                         <input type="submit" value="Update Todo" className="btn btn-primary" />
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }