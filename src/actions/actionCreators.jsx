export async function getRestaurents(city_name){
    const url = "http://127.0.0.1:5000/city/"+city_name
    const res = await fetch(url)
    const data = await res.json()    
    
    const data_arr =  data["DATA"]
    console.log("=====>>>", data_arr);
    return data_arr
    
}

export default getRestaurents;