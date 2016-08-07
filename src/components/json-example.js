import React from 'react';
import request from 'superagent';

class JsonExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newName: '',
            names: []
        };
    }

    getNames() {
        request
            .get('http://localhost:3300/names')
            .end((err, res) => {
                if(err) {
                    console.error(err);
                    alert(err.message);
                } else {
                    this.setState(Object.assign({}, this.state, {
                        names: JSON.parse(res.text)
                    }));
                }
            });
    }

    componentDidMount() {
        this.getNames();
    }

    onSubmit(e) {
        e.preventDefault();

        const { newName } = this.state;

        request
            .post('http://localhost:3300/names')
            .send({
                name: newName
            })
            .end(err => {
                if(err) {
                    console.error(err);
                    alert(err.message);
                } else {
                    this.getNames();
                    this.setState(Object.assign({}, this.state, {
                        newName: ''
                    }));
                }
            });
    }

    inputChanged(e) {
        e.preventDefault();
        const name = e.target.value;
        this.setState(Object.assign({}, this.state, {
            newName: name
        }));
    }

    render() {

        const { newName, names } = this.state;

        const nameList = names.map(n => {
            return (
                <li key={n._id}>{n.name}</li>
            );
        });

        return (
            <div>
                <div className="page-header">
                    <h1>JSON API Example</h1>
                </div>
                <ul>{nameList}</ul>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group row">
                        <div className="col-sm-6">
                            <input type="text" className="form-control" value={newName} placeholder="Enter a new name" onChange={this.inputChanged.bind(this)} required={true}></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Add New Name</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default JsonExample;
