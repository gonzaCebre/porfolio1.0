const loadBackendProjects = async () => {
    try {
        let response = await fetch('backendProjects.json');
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}   

export default loadBackendProjects;