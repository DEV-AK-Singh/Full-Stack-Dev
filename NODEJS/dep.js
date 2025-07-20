// Dependency management is the process of tracking, installing, updating, and removing the external packages your application depends on.
// It helps ensure your applications remains stable, secure, and maintainable over time.

// Node.js packages follow semantic versioning (SemVer), using a three-part version number: MAJOR.MINOR.PATCH
// MAJOR: Incremented for incompatible API changes
// MINOR: Incremented for backward-compatible new features
// PATCH: Incremented for backward-compatible bug fixes

// Symbol	Example	   Meaning
// ^	    ^2.8.1	   Any with 2.x.x, only MAJOR version must match (2.8.1 or higher)
// ~	    ~2.8.1	   Any with 2.8.x, only MAJOR.MINOR must match (2.8.1 or higher)
// *	    *	       Any version (not recommended for production)
// >=	    >=2.8.1    Version 2.8.1 or higher
// none	    2.8.1	   Exact version only

// // Best Practices
// 1. Use exact versions in production: Pin your dependencies to exact versions to prevent unexpected updates.
// 2. Regularly update dependencies: Keep your dependencies up to date to benefit from security patches and new features.
// 3. Audit your dependencies: Regularly check for known vulnerabilities in your dependencies.
// 4. Use a lock file: Always commit your lock file to version control.
// 5. Minimize dependencies: Only include packages that you actually need.
// 6. Use scoped packages: For internal packages, use scopes to avoid naming conflicts.
// 7. Document your dependencies: Include information about why each dependency is needed in your project's documentation.