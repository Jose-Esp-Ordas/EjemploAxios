import instance from "../lib/axios";

export async function getPosts() {
    try{
        const response = await instance.get("/posts");
        return  response.data;
    }  catch (error) {
        console.log("error", error)
        throw error
    }
}

export async function createPost({title, body, UserId = 1}) {
    try{
        const response = await instance.post("/posts",{
            title,
            body,
            UserId
        });
        console.log(response)
        return response.data;
    }
    catch (error){
        console.error("Error creando Post: ", error)
        throw error
    }
}

export async function editPost({id, title, body, UserId = 1}) {
    try{
        const response = await instance.put(`/posts/${id}`,{
            title,
            body,
            UserId
        });
        console.log(response)
        return response.data;
    }
    catch (error){
        console.error("Error editando Post: ", error)
        throw error
    }
}

export async function deletePost(id) {
    try{
        const response = await instance.delete(`/posts/${id}`);
        console.log(response)
        return response.data;
    }
    catch (error){
        console.error("Error borrando Post: ", error)
        throw error
    }
}