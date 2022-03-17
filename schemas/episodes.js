const episodeTypeDef = `
	type Episode {
		id: ID
		name: String
		air_date: String
		episode: String
		created: String
	}

	type Episodes {
		info: Info
		results: [Episode]
	}

	type Info {
		count: Int
		pages: Int
		next: Int
		prev: Int
	}

`;

module.exports = episodeTypeDef;
