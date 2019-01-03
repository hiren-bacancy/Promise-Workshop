function MyProm(){
	return new Promise((resolve,reject)=>{
		resolve('I FIRED');
		reject(new Error('I DID NOT FIRE'));
	});
}

function onRejected(error){
	console.log(error.message);
}

MyProm().then(console.log,onRejected);
