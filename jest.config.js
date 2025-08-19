/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
	return {
	  verbose: true,
	  testEnvironment: 'node',
	  testMatch: ['**/__tests__/**/*.{js,jsx,ts,tsx}', '**/*.{test,spec}.{js,jsx,ts,tsx}'],
	};
  };