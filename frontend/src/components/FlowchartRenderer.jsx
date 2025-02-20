import { useEffect } from "react";
import mermaid from "mermaid";

const FlowchartRenderer = ({ mermaidCode }) => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, [mermaidCode]);

  return (
    <div>
      <h2>Generated Flowchart</h2>
      <pre className="mermaid">{mermaidCode}</pre>
    </div>
  );
};

export default FlowchartRenderer;
