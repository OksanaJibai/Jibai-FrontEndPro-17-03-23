import {Component} from "react";

class ListGroup extends Component{
    renderList(){
        const {data} = this.props;
        return  data.map(item =><li className="list-group-item" key={item.id}>{item.name}</li>);
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        );
    }
}

export default ListGroup;
