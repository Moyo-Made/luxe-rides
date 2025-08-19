module.exports = {
	// Test environment
	testEnvironment: "node", // Use 'jsdom' for browser-like environment

	// File patterns for tests
	testMatch: [
		"**/__tests__/**/*.(js|jsx|ts|tsx)",
		"**/*.(test|spec).(js|jsx|ts|tsx)",
	],

	// Coverage configuration
	collectCoverage: true,
	collectCoverageFrom: [
		"src/**/*.(js|jsx|ts|tsx)",
		"!src/**/*.d.ts",
		"!src/index.js",
	],
	coverageDirectory: "coverage",
	coverageReporters: ["text", "lcov", "html"],

	// Setup files
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

	// Module paths (if using absolute imports)
	moduleNameMapping: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},

	// Transform files with Babel
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
	},

	// Ignore patterns
	testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/build/"],

	// Verbose output
	verbose: true,
};
