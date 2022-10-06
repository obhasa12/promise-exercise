const fakeRequestDataPromise = (url) =>{
    return new Promise ((data,err) => {
        const delay = Math.floor((Math.random() * (4500)) + 500)
        setTimeout(() => {
            if(delay < 4000){
                data('Here is your data')
            }else{
                err('Run out time!')
            }
        }, delay)
    })
}

fakeRequestDataPromise('book.com/api')
.then((data) => {
    console.log('Data', data)
    return fakeRequestDataPromise('book.com/api/2')
}).then((data) => {
    console.log('Data2')
    return fakeRequestDataPromise('book.com/api/3')
})
.then((data) => {
    console.log('Data3')
})
.catch((err) =>{
    console.log('error')
    console.log(err)
})