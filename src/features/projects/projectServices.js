const API_URL="https://portfolio-backend-jds1.onrender.com";

const fetchUiClones=async()=>{
    const response=await fetch(`${API_URL}/api/uidesigns`);
    const data= await response.json();
    return data;
}
const fetchWebsiteClones=async()=>{
    const response=await fetch(`${API_URL}/api/websites`);
    const data= await response.json();
    return data;
}
const fetchFrontendProjects=async()=>{
    const response=await fetch(`${API_URL}/api/frontendprojects`);
    const data= await response.json();
    return data;
}
const fetchFullstackProjects=async()=>{
    const response=await fetch(`${API_URL}/api/fullstackprojects`);
    const data= await response.json();
    return data;
}
const projectServices={fetchUiClones,fetchWebsiteClones,fetchFrontendProjects,fetchFullstackProjects};
export default projectServices;