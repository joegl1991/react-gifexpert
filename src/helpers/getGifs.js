const getGifs = async ( category ) => {

	const apiKey = 'R2g75Srh0WUg0XuWZM1F97osFRP8RuXZ';

	const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;
	const resp = await fetch( url );
	const { data } = await resp.json();

	const gifs = data.map( img => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url
	}));

	return gifs;

}

export default getGifs;