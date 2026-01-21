import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const EmailNode = ({ id, data }) => (
  <BaseNode id={id} label="Send Email" handles={[{ type: 'target', position: Position.Left, id: 'trigger' }]}>
    <div style={{ padding: '5px' }}>To: <input type="text" placeholder="name@email.com" /></div>
  </BaseNode>
);

export const DatabaseNode = ({ id, data }) => (
  <BaseNode id={id} label="Save to DB" handles={[{ type: 'target', position: Position.Left, id: 'data' }]}>
    <div style={{ padding: '5px' }}>Saving... 💾</div>
  </BaseNode>
);


export const FilterNode = ({ id, data }) => (
  <BaseNode id={id} label="Filter" handles={[
      { type: 'target', position: Position.Left, id: 'in' },
      { type: 'source', position: Position.Right, id: 'out' }
  ]}>
    <div style={{ padding: '5px' }}><label><input type="checkbox" /> Only Valid</label></div>
  </BaseNode>
);


export const TimerNode = ({ id, data }) => (
  <BaseNode id={id} label="Wait" handles={[{ type: 'target', position: Position.Left, id: 'start' }, { type: 'source', position: Position.Right, id: 'end' }]}>
    <div style={{ padding: '5px' }}>Delay: 500ms ⏱️</div>
  </BaseNode>
);


export const ApiNode = ({ id, data }) => (
  <BaseNode id={id} label="API Call" handles={[{ type: 'target', position: Position.Left, id: 'req' }, { type: 'source', position: Position.Right, id: 'res' }]}>
    <div style={{ padding: '5px' }}>URL: /api/v1/users</div>
  </BaseNode>
);