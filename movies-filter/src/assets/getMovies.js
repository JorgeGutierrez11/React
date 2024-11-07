export const fetchData = async () => {
    const url = 'https://imdb8.p.rapidapi.com/v2/search?searchTerm=deadpool&type=movie&first=10&country=US&language=en-US';    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ecbef3cfcemsh1c33a3b8615ed62p10282ejsn1e86f3e22b82',
            'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response) {
            throw new Error(`HTTP Error. Status: ${response.status}`)
        }
        const result = await response.json();
        return  result.data.mainSearch.edges

    } catch (error) {
        console.error('Error fetching data: ',error);
        throw error;
    }
}