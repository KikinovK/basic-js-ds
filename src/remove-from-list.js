const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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

 function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

function removeKFromList(l, k) {
  let head = l;

  // while(head.next) {
  //   console.log(head.value);
  //   head = head.next;
  // }

  // head = l;

  if (l.value === k) {
    l = l.next
    head = head.next
  }

  let n = l;
  while(l.next) {

    if(l.next.value === k) {

      l.next = l.next.next;
    } else {
      n = l;
      if (l.next) {

        l = l.next

      }
    }
  }

  if (l.value === k) {
    l = n
  }

  // while(head.next) {
  //   console.log(head.value);
  //   head = head.next;
  // }
  return head
}

// removeKFromList(convertArrayToList([1, 2, 3, 3, 4, 5]), 3)


module.exports = {
  removeKFromList
};
