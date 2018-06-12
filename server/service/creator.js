

const host = 'localhost'
const port = 8080

module.exports = {
  scriptCreator(pageName) {
    return [
      // <script key='vendor' src={`/${matchVendorFile()}`} />,
      <script key={pageName} src={`http://${host}:${port}/dist/${pageName}.bundle.js`} />
    ]
  }
}