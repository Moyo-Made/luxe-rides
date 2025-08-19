const nextJest = require("next/jest");

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files
	dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
	// Add more setup options before each test is run
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

	// Test environment
	testEnvironment: "jest-environment-jsdom",

	// Test patterns
	testMatch: [
		"**/__tests__/**/*.(js|jsx|ts|tsx)",
		"**/*.(test|spec).(js|jsx|ts|tsx)",
	],

	// Coverage configuration
	collectCoverageFrom: [
		"src/**/*.(js|jsx|ts|tsx)",
		"pages/**/*.(js|jsx|ts|tsx)",
		"components/**/*.(js|jsx|ts|tsx)",
		"lib/**/*.(js|jsx|ts|tsx)",
		"!**/*.d.ts",
		"!**/node_modules/**",
		"!**/.next/**",
	],

	// Module name mapping for absolute imports
	moduleNameMapping: {
		"^@/components/(.*)$": "<rootDir>/components/$1",
		"^@/pages/(.*)$": "<rootDir>/pages/$1",
		"^@/lib/(.*)$": "<rootDir>/lib/$1",
	},

	// Coverage settings
	coverageDirectory: "coverage",
	coverageReporters: ["text", "lcov", "html"],

	// Ignore patterns
	testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
