import {Component} from 'react';


class Image extends Component{
    render(){
        const {index, url, alt, current} = this.props;

        return (<div className={index === current ? "carousel-item active" : "carousel-item"}>
                   <img alt={alt} className="d-block w-100 vh-100" src={url} />
                </div>
        )
    }
}

export default Image;