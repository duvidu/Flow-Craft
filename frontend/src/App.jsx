import { useState } from "react";
import InputForm from "./components/InputForm";
import FlowchartRenderer from "./components/FlowchartRenderer";

function App() {
  const [mermaidCode, setMermaidCode] = useState("");

  return (
    <div>
      
      <InputForm setMermaidCode={setMermaidCode} />
      {mermaidCode && <FlowchartRenderer mermaidCode={mermaidCode} />}
    </div>
  );
}

export default App;
