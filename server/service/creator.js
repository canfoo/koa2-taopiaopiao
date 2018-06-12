
const config = require('../../config')

module.exports = {
  scriptCreator(pageName) {
    return [
      // <script key='vendor' src={`/${matchVendorFile()}`} />,
      <script key={pageName} src={`http://localhost:${config.dev.port}/dist/index.js`} />
    ]
  }
}