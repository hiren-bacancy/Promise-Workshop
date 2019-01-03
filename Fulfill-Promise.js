var promise = new Promise((resolve)=>{
	setTimeout(resolve,300);
});

promise.then(
	(result)=>{console.log('FULFILLED!')}
);


//function later(delay) {
//    return new Promise(function(resolve) {
//        setTimeout(resolve, delay);
//    });
//}
