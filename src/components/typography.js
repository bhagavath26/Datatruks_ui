import React, { Component } from 'react';
import '../styles/global.scss';
import '../styles/typography.scss';

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <span className="fi-span">1234567890</span>
        <div className="cover">
          <h1>Heading H1</h1>
          <h2>Heading H2</h2>
          <h3>Heading H3</h3>
          <h4>Heading H4</h4>
          <h5>Heading H5</h5>
          <h6>Heading H6</h6>
          <br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit ligula non velit dictum rutrum. Pellentesque ullamcorper sit amet ante ullamcorper rhoncus. Pellentesque et turpis massa. Nam non velit sit amet velit pretium condimentum. Nunc ullamcorper commodo arcu in tincidunt. Etiam risus leo, ultrices a molestie eu, dignissim non orci.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit ligula non velit dictum rutrum. Pellentesque ullamcorper sit amet ante ullamcorper rhoncus. Pellentesque et turpis massa. Nam non velit sit amet velit pretium condimentum. Nunc ullamcorper commodo arcu in tincidunt. Etiam risus leo, ultrices a molestie eu, dignissim non orci.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit ligula non velit dictum rutrum. Pellentesque ullamcorper sit amet ante ullamcorper rhoncus. Pellentesque et turpis massa. Nam non velit sit amet velit pretium condimentum. Nunc ullamcorper commodo arcu in tincidunt. Etiam risus leo, ultrices a molestie eu, dignissim non orci.</p>
        </div>
      </div>
    )
  }
}

export default Dashboard
