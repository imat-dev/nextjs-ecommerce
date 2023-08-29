const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
process.env.NODE_NO_WARNINGS = "stream/web";

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: "imat",
				mongodb_password: "12345",
				mongodb_cluster: "cluster0",
				mongodb_db: "ecommerce",
				MONGODB_URI: "mongodb+srv://imat:12345@cluster0.avcqfbf.mongodb.net/ecommerce",
				GOOGLE_ID:
					"303095637852-ndgi5fdrng8c15ojo67ni418ueavui7r.apps.googleusercontent.com",
				GOOGLE_SECRET: "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",
				LINKEDIN_CLIENT_ID: "86bc1huamootan",
				LINKEDIN_CLIENT_SECRET: "7pEfEmgJ2AdENQ9u",
				NEXTAUTH_SECRET: "zRf0HjwmgYIm86SkgQuFeLKVguoT",
			},
		};
	}

	return {
		env: {
			mongodb_username: "imat",
			mongodb_password: "12345",
			mongodb_cluster: "cluster0",
			mongodb_db: "ecommerce",
			MONGODB_URI: "mongodb+srv://imat:12345@cluster0.avcqfbf.mongodb.net/ecommerce",
			GOOGLE_ID:
				"303095637852-ndgi5fdrng8c15ojo67ni418ueavui7r.apps.googleusercontent.com",
			GOOGLE_SECRET: "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",
			LINKEDIN_CLIENT_ID: "86bc1huamootan",
			LINKEDIN_CLIENT_SECRET: "7pEfEmgJ2AdENQ9u",
			NEXTAUTH_SECRET: "zRf0HjwmgYIm86SkgQuFeLKVguoT",
		},
	};
};
