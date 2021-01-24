// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reverseList = function(head) {
  let header = null;
  let next;
  let pre = header;
  let cur = head;
  while(cur !== null) {
      next = cur.next;
      cur.next = pre;
      // 当前节点往后移动一位
      cur = next;
      // 前一个节点变成当前节点
      pre = cur;
  }
  return pre;
};