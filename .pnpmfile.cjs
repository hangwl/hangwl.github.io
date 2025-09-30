// pnpm hooks file
// This file can be used to customize pnpm's behavior

function readPackage(pkg) {
  // You can modify package.json fields here if needed
  // For example, to fix dependency issues or add overrides
  
  return pkg
}

module.exports = {
  hooks: {
    readPackage
  }
}
