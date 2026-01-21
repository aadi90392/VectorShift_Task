import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]); 
  const textareaRef = useRef(null); 

  
  useEffect(() => {
   
    const variableRegex = /{{([a-zA-Z_$][a-zA-Z0-9_$]*)}}/g;
    const matches = [...currText.matchAll(variableRegex)];
    
    
    const variableNames = matches.map(match => match[1]);
    const uniqueNames = [...new Set(variableNames)]; 

   
    const newHandles = uniqueNames.map((name, index) => ({
      type: 'target',
      position: Position.Left,
      id: name,
      
      style: { top: `${index * 30 + 80}px`, background: '#555' } 
    }));

    
    setHandles([
      ...newHandles,
      { type: 'source', position: Position.Right, id: 'output' }
    ]);

  }, [currText]); 
  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    autoResize();
  };

  const autoResize = () => {
    if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'; 
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; 
    }
  };

  
  useEffect(() => {
    autoResize();
  }, []);

  return (
    <BaseNode
      id={id}
      label="Text"
      handles={handles} 
    >
      <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
        <label style={{fontSize: '12px', color: '#666'}}>
          Type {'{{variable}}'} to add handles:
        </label>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          style={{
            width: '100%',
            minHeight: '40px',
            resize: 'none', 
            overflow: 'hidden',
            fontFamily: 'monospace',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '8px',
            fontSize: '14px',
            boxSizing: 'border-box'
          }}
        />
      </div>
    </BaseNode>
  );
} 