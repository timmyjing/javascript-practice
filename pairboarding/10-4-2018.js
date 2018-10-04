// Implement topological sort using Kahn's algorithm

// Get a graph setup going
// a vertex has a value and edges going in and out

class Vertex {
  constructor(value) {
    this.value = value;
    this.inEdges = [];
    this.outEdges = [];
  }
}

// an edge connects two vertices, has a cost in a weighted graph
// can destroy edges to remove them

class Edge {
  constructor(from, to, cost = 1) {
    this.from = from;
    this.to = to;
    this.cost = cost;

    from.outEdges.push(this);
    to.inEdges.push(this);
  }

  destroy() {
    // sets the to and from to null, also removes itself from the vertex
    this.from.outEdges = this.from.outEdges.filter( edge => edge !== this)
    this.to.inEdges = this.to.inEdges.filter( edge => edge !== this)
    this.from = null;
    this.to = null;
    return null;
  }

}



// Topological sort checks for nodes that have no nodes going in, destroys all
// edges going out. then it finds the next set of nodes that have no edges going in
// a way to model dependencies

// argument will be an input of vertices

const topSort = vertices => {

  let queue = vertices.filter( vertex => vertex.inEdges.length == 0);

  while (queue.length > 0) {
    // get a vertex that has no in edges, aka no dependencies
    const vertex = queue.shift();

    console.log(vertex.value)

    // get the vertices that this curr vertex goes to
    let toVertices = vertex.outEdges.map( edge => edge.to);

    // destroy the out edges from the curr vertex
    vertex.outEdges.forEach( edge => edge.destroy());

    // check which vertices have no in edges now, add to queue
    toVertices.forEach( vertex => {
      if (vertex.inEdges.length == 0) queue.push(vertex)
    });
  }
}


// let vertex1 = new Vertex(1);
// let vertex2 = new Vertex(2);
// let edge12 = new Edge(vertex1, vertex2);

// console.log(vertex1.outEdges[0]);
// console.log(vertex2);
// console.log(edge12)
// topSort([vertex1, vertex2]);


// Given a sorted dictionary (array of words) of an alien language, 
// find the order of the characters in the language.

// take the first entry, get the unique chars and start a connection
// first char of first entry must be the top vertex
// check entries and compare with similar entries to get the difference
// ex abcd -> abca, can infer that d -> a due to the ordering
// compare to previous entry to see if you can create an edge

b - a
d - a
b - d

a - c

b - d - a - c


c -> a
aaa, aab, diff is a,b so a->b
c -> a
a -> b