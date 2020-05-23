document.getElementById('button1').addEventListener('click',getText);
function getText(){
 fetch("test.txt")
  .then((res) => res.text())//注意：此处是res.text()
  .then(data => {
  console.log(data);
  document.getElementById('output').innerHTML = data;
  })
  .catch(err => console.log(err));
}