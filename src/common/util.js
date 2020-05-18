function addZero(value){
  return (""+value).length <2 ? "0" + value : value
}
export function debounce(func, delay){
  let timer = null
  return function(...args){
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  }
}

export function formatDate(now) { 
  //实例化Date参数为毫秒 传入秒时*1000 
  var now = new Date(now)
  var year=addZero(now.getFullYear()); 
  var month=addZero(now.getMonth()+1); 
  var date=addZero(now.getDate()); 
  var hour=addZero(now.getHours()); 
  var minute=addZero(now.getMinutes()); 
  var second=addZero(now.getSeconds()); 
  return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second; 
} 