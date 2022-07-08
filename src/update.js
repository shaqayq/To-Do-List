export function checked(element, arr) {
  const num = element.id;
  if (arr[num].completed == false) {
    arr[num].completed = true;
  } else {
    arr[num].completed = false;
  }
  localStorage.setItem('Do-Lists', JSON.stringify(arr));
  window.location.reload();
}

export function clearChecked(arr) {
  const newList = arr.filter((e) => e.completed != true);
  localStorage.setItem('Do-Lists', JSON.stringify(newList));
  window.location.reload();
}
