class BinaryTree {
  constructor() {
    this.root = null;
  }

  traverse(root) {
    console.log(root);
    if (!root) return;
    else {
      if (root.right) {
        this.traverse(root.right);
      }
      if (root.left) {
        this.traverse(root.left);
      }
    }
  }
  print() {
    this.traverse(this.root);
  }

  isEmpty() {
    return this.root == null;
  }

  add(val) {
    if (this.isEmpty()) return (this.root = new TreeNode(val));
    else this.insert(this.root, val);
  }

  insert(root, val) {
    if (val > root.val) {
      //try to add new node if nothing there
      if (!root.right) return (root.right = new TreeNode(val));
      //else recursively keep going
      else this.insert(root.right, val);
    } else if (val < root.val) {
      //try to add new node if nothing there
      if (!root.left) return (root.left = new TreeNode(val));
      //else recursively keep going
      else this.insert(root.left, val);
    }
  }
}

class TreeNode {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

let tree = new BinaryTree();
tree.add(10);
tree.add(14);
tree.add(5);
tree.add(1);
tree.add(2);

tree.print();
