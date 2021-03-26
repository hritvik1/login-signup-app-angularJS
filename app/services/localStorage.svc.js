function setItemLocal(key, value) {
  localStorage.setItem(key, value);
}

function getItemLocal(key){
  return localStorage.getItem(key);
}

function removeItemLocal(key) {
  localStorage.removeItem(key);
}

function getObjlocal(key) {
  return JSON.parse(localStorage.getItem(key));
}
