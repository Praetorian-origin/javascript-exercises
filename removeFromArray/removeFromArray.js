const removeFromArray = function(table, ...itemsToRemove) {
    let i;

    for (i = table.length - 1; i >= 0; i --) {
        if(itemsToRemove.includes(table[i])) {

            table.splice(i, 1);
        }
    }

    return table;
}

module.exports = removeFromArray
