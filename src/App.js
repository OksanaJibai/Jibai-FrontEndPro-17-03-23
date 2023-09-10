import React, { useState } from 'react'
import MarkdownEditor from "./components/MarkdownEditor";

function App() {
    const [markdownContent, setMarkdownContent] = useState('');

    const handleContentChange = (content) => {
        setMarkdownContent(content)
    }

  return (
          <div className="container pt-3">
           <MarkdownEditor onContentChange={handleContentChange}/>
          </div>
  );
}

export default App;
