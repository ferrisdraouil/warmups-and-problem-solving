describe("UnitTests", function() {
  it("should_return_an_array_of_the_nodes_searched_using_BFS", function() {
    // Failure message:
    // This test has no failure messages
    graph = new Graph();
    graph.addVertex("S");
    graph.addVertex("P");
    graph.addVertex("U");
    graph.addVertex("X");
    graph.addVertex("Q");
    graph.addVertex("Y");
    graph.addVertex("V");
    graph.addVertex("R");
    graph.addVertex("W");
    graph.addVertex("T");

    graph.addEdge("S", "P");
    graph.addEdge("S", "U");

    graph.addEdge("P", "X");
    graph.addEdge("U", "X");

    graph.addEdge("P", "Q");
    graph.addEdge("U", "V");

    graph.addEdge("X", "Q");
    graph.addEdge("X", "Y");
    graph.addEdge("X", "V");

    graph.addEdge("Q", "R");
    graph.addEdge("Y", "R");

    graph.addEdge("Y", "W");
    graph.addEdge("V", "W");

    graph.addEdge("R", "T");
    graph.addEdge("W", "T");

    expect(graph.breadthFirstSearch("S")).toEqual([
      "S",
      "P",
      "U",
      "X",
      "Q",
      "V",
      "Y",
      "R",
      "W",
      "T"
    ]);
  });
});
