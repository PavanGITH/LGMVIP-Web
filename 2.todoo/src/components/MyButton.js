import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyCard from './MyCard'

export default class MyButton extends Component {


      static defaultProps = {
        per_page:3
      }
  
      static propTypes = {
        per_page:PropTypes.number
      }

      constructor(){
    
        super();
        console.log("Hello I am a constructor from NewsItem");
        this.state={
          data : this.data,
          loading : false,
          page :1,
          gett:false
        }
      }

      async componentDidMount(){
        console.log("cdm");
        let url = `https://reqres.in/api/users?page=${this.props.page}&per_page=${this.props.per_page}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({data:parsedData.data, total:parsedData.total, loading:false})
    
      }

      handleClick = async ()=>{
        console.log("Get Users");
    
        // let url = `https://reqres.in/api/users?page=${this.state.page-1}&per_page=${this.props.per_page}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({loading:false});
    
        this.setState({
        //   page:this.state.page-1,
        //   data:parsedData.data,
        //   loading:false
        gett:true
        })
      }

      handlePrevClick = async ()=>{
        console.log("Previous");
    
        let url = `https://reqres.in/api/users?page=${this.state.page-1}&per_page=${this.props.per_page}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading:false});
    
        this.setState({
          page:this.state.page-1,
          data:parsedData.data,
          loading:false,
          gett:true
        })
      }

      handleNextClick = async ()=>{
        console.log(this.state.page);
        if(this.state.page+1 > Math.ceil(this.state.total/this.props.per_page)){
    
        }
        else{
        console.log("cdm");
        let url = `https://reqres.in/api/users?page=${this.state.page+1}&per_page=${this.props.per_page}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading:false});
    
        this.setState({
          page:this.state.page+1,
          data:parsedData.data,
          loading:false,
          gett:true
        })
      }
      }



  render() {
    return (
      <div>
        <button type="button" className ="btn btn-primary mx-auto d-flex justify-content-between mt-5" onClick={this.handleClick}>Get Users</button>
        <div className="row">
        {this.state.gett && this.state.data && this.state.data.map((element)=>{
          return <div className="container col md-4">
            <MyCard imageUrl={element.avatar} firstName={element.first_name} lastName={element.last_name} email={element.email}/>
        </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled = {this.state.page+1 > Math.ceil(this.state.total/this.props.per_page)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
