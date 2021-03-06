var Application = require('spectron').Application
var assert = require('assert')
var path = require('path')
describe('application launch', function () {
  this.timeout(10000)

    beforeEach(function () {
	this.app = new Application({
	    //path: __dirname + '/../Torrent-Player-linux-x64/Torrent-Player'
	    path: path.join(__dirname, '..', 'node_modules', '.bin',
			    'electron'),
	    args: ['.']
	})
	return this.app.start()
    })

    afterEach(function () {
	if (this.app && this.app.isRunning()) {
	    return this.app.stop()
	}
    })

    it('shows an initial window', function () {
	return this.app.client.getWindowCount().then(function (count) {
	    assert.equal(count, 1)
	})
    })
})
