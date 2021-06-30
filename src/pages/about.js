import React from 'react';
import { Link } from 'react-router-dom';
//import BackButton from '../components/Buttons/backbutton';

class List extends React.Component {
    render() {
        return (
          <div className="page-test-item-test">
            <div>
                <p>That is a about page</p>
                <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          
            </div>
            </div>
        );
    }
}

export default List;