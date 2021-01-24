/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let l1_cur = l1;
  let l1_next;
  let l2_cur = l2;
  let l2_next;
  let head = new ListNode();
  let cur = head;
  while (l1_cur || l2_cur) {
      if (l1_cur !== null && l2_cur !== null) {
          if (l1_cur.val <= l2_cur.val) {
              l1_next = l1_cur.next;
              cur.next = l1_cur;
              l1_cur = l1_next;
          } else {
              l2_next = l2_cur.next;
              cur.next = l2_cur;
              l2_cur = l2_next;
          }
          cur = cur.next;
      } else if (l1_cur === null && l2_cur !== null) {
          cur.next = l2_cur;
          break;
      } else {
          cur.next = l1_cur;
          break;
      }
  }
  return head.next;
};