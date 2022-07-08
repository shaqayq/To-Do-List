export function checked(element, arr) {
  const num = element.id;
  arr[num].completed = true;
  localStorage.setItem('Do-Lists', JSON.stringify(arr));
  window.location.reload();
}

export function clearChecked(arr) {
  const newList = arr.filter((e) => e.completed != true);
  localStorage.setItem('Do-Lists', JSON.stringify(newList));
  window.location.reload();
}
