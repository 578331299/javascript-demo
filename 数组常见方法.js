// 1.树形数据数组扁平化 flattenTreeDataClosure(data)
export function flattenTreeDataClosure(treeData){
    const flattenData = [];
    function flattenTree(data) {
      data.forEach(ele => {
        const item = {
          ...ele,
          children: []
        }
        flattenData.push(item);
        if (ele.children){
          flattenTree(ele.children);
        }
      })
    }
    flattenTree(treeData);
    return flattenData;
}

// 2.通过该节点的menuId找父级节点  findParent(val.pid, data);
export function findParent(item, flattenTree){
    const parentArr = []; // 存储所有的父级元素
    function find(item, flattenTree) {
      flattenTree.forEach(ele => {
          if (ele.menuId === item){
              parentArr.unshift(ele.menuId);
              find(ele.pid, flattenTree);
          }
      })
    }
    find(item, flattenTree);
    return parentArr;
}

// 3.通过递归 获取菜单叶子节点的 menuId, 并保存到defKeys数组
export function getLeafkeys (data) {
    let arr = [];
    function find(data) {
      data.forEach(ele => {
        if (!ele.children || ele.children.length===0) {
          arr.push(ele.menuId)
        } else {
          find(ele.children)
        }
      })
    }
    find(data);
    return arr;
}

// 4.数组根据某个值相等及逆行分组 sortClass(data)
export function sortClass (sortData) {
    const groupBy = (array, f) => {
      let groups = {};
      array.forEach((o) => {
        let group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
      });
      return Object.keys(groups).map((group) => {
        return groups[group];
      });
    };
    const sorted = groupBy(sortData, (item) => {
      return item.step; // 返回需要分组的对象
    });
    return sorted;
  }

  // 5.遍历树形数据，加属性
  export function addKeys(arr) {
    let menuList = [];
    const addKey = arr => arr.map(item => ({
        ...item,
        disabled: true,
        children: addKey(item.children)
    }))
    menuList = addKey(arr);
  }
