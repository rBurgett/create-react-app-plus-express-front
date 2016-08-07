import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="page-title">My React App</h1>
                </div>
                <nav>
                    <div className="nav-container">
                        <IndexLink to="/" activeClassName="active">
                            <div>Home</div>
                        </IndexLink>
                        <Link to="json-example" activeClassName="active">
                            <div>JSON Example</div>
                        </Link>
                        <Link to="socket-example" activeClassName="active">
                            <div>Socket Example</div>
                        </Link>
                    </div>
                </nav>
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
