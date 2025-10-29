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