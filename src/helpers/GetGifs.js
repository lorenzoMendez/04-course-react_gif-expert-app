

export const getGifs = async(category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BeD86iM9xQIWPNbQEUD51ogM24pirrhZ&q=${encodeURI(category)}&limit=10`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map(image => {
        return {
            id: image.id,
            title: image.title,
            url: image.images?.original.url
        }
    });
    return gifs;
}