import {Component} from "react";


class Table extends Component{
    render(){
        const sortedData = Object.entries(this.props.data).sort();
        return(
            <div className="mt-3">
                <button type="button" className="btn btn-primary" onClick={this.props.handleBackBtn}>Back</button>
                <table className="table">
                    <tbody>
                    {sortedData.map(element => {
                        return (<tr key={element[0]}>
                            <td>{element[0]}</td>
                            <td>{element[1]}</td>
                        </tr>)
                    })}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;