const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, element ) {

  throw new NotImplementedError('Not implemented');
  // let current = list;
  // let index = 0;
  // console.debug(index);
  // while(current) {
  //   if (current.value === element) {
  //     let position = index;
  //     console.debug(position);

  //     let prev = null;
  //     let counter = 0;

  //     while (counter < position) {
  //       prev = current;
  //       current = current.next;
  //       counter++;
  //     }
  //     prev.next = current.next;
  //   }
  //   current = current.next;
  //   index = index + 1;
  // }
  // return current;
}

module.exports = {
  removeKFromList
};
