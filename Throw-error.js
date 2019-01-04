function parsePromised(json){
	 return new Promise((resolve,reject)=>{
		try{
		resolve(JSON.parse(json));
		}catch(e){
		reject(e);
		}
	});
}

parsePromised(process.argv[2]).then(data=>data,
		e=>console.log(e.message));
