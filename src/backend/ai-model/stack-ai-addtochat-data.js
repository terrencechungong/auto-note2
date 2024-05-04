const url = `https://stack-intext.onrender.com/index_documents_api?flow_id=${'6611c3fe20edce2bd66cb287'}&node_id=${'docemb-0'}&org=${'e73fe5b4-18e3-4a15-a764-7306aa894b59'}`

const headers = {
  'Authorization': 'Bearer 240e07fe-9775-494a-a797-aa247804c611'
}


export default async function call_fetch(myString) {
    let data = {'text':myString};
    fetch('http://localhost:5000/run_script', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}