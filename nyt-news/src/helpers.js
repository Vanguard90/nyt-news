let apiPromise = fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3b6e4cf6acee482fb77482cfd4416c0b');
console.log(apiPromise);

apiPromise
	.then(data => data.json())
	.then(data => {console.log(data)})
	.catch((err) => { console.log(err)});