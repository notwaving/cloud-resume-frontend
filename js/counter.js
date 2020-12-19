// **** Uses countapi ****

// const count = document.getElementById('visits');

// updateVisitCount();

// function updateVisitCount() {
//   fetch('https://api.countapi.xyz/update/samanthaburke/?amount=1')
//     .then(res => res.json())
//     .then(res => {
//       count.innerHTML = res.value;
//     });
// }

// The empty string below will link to a future DynamoDB database, via API Gateway
// xhttp.open(
//   'GET',
//   '',
//   true
// );
// xhttp.send();

// **** ANOTHER WAY ****

const count = document.getElementById('visits');

updateVisitCount();

function updateVisitCount() {
  fetch('put api gateway link here', {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
    },
  })
    .then(res => res.json())
    .then(res => {
      count.innerHTML = res.visitors;
    });
}
