
const loadData = async () => {
    try {
        let response = await fetch('data.json');
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}   

export default loadData; 