const EpisodeTypeDef = require('./episodes')

const Query = `
	type Query {
		episodes(page: Int): Episodes
	}
`;

module.exports = [Query, EpisodeTypeDef];
