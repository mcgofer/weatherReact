import React from 'react';

class CommentBox extends React.Component {
  render() {
    return (
        <div>
          <span className="glyphicon glyphicon-trash pull-right"></span>
          <div className="media-left">
          <div className="media-body">
            <p>Written by: {this.props.item.name}- {this.props.item.text}</p>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default CommentBox;