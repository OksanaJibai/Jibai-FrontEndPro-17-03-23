import React, {useRef,useEffect} from "react";
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const MarkdownEditor = ({onContentChange}) =>{

    const editorRef = useRef(null);


    useEffect(() =>{
        const editor = new Editor({
            el: editorRef.current,
            hideModeSwitch: true,
            height: '500px',
            previewStyle: 'vertical'
        });

        editor.on('change', ()=>{
            const content = editor.getMarkdown();
            if(onContentChange){
                onContentChange(content);
            }
        });
    }, [onContentChange]);

    return <div ref={editorRef} />
}


export default MarkdownEditor;
