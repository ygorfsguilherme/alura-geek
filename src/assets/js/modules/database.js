export const database = (id)=>{
    const url = 'https://alura-geek-database.herokuapp.com/alura-geek';
    //const url = 'http://127.0.0.1:8000/alura-geek';
    
    if(id){
        const urlID = `${url}/${id}`;
        return urlID
    }else{
        return url
    }
}