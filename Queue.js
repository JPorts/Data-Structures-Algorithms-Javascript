/*Queues & Priority Queues */
/*Author: Jordan Porter */
/*Data Structures & Algorithms */

// Queues work on a first-in first-out basis
// functions : print, enqueue, dequeue, front, size, isEmpty

function Queue(){
    //declare array for queue
    collection = [];

    //This method prints the Queue
    this.print = function(){
        console.log(collection);
    };

    //This method adds an element to the queue 
    this.enqueue = function(element){
        collection.push(element);
    };

    //This method removes an element from the queue
    this.dequeue = function(){
        return collection.shift();
    };

    //This method displays the element at the front of the queue
    this.front = function(){
        return collection[0];
    };

    //This method returns the size of the queue
    this.size = function(){
        return collection.length;
    };

    //This method returns true or false if the queue is empty or not
    this.isEmpty = function() {
        return (collection.length === 0);
    };

}
    var q = new Queue();

    q.enqueue('a');
    q.enqueue('b');
    q.enqueue('c');
    q.print();
    q.dequeue();
    console.log(q.front());
    q.print();


