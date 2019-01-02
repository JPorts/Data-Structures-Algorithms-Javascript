/* Sets! */
/*Author: Jordan Porter */
/*Data Structures & Algorithms */

function mySet(){
    // The var collection will hold the set
    var collection = [];

    //This method will check for the presence of an element and return true or false
    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    };


    // this method will return all the eletns in a set 
    this.values = function () {
        return collection;
    };

    // This method adds an element to a set 
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };

    //This method will remove an elemenr from the set
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };

    //This method will retuen the size of the set
    this.size = function(){
        return collection.length;
    };

    // This method will return the union of two sets
    this.union = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };

    //This method will return the intersection of two sets as a new set
    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };

    //This method will return the difference of two sets as a new set
    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };

    //This method will test if the set is a subset of a different set
    this.difference() = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        });
    };
}

var setA = new mySet();
var setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());

var setC = new Set();
var setD = new Set(); 

setC.add("a");
setD.add("b");
setD.add("a");
setD.add("c");
setD.add("d");

console.log(setC.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
