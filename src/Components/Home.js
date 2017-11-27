import React, { Component } from 'react'
import './styles.css'
class Home extends Component {
    render() {
        return (
            <div>
                <div id="nav">
      <span><a href="#">Members</a></span>
      <span><a href="#">Mission</a></span>
      <span><a class="link-active" href="#">Home</a></span>
      <span><a href="about.html">About</a></span>
      <span><a href="#">Support</a></span>
    </div>

    <video autoplay loop id="video-background" muted plays-inline>
      <source src="./background-video/video.mov" type="video/mp4"/>
    </video>

    <div id="jumbotron">
      <h1 id="jumbotron-header">NASA SUITS</h1>
      <p id="jumbotron-subtext">Welcome to our team's website</p>
      <span>
        <a href="about.html">
          <button type="button" name="button">Learn More <i class="fa fa-space-shuttle" aria-hidden="true"></i> </button>
        </a>
      </span>
    </div>

    <footer>Here's the footer</footer>
            </div>
        )
    }
}
export default Home
