import React , { Component } from 'react';
import {  Link } from 'react-router-dom';
import './Home.css';
import Modal from './Modal';
import  { Children } from 'react';
import ReactDOM from 'react-dom/client';


 class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal : false,
      user: null,
      error: null
    }
  }
  componentDidMount() {
    fetch('https://api.github.com/users/codeNinja')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching user data from GitHub API');
        }
        return response.json();
      })
      .then(user => {
        this.setState({ user });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  
  openModal = () => {
    this.setState({showModal : true})
  }

  closeModal = () => {
    this.setState({showModal : false})
  }

  
render() {
  const { user} = this.state;

    

  const { showModal } = this.state;
      let modalContent = null;

      if(showModal) {
        modalContent = (
        <Modal children={modalContent}>
          <h2>GitHub User</h2>
        <p>Username: {user.login}</p>
        <p>Name: {user.name}</p>
        <p>AvatarURL: {user.avatar_url}</p>
        <img src={user.avatar_url} height={250} width={250} />
        <p>Location: {user.location}</p>
        <p>Public Repositories: {user.public_repos}</p>
        <p>Type: {user.type}</p>
          <button onClick={this.closeModal}>Close Modal</button>
        </Modal>
        )
      }
  
  return (
        <div>
        <header>
            <div className='logo'><img src="logo512.png" width={50} height={50} /> React Design</div>
            <div className='login-menu'>
                <div><Link className='login-item' to="/contact">Contact</Link></div>
                <div><Link className='login-item' to="/about">About</Link></div>
                <div><Link className='login-item' to="/login">Login</Link></div>
            </div>
        </header>
        <main class="container">
      <div class="box"><button onClick={this.openModal}>CodeNinja</button>
          {modalContent}</div>
      <div class="box"><button onClick={this.openModal}>Mojombo</button>
          {modalContent}</div>
      <div class="box"> Pjhyett</div>
      <div class="box">Wycats</div>
      <div class="box">Ezmobius</div>
      <div class="box">lvey</div>
    </main>
        <footer className='footer'>
            <div>
                <h4>@copywrite M.Sc C.A. Batch 2023</h4>
            </div>
        </footer>
        </div>
  )

}

}

export default Home;
    