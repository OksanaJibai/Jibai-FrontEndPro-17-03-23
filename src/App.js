import React, { useState } from 'react'
import MarkdownEditor from "./components/MarkdownEditor";

const App = () =>{
    const [markdownContent, setMarkdownContent] = useState("");

    const handleContentChange = (content) => {
        return setMarkdownContent(content)
    }

  return (
          <div className="container pt-3">
           <MarkdownEditor onContentChange={handleContentChange}/>
              <div dangerouslySetInnerHTML={{__html : markdownContent}}/>
          </div>
  );
}

export default App;