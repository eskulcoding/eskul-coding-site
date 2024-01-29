import { CodeBlock, atomOneDark } from "react-code-blocks";

function CodeBlockComponent({ code, language, showLineNumber }) {
    return (
        <div className="relative bg-[#282C34] pt-6 pl-5 pr-10">
            <div className="flex items-center space-x-2 absolute top-5 left-5 z-10">
                <div className="w-4 h-4 rounded-full bg-red-600"/>
                <div className="w-4 h-4 rounded-full bg-yellow-400"/>
                <div className="w-4 h-4 rounded-full bg-green-500"/>
            </div>
            <CodeBlock
                text={code}
                language={language}
                showLineNumbers={showLineNumber}
                theme={atomOneDark}
            />
        </div>
    )
}

export default CodeBlockComponent;