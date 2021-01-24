/* 
  判断是否为质数:
  非质数——合数。9 = 3 * 3；10 = 2 * 5
  对于所有合数：至少一个因数小于或等于数字的平方根：Sqrt(9) = 3 => 9 = 3 * 3
  时间复杂度T:O(sqrt(n))
*/
function isPrime(number) {
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}


/*
  二的整数次幂 2^n = m
  T:O(log n)
*/ 
function isPowerOfTwo(number) {
  if (number < 1) return false;
  let dividedNumber = number;
  while(dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      return false;
    }
    dividedNumber /= 2;
  }
  return dividedNumber;
}
// 性能提升：按位运算
// 二的整数次幂转换为二进制形式，始终只有一位1：1:1  2:10  4:100
// “&”运算 number & (number - 1): 如果一个数和它前一个数按位与运算得到的结果是0，则为二的整数次幂
// 时间复杂度T:O(1)

function isPowerOfTwoAnd(number) {
  if (number < 1) return false;
  return (number & (number - 1)) === 0;
}

/**
 * 阶乘: fact(5) = 5 * 4 * 3 * 2 * 1 = !5 = 120 T=O(n)
 */
function fact(number) {
  let result = 1; // 0 的阶乘是 1
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

/**
 * 阶乘：递归法 T=O(n)
*/
function factDigui(number) {
  // base case：基准情形
  if (number === 1) {
    return 1;
  }
  return number * factDigui(number - 1);
}

/**
 * 斐波拉契数列
*/
function fib(n) {
  const numbers = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]);
  }
  return numebrs[n];
}

/**
 * 斐波拉契数列+存储
*/
function fibsave(n, memo) {
  let result = 0;
  if (memo[n]) {
    return memo[n];
  }
  if (n === 1 || n === 2) {
    result = 1;
  } else {
    result = fibsave(n - 1, memo) + fibsave(n - 2, memo);
  }
  memo[n] = result;
  return result;
}


var ListNode = function (val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  const node = new ListNode(0);
  let middle = node;
  let carry = 0;
  while (l1 || l2) {
     let x = (l1 !== null) ? l1.val : 0;
     let y = (l2 !== null) ? l2.val : 0;
     let res = x + y + carry;
     if (res > 9) {
         carry = 1;
         res = res % 10;
     } else {
         carry = 0;
     }
     middle.next = new ListNode(res);
     middle = middle.next;
     if (l1 !== null) l1 = l1.next;
     if (l2 !== null) l2 = l2.next;
  }
  if (carry) {
      middle.next = new ListNode(carry)
  }
  return node.next;
};
