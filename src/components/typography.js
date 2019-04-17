import React, { Component } from 'react';
import '../styles/resetStyle.scss';
import '../styles/global.scss';
import '../styles/typography.scss';

export class Dashboard extends Component {
  render() {
    return (
      <div className="cs-cover">
        <h1>Heading H1</h1>
        <h2>Heading H2</h2>
        <h3>Heading H3</h3>
        <h4>Heading H4</h4>
        <h5>Heading H5</h5>
        <h6>Heading H6</h6>
        <br></br>
        <div className="font-size-XXS">Font Size XXS</div>
        <div className="font-size-XS">Font Size XS</div>
        <div className="font-size-default">Font Size Default</div>
        <div className="font-size-XL">Font Size XL</div>
        <div className="font-size-XXL">Font Size XXL</div>
        <div className="font-size-XXXL">Font Size XXXL</div>
        <div className="font-size-XXXXL">Font Size XXXXL</div>
        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit ligula non velit dictum rutrum. Pellentesque ullamcorper sit amet ante ullamcorper rhoncus. Pellentesque et turpis massa. Nam non velit sit amet velit pretium condimentum. Nunc ullamcorper commodo arcu in tincidunt. Etiam risus leo, ultrices a molestie eu, dignissim non orci.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit ligula non velit dictum rutrum. Pellentesque ullamcorper sit amet ante ullamcorper rhoncus. Pellentesque et turpis massa. Nam non velit sit amet velit pretium condimentum. Nunc ullamcorper commodo arcu in tincidunt. Etiam risus leo, ultrices a molestie eu, dignissim non orci.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit ligula non velit dictum rutrum. Pellentesque ullamcorper sit amet ante ullamcorper rhoncus. Pellentesque et turpis massa. Nam non velit sit amet velit pretium condimentum. Nunc ullamcorper commodo arcu in tincidunt. Etiam risus leo, ultrices a molestie eu, dignissim non orci.</p>
        <br></br>
        <div>
          <a href="#">link</a>
        </div>
        <br></br>
        <span className="fi-span">I am Span</span>
        <ul>
          <li>unordered list</li>
          <li>unordered list</li>
          <li>unordered list</li>
          <li>unordered list</li>
          <li>unordered list</li>
          <li>unordered list</li>
        </ul>
        <ol>
          <li>ordered list</li>
          <li>ordered list</li>
          <li>ordered list</li>
          <li>ordered list</li>
          <li>ordered list</li>
          <li>ordered list</li>
        </ol>
      </div>
    )
  }
}

export default Dashboard
