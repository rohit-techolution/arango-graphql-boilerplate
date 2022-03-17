const rootQueryResolver = {
	episodes: async (parent, args, { dataSources }) => {
		const episodes = await dataSources.RickAndMorty.getEpisodes(args.page ? args.page : 1);
		return episodes;
	},
};

module.exports = {
	rootQueryResolver
};
