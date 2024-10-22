import React from "react";
import Editor from "@monaco-editor/react";

/* code editor interface */
export default function CodeInterface({text="no pseudocode available"}) {

    return (
        <div>
            <Editor
                height="40vh"
                width="full"
                theme="vs-dark"
                defaultLanguage="python"
                defaultValue={text}
            />
            
        </div>
    )
}