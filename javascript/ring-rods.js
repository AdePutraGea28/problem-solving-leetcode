function countPoints(rings) {
  let map = new Map();

  for(let i = 0; i < rings.length; i += 2) {
      let color = rings[i];
      let position = rings[i + 1];

      if(map.has(position)){
          let current = map.get(position);
          current.add(color)
      } else {
          map.set(position, new Set(color));
      }
  }

  let arr = Array.from(map);
  let result = 0;
  
  arr.forEach(a => {
      if(result < a[1].size) {
          result = a[1].size
      }
  })
  return result;
}

console.log(countPoints('B0R0G0R9R0B0G0'));
