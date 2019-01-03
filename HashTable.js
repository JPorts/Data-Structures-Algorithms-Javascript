/* Hash Tables! */
/*Author: Jordan Porter */
/*Data Structures & Algorithms */

var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
};

let HashTable = function () {

    let storage = [];
    const storageLimit = 10;

    this.print = function () {
        console.log(storage);
    }

    //This method adds an element to the hash table
    this.add = function (key, value) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [key, value];
        } else {
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][1][i] == value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    };

    //This method removes an element from the hash table
    this.remove = function (key) {
        var index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index]; i++) {
                if(storage[index][i][0] === key){
                    delete storage[index][i];
                }
            }
        }
    };
    //This method performs a lookup of an element within the hash table
    this.lookup = function(key){
        var index = hash(key, storageLimit);
        if(storage[index] === undefined){
            return undefined;
        } else {
            for (var i = 0; i < storage[index].length; i++){
                if(storage[index][i][0]=== key){
                    return storage[index][i][1];
                }
            }
        }
    };
};

console.log(hash('Jordan', 10))

let ht = new HashTable();

ht.add('Jordan', 'Hooman');
ht.add('Nevis', 'Doogle');
ht.add('Jasper', 'Kitty Cat');
ht.add('Balthazar', 'Demon');

console.log(ht.lookup('Jordan'));

ht.print();