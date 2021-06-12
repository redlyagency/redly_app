import React from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component {
    render() {
        return (
            <div>
                <p>That is a home page</p>
                <ul>
                    <li><Link to="/about">React</Link></li>
                </ul>
                <ul>
                    <li>   <Link to="/">Home</Link></li>
                </ul>
            </div>
        );
    }
}

export default List;