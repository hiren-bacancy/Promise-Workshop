const MyProm = Promise.reject(new Error('SECRET VALUE'));

MyProm.catch(error=>console.log(error.message));
