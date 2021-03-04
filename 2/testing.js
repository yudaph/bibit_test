const request = require('supertest')
const expect = require('chai').expect
describe('loading express', function () {
  let server
  beforeEach(function () {
    server = require('./server')
  })
  afterEach(function () {
    server.close()
  })
  it('responds to /search', function testSlash(done) {
    request(server)
      .get('/search?s=superman')
      .expect(200, (err, res) => {
        expect(res.body.data[0].Title).to.equal(
          'Batman v Superman: Dawn of Justice'
        )
        done()
      })
  })
  it('responds to /detail', function testSlash(done) {
    request(server)
      .get('/detail?t=superman')
      .expect(200, (err, res) => {
        expect(res.body.data.Title).to.equal('Superman')
        done()
      })
  })
  it('404 everything else', function testPath(done) {
    request(server).get('/foo/bar').expect(404, done)
  })
})
