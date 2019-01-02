/* Priority Queues! */
/*Author: Jordan Porter */
/*Data Structures & Algorithms */

function PriorityQueue() {

    //declare the collection
    var collection = [];

    //This method prints the priority queue
    this.printCollection = function () {
        (console.log(collection));
    };

    //This method enqueues the element based on priority
    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for (var i = 0; i < collection.length; i++) {
                if (element[i] < collection[i][i]) {
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    };

    //This method removes the element first in the prioity hierarchy within the queue
    this.dequeue = function () {
        var value = collection.shift();
        return value[0];
    };

    //This method returns the element at the front of the queue
    this.front = function () {
        return collection[0];
    };

    //This method returns the size of the queue
    this.size = function () {
        return collection.length;
    };

    //This method returns true or false depending on the queue size
    this.isEmpty = function () {
        return (collection.length === 0);
    };

}

var pq = new PriorityQueue();

pq.enqueue(['Jordan Porter', 2]);
pq.enqueue(['Craiga Porter', 3]);
pq.enqueue(['Richard Smith', 1]);
pq.enqueue(['Craig Smith', 2]);

pq.printCollection();

pq.dequeue();
pq.front();
pq.printCollection();
