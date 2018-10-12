// Breadth First Search or BFS for a Graph
// Breadth First Traversal (or Search) for a graph is similar to Breadth First Traversal of 
// a tree (See method 2 of this post). The only catch here is, unlike trees, graphs may contain 
// cycles, so we may come to the same node again. To avoid processing a node more than once, 
// we use a boolean visited array. For simplicity, it is assumed that all vertices are reachable from the starting vertex.
// For example, in the following graph, we start traversal from vertex 2. When we come to vertex 0, 
// we look for all adjacent vertices of it. 2 is also an adjacent vertex of 0. If we don’t mark visited vertices, 
// then 2 will be processed again and it will become a non-terminating process. A Breadth First Traversal of the 
// following graph is 2, 0, 3, 1.


// gonna try implementing a graph as an adjacency list, this will be for a directed graph

class Graph {
  constructor() {
    this.vertices  = {};
  }


  addVertex(v) {
    this.map[v] = [];
  }
  addEdge(to, from) {
    if (this.map[to]) {
      this.addVertex(to);
    }

    if (this.map[from]) {
      this.addVertex(from);
    }

    this.map[from].push(to);
  }

  getAdj(v) {
    if (this.vertices[v]) return this.vertices[v];
    return null;
  }

  get vertices() {
    return Object.keys(this.vertices);
  }
}






function bfs(graph, vertex) {
  let visited = new Array(graph.vertices.length);
  visited.fill(false);

  const queue = [vertex];

  while (queue.length > 0) {
    let currVertex = queue.unshift();
    if (!visited[currVertex]) {
      let adj = graph.getAdj(currVertex); 
      adj.forEach( v => queue.push(v));
      visited[currVertex] = true;
    }

    console.log(currVertex);
  }
}


// Depth First Search or DFS for a Graph
// Depth First Traversal (or Search) for a graph is similar to Depth First Traversal of a tree. The only catch here is, unlike trees, 
// graphs may contain cycles, so we may come to the same node again. To avoid processing a node more than once, we use a boolean visited 
// array.

// For example, in the following graph, we start traversal from vertex 2. When we come to vertex 0, we look for all adjacent vertices of 
// it. 2 is also an adjacent vertex of 0. If we don’t mark visited vertices, then 2 will be processed again and it will become a non-terminating process. 
// A Depth First Traversal of the following graph is 2, 0, 1, 3.

function dfs(graph, vertex, visited = null) {
  if (!visited) {
    visited = new Array(graph.vertices.length);
    visited.fill(false);
  }

  console.log(vertex);
  visited[vertex] = true;

  const adj = graph.getAdj(vertex);
  adj.forEach( v => {
    if (!visited[v]) dfs(graph, v, visited);
  });

}


// Dijkstra’s shortest path algorithm | Greedy Algo-7
// Given a graph and a source vertex in the graph, find shortest paths from source to all vertices in the given graph.
// Dijkstra’s algorithm is very similar to Prim’s algorithm for minimum spanning tree. Like Prim’s MST, we generate a SPT 
// (shortest path tree) with given source as root. We maintain two sets, one set contains vertices included in shortest path tree, 
// other set includes vertices not yet included in shortest path tree. At every step of the algorithm, we find a vertex which 
// is in the other set (set of not yet included) and has a minimum distance from the source.

// Below are the detailed steps used in Dijkstra’s algorithm to find the shortest path from a single source vertex to all other 
// vertices in the given graph.
// Algorithm
// 1) Create a set sptSet (shortest path tree set) that keeps track of vertices included in shortest path tree, i.e., whose minimum 
// distance from source is calculated and finalized. Initially, this set is empty.
// 2) Assign a distance value to all vertices in the input graph. Initialize all distance values as INFINITE. Assign distance value 
// as 0 for the source vertex so that it is picked first.
// 3) While sptSet doesn’t include all vertices
// ….a) Pick a vertex u which is not there in sptSet and has minimum distance value.
// ….b) Include u to sptSet.
// ….c) Update distance value of all adjacent vertices of u. To update the distance values, iterate through all adjacent vertices. 
// For every adjacent vertex v, if sum of distance value of u (from source) and weight of edge u-v, is less than the distance value of v, 
// then update the distance value of v.
