
const loadCreativeProjects = async () => {
    try {
        let response = await fetch('creativeProjects.json');
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}   

export default loadCreativeProjects; 