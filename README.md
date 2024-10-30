# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

I used ai to give me a rough psuedo code so I could understand how a matrix and a list might interact.

The runtime complexity of the conversion I implemented is O(n^2). There are two constants of 1 with the first conditional to check if the matrix is empty and there is a constant of one to check if there is an edge between nodes or if its a 1. The main part of the time complexity though is the inner and outer loop traveling through the whole matrix and whole array giving both a complexity of linear n. Putting all the parts together we get a complexity of Big Theta or O(n^2). The time complexity depends on the verticies because it iterates over each row and column in the matrix, it doesnt care much about the edges because all it checks is if it exists or not which is a constant time of 1.

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
