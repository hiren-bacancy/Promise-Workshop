function myProm(){
	return new Promise((resolve,reject)=>{
		setTimeout(function(){
			reject(new Error('REJECTED!'));
		},300);
	});
}

function onReject(error){
	console.log(error.message);
}

myProm().then(null,onReject);
