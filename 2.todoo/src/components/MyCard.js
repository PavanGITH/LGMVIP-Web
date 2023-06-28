import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { imageUrl,firstName,lastName,email} = this.props;
    return (
      <div className="my-4 mx-4">
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
         <h5 className="card-title">{firstName} {lastName}</h5>
         <p className="card-text">{email}</p>
        </div>
</div>
      </div>
    )
  }
}
