import React, {useState, useEffect} from "react";
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const MarkdownEditor = ({onContentChange}) =>{

    const editorRef = React.createRef();
    const [editor, setEditor] = useState(null);


    useEffect(() =>{
        if(!editor){
            const editor = new Editor({
                el: editorRef.current,
                hideModeSwitch: true,
                height: '500px',
                previewStyle: 'vertical'
            });
            setEditor(editor);

            editor.addHook('change', ()=>{
                const content = editor.getMarkdown();
                if(onContentChange){
                    onContentChange(content);
                }
            });
        }
    },[ onContentChange, editor, editorRef ]);

    return <div ref={editorRef} />
}


export default MarkdownEditor;
