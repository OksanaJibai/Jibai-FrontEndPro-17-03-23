
const Item = ({task, onRemove}) =>{
    return(
        <div>
            <div className="row">
                <div className="col-auto">
                    <p>{task.text}</p>
                    <button type="button"
                            className="btn btn-primary btn-sm"
                            onClick={onRemove}>Remove task</button>
                </div>
            </div>
            <hr/>
        </div>
    )
}
export default Item;