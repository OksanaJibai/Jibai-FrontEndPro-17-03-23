import MarkdownEditor from "./components/MarkdownEditor";
import {Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            markdownContent : "",
        };
    }

    handleContentChange = (content) =>{
        this.setState({markdownContent : content});
    }
    render(){
        const {markdownContent} = this.state;
        return (
            <div>
                <MarkdownEditor onContentChange={this.handleContentChange} />
                <div dangerouslySetInnerHTML={{__html: markdownContent}}/>
            </div>
        );
    }
}

export default App;
