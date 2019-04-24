import React, { Component } from 'react';
import '../styles/resetStyle.scss';
import '../styles/global.scss';
import '../styles/simple-grid.scss';
import '../styles/footer.scss';

export class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="cs_footer">
                    <div className="row">
                        <div className="col-4">
                            <div className="footermenu">
                                <h3>Datatruks</h3>
                                <ul>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="footermail">
                                <a href="#" >contact@dataturks.com</a>
                            </div>

                        </div>
                        <div className="col-4">
                            <div className="footercontact">
                                <ul >
                                    <li>(+91) 080-331-72755,</li>
                                    <li>+91-99010-49915,</li>
                                    <li>+91-88614-08222</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer
