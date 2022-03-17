const { RESTDataSource } = require('apollo-datasource-rest');

class RickMortyDataSource extends RESTDataSource {

	baseURL = 'https://rickandmortyapi.com/api/';
	episode = 'episode/';

	constructor() {
		// Always call super()
		super();
	}

	async getEpisodes(page) {
		if(!page) {
			page = 1;
		}
		return await this.get(`${this.episode}?page=${page}`);
	}

	async getEpisode(id) {
		return await this.get(`${this.episode}${id}`);
	}

}

module.exports = RickMortyDataSource;
