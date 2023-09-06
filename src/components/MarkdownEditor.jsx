import React, {Component} from "react";
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

class MarkdownEditor extends Component{

    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
        this.editor = null
    }
    componentDidMount() {
        const {onContentChange} = this.props;
        this.editor = new Editor({
            el: this.editorRef.current,
            hideModeSwitch: true
        });

        this.editor.addHook('change', () => {
            const content = this.editor.getMarkdown();
            if(onContentChange){
                onContentChange(content);
            }
        });
    };

    render(){
        return <div ref={this.editorRef}/>
    }
}

export default MarkdownEditor;
