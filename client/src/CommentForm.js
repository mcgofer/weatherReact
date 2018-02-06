import React, { Component } from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitComment = this.submitComment.bind(this);
        this.state = {
            name: '',
            text: ''
        }
    }

    submitComment(event) {
        // var commentStructure = {
        //     name: this.state.name,
        //     text: this.state.comment
        // };

        var commentStructure = this.state;

        event.preventDefault();//<== will prevent the original code from taking place (Submit/CLick etc)
        this.props.onSubmitCommentForm(commentStructure);
    };

    render() {
        return (
            <div>
                <form action="#" id="addCommentForm" onSubmit={this.submitComment}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Name"
                            required
                            value={this.state.name}
                            onChange={(event) => this.setState({ name: event.target.value },function(){
                                console.log('the state has been changed by the onchange')
                                console.log(this.state)
                            })} 
                            />
                        <input
                            type="text"
                            className="form-control"
                            id="comment-input"
                            placeholder="Enter Comment"
                            required
                            value={this.state.comment}
                            onChange={(event) => this.setState({ text: event.target.value },function(){
                                console.log('the state has been changed by the onchange')
                                console.log(this.state)
                            })} 
                            />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="submit">Submit</button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}

export default CommentForm;