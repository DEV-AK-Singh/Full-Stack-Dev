// Modules are the building blocks of Node.js applications, allowing you to organize code into logical, reusable components. They help in:
// Organizing code into manageable files
// Encapsulating functionality
// Preventing global namespace pollution
// Improving code maintainability and reusability

// Best Practices

// // Module Organization
// - Keep modules focused on a single responsibility
// - Use meaningful file and directory names
// - Group related functionality together
// - Use index.js for module entry points

// // Export Patterns
// - Prefer named exports for utilities
// - Use default exports for single-class modules
// - Document your module's API
// - Handle module initialization if needed

// # Node.js uses CommonJS modules by default
// # Use require() to import and module.exports to export
// # Modules are cached after first load

// ES Modules provides a more structured and statically analyzable way to work with modules compared to CommonJS, with benefits like tree-shaking for smaller builds.

// Feature	              CommonJS	                ES Modules
// File Extension	      .js (default)	            .mjs (or .js with proper config)
// Import Syntax	      require()	                import
// Export Syntax	      module.exports / exports	export / export default
// Import Timing	      Dynamic (runtime)	        Static (parsed before execution)
// Top-level Await	      Not supported	            Supported
// File URL in Imports	  Not required	            Required for local files

// Enabling ES Modules
// 1. Using the .mjs File Extension
// 2. Setting "type": "module" in package.json
// 3. Using the --input-type=module Flag 
