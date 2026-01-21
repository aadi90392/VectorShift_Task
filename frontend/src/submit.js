// submit.js
import { useStore } from './store'; // Store se data lene ke liye

export const SubmitButton = () => {
    // Store se nodes aur edges nikalo
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }));

    const handleSubmit = async () => {
        try {
            // Data prepare karo
            const payload = { nodes, edges };
            
            // Backend ko bhejo (Form Data format mein kyunki backend Form expect kar raha hai)
            const formData = new FormData();
            formData.append("pipeline", JSON.stringify(payload));

            const response = await fetch("http://localhost:8000/pipelines/parse", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            // Alert dikhao
            alert(`
                Summary:
                Nodes: ${data.num_nodes}
                Edges: ${data.num_edges}
                Is DAG: ${data.is_dag ? "Yes" : "No"}
            `);

        } catch (error) {
            console.error("Error submitting pipeline:", error);
            alert("Error: Backend se connect nahi ho pa raha via Localhost:8000");
        }
    };

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px'}}>
            <button 
                type="submit" 
                onClick={handleSubmit}
                style={{
                    padding: '10px 20px',
                    borderRadius: '5px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }}
            >
                Submit Pipeline
            </button>
        </div>
    );
}