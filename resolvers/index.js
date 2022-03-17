const EpisodeResolver = require('./episodes');

module.exports = {
	Query: Object.assign({}, EpisodeResolver.rootQueryResolver),
	// Mutation: Object.assign({}, UsersResolver.mutationResolver),
	// ...UsersResolver.otherResolvers,
};
