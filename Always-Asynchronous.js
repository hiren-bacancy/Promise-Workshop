function MyProm(){
	return new Promise((resolve,reject)=>{
		resolve('PROMISE VALUE');
	});
}

MyProm().then(console.log);

console.log('MAIN PROGRAM');
