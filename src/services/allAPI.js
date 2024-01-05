import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

//1. upload video

export const uploadvideo = async (reqBody) => {
   return await commonAPI ('POST',`${serverURL}/videos`, reqBody)
}

// 2. get all videos

export const getAllVideos = async() =>{
   return await commonAPI('GET',`${serverURL}/videos`,"")
}

// 3. Delete video

export const deleteVideo = async(id)=>{
   return await commonAPI(`DELETE`,`${serverURL}/videos/${id}`,{})
}

// 4. Add to watch history 

export const addtoHistory = async(videoDetails)=>{
   return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

// 5. Get all watch history

export const getAllWatchHistory = async() =>{
   return await commonAPI('GET',`${serverURL}/history`,"")
}

// 6. Delete watch history
export const deleteWatchHistory = async(id)=>{
   return await commonAPI(`DELETE`,`${serverURL}/history/${id}`,{})
}

// 7. Add category 
export const addCategory = async(reqBody)=>{
   return await commonAPI('POST',`${serverURL}/category`,reqBody)
}

// 8. Get all category
export const getAllCategory =  async ()=>{
   return await commonAPI('GET',`${serverURL}/category`,"")
}

// 9. detete category
export const deleteCategory =  async (id)=>{
   return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}