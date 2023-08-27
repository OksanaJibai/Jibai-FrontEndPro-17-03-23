import React, {Component} from "react";
import Button from "./Button";
import Image from "./Image";

class Carousel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentSlide : 0
        }
    }

    onClickNext = () =>{
        this.setState(prevState =>{
            if(prevState.currentSlide !== (this.props.data.length - 1)){
                return {currentSlide: prevState.currentSlide + 1}
            }
            return {currentSlide: 0}
        })
    }

    onClickPrev = () => {
        this.setState(prevState =>{
            if(prevState.currentSlide === 0){
                return {currentSlide: (this.props.data.length - 1)}
            }
            return {currentSlide: (prevState.currentSlide - 1)}
        })
    }
    render(){

        return(
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {this.props.data.map( (item, index) =>{
                        const {id, url, alt} = item;
                        return(
                            <Image key={id} url={url} alt={alt} index={index} current={this.state.currentSlide} />
                        )
                      })
                    }
                </div>

                <Button type='next' text="Next" onClickHandler={this.onClickNext}/>
                <Button type='prev' text="Previous" onClickHandler={this.onClickPrev}/>
            </div>
        )
    }
}
// Carousel.defaultProps = {
//     currentSlide: 0
// }

export default Carousel;
