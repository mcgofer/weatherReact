import React from 'react';
import CommentsListBox from './CommentsListBox';
import CommentForm from './CommentForm';

class WeatherBox extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitCommentForm = this.onSubmitCommentForm.bind(this);        
        this.state = {
            comments: []
        }
    }

    onSubmitCommentForm(data) {
        this.setState(prevState => ({
            comments: prevState
                .comments
                .concat(data)
        }), function () {
            console.log(this.state);
        });
    };

    render() {
        return (
            <div>
                <div>
                    <span className="glyphicon glyphicon-trash pull-right"></span>
                    <div className="media-left">
                        <img src={this.props.item.icon} alt={this.props.item.name} className="media-object" style={{ width: 60 }} /></div>
                    <div className="media-body">
                        <h4 className="media-heading">{this.props.item.name}</h4>
                        <p>{this.props.item.text}- {this.props.item.feelslike_c} &nbsp;| C</p>
                    </div>
                </div>
                <CommentForm onSubmitCommentForm={this.onSubmitCommentForm}/>
                <CommentsListBox comments={this.state.comments} />
                <hr />
            </div>
        )
    }
}

export default WeatherBox;