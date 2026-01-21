// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                
                {/* 5 New Nodes for Abstraction Demo */}
                <DraggableNode type='email' label='Email' />
                <DraggableNode type='database' label='DB' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='timer' label='Timer' />
                <DraggableNode type='api' label='API' />
            </div>
        </div>
    );
};