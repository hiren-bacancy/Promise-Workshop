function all(prom1,prom2){
	return new Promise((resolve,reject)=>{
		let count = 0;
		let arr = [];
		
		prom1.then(data =>{
		  arr[0] = data;
		  count++;

		  if(count>=2){
		     resolve(arr);
		  }
		});

		prom2.then(data=>{
		  arr[1]=data;
		  count++;

		  if(count>=2){
		   resolve(arr);
		  }
		});
	});
}


all(getPromise1(),getPromise2()).then(console.log);
