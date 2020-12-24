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

updateVisitorCount();

function updateVisitorCount() {
  fetch(
    'https://ilfyf76ht3.execute-api.eu-west-2.amazonaws.com/Prod/visitor-count',
    {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Headers':
          'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS, POST',
      },
    }
  )
    .then(res => res.json())
    .then(res => {
      count.innerHTML = res.visitorCount;
    });
}
