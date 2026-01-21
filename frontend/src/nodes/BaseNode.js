import { Handle} from 'reactflow';

export const BaseNode = ({ id, label, children, handles = [] }) => {
  return (
    <div style={{ 
        background: '#fff', 
        border: '1px solid #777', 
        borderRadius: '8px', 
        padding: '10px', 
        minWidth: '200px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }}>
    
      <div style={{ 
          color: '#333', 
          fontWeight: 'bold', 
          marginBottom: '8px', 
          borderBottom: '1px solid #eee', 
          paddingBottom: '4px' 
      }}>
        {label}
      </div>

    
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {children}
      </div>

    
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
    </div>
  );
};