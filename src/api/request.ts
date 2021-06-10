import axios from 'axios'
interface dataResult{
    code:number,
    mesg:string,
    data:any
}
const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
});

function get(url:string):Promise<dataResult>{
    return new Promise((resolve,reject)=>{
        resolve({
            code:0,
            mesg:'success',
            data:{
                pageNum:1,
                totalPages:10,
                fileList:[
                    {
                        fileName1:'test1',

                    },
                    {
                        fileName2:'test2',

                    }
                ]
            }   
        })
    })
    // return  instance.get(url)
}

export {get}