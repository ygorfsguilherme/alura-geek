export const database = (id)=>{
    const url = 'https://alura-geek-database.herokuapp.com/alura-geek';
    
    if(id){
        const urlID = `${url}/${id}`;
        return urlID
    }else{
        return url
    }
}