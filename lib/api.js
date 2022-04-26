const API_URL = process.env.NEXT_PUBLIC_WP_URL;

export const getAllPosts = async () => {
    try{
        const resp = await fetch(`${API_URL}posts`);
        const respJson = await resp.json();
        return {
            status: true,
            data: respJson
        }
    }catch(e){
        return {
            status: false,
            error: e.message
        }
    }
}