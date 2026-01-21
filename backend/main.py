from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import json
import networkx as nx

app = FastAPI()

# 1. CORS Setup (frontend se connect karne ke liye zaroori hai)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

# 2. Main Logic Endpoint
@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    # Data receive karo
    data = json.loads(pipeline)
    nodes = data['nodes']
    edges = data['edges']
    
    # NetworkX Graph banao
    G = nx.DiGraph()
    
    # Nodes add karo
    for node in nodes:
        G.add_node(node['id'])
        
    # Edges add karo
    for edge in edges:
        G.add_edge(edge['source'], edge['target'])
    
    # Calculate karo
    num_nodes = len(nodes)
    num_edges = len(edges)
    is_dag = nx.is_directed_acyclic_graph(G) # Magic function for DAG check
    
    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}