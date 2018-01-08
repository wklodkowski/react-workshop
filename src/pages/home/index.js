import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import Post from './components/post';

class Home extends Component {
  render() {
    return (
      <main role="main" class="container">
        <div class="row">
            <Post />
            <Sidebar />
          </div>
    </main>
        )
  }
}
export default Home;