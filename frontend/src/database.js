
import axios from 'axios';

import React, { Component } from 'react'
import { NativeModules } from 'react-native';


class Database extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
      address: '',
      pet_type:'',
      pet_age:''
    }
    this.changeName    = this.changeName.bind(this)
    this.changeEmail   = this.changeEmail.bind(this)
    this.changeNum     = this.changeNum.bind(this)
    this.changePass    = this.changePass.bind(this)
    this.changeAddress  = this.changeAddress.bind(this)
    this.changePetType = this.changePetType.bind(this)
    this.changePetAge  = this.changePetAge.bind(this)
    this.onSubmit      = this.onSubmit.bind(this)
  }

  changeName(event){
    this.setState({
      name: event.target.value
    })
  }

  changeEmail(event){
    this.setState({
      email: event.target.value
    })
  }

  changeNum(event){
    this.setState({
      phone: event.target.value
    })
  }

  changePass(event){
    this.setState({
      password: event.target.value
    })
  }

  changeAddress(event){
    this.setState({
      address: event.target.value
    })
  }

  changePetType(event){
    this.setState({
      pet_type: event.target.value
    })
  }

  changePetAge(event){
    this.setState({
      pet_age: event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault();
    const registered = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      address: this.state.address,
     pet_type:this.state.pet_type,
     pet_age: this.state.pet_age
    }
    axios.post('http://localhost:8080/app/signup', registered)
    .then(res => console.log(res.data))

    this.setState({
      name: '',
      email: '',
      phone: '',
      password: '',
      address: '',
      pet_type:'',
      pet_age:''
    })
  }
 
  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <React.Fragment>
        <div>
                <div className='container'>
                <div className="form-div">
                    <h1>Welcome to <span className="petconnect">Pet</span>Connect</h1>
                    <h2>Sign Up</h2>
                    <img style={{
                        position: 'fixed',
                        top:375,
                        left:600,
                        backgroundColor: 'transparent',
                    }}src={'../paws.svg'} alt="paws"/>
                    <img style={{
                        position: 'fixed',
                        top:375,
                        left:1318,
                        backgroundColor: 'transparent',
                    }}src={'../paws.svg'} alt="paws"/>
                    <img style={{
                        position: 'fixed',
                        top:245,
                        left:110,
                        backgroundColor: 'transparent',
                    }}src={'../pawsmir.svg'} alt="paws" />
                    <img style={{
                        position: 'fixed',
                        top:467,
                        left:110,
                        backgroundColor: 'transparent',
                    }}src={'../pawsmir.svg'} alt="paws"/>
                    <img style={{
                        position: 'fixed',
                        top:245,
                        left:827,
                        backgroundColor: 'transparent',
                    }}src={'../pawsmir.svg'} alt="paws"/>
                    <img style={{
                        position: 'fixed',
                        top:467,
                        left:827,
                        backgroundColor: 'transparent',
                    }}src={'../pawsmir.svg'} alt="paws"/>

          <form onSubmit={this.onSubmit}> 
          <input type="text" placeholder="Username" 
           value={this.state.name}
           onChange={this.changeName}
           className='form-control form-group'/>

          <input type="email" name="" id="" placeholder="E-mail"
           value={this.state.email} 
           onChange={this.changeEmail}
           className='form-control form-group' />

          <input type="number" name="" id="" placeholder="ID" 
           value={this.state.phone}
           onChange={this.changeNum}
           className='form-control form-group'/>

          <input type="password" name="" id="" placeholder="Password"
            value={this.state.password} 
           onChange={this.changePass} 
           className='form-control form-group'/>

          <input type="address" name="" id="" placeholder="address"
            value={this.state.address} 
            onChange={this.changeAddress} 
            className='form-control form-group'/>

                        <input type="pet_type" name="" id="" placeholder="Pet type"
                        value={this.state.pet_type} 
                        onChange={this.changePetType} 
                        className='form-control form-group'/>
                        <input type="pet_type" name="" id="" placeholder="Pet Age"
                        value={this.state.pet_age} 
                        onChange={this.changePetAge} 
                        className='form-control form-group'/>

              <input type='submit' className='btn btn-danger btn-block' value='Sign Up' align="middle"/>         
          </form> 
          </div>
                </div>
                </div>
            </React.Fragment>
    );
  }
}


export default Database;