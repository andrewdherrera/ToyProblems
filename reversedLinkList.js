function Node(val) {
    const obj = {};
    obj.val = val;
    obj.next = null;
  
    return obj;
  }
  
  function reverse(head) {
    var previous = null;
    var curr = head;
    var next = curr.next;
      
    if (!curr) {return null};
    if (!next) {return head};
      
    while (curr) {
      curr.next = previous;
      
      if (next === null) {
        return;
      }
  
      previous = curr;
      curr = next;
      next = next.next;
    }
    
    return next;
  }
  
  var head = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    node4 = new Node(4),
    node5 = new Node(5);
    
  head.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  
  reverse(head);
  console.log(head);
  console.log(node2);
  console.log(node3);
  console.log(node4);
  console.log(node5);