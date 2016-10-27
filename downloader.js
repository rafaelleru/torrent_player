//clase method
//author @rafaelleru

var WebTorrent = require('webtorrent');

function Downloader(){
//    console.log('Holaaaa');
    this._torrentsArray = [];
    this.client = new WebTorrent();
};


Downloader.prototype.startDownload = function(torrent) {
    this.client = client.add( torrent, function(){
    });
};

Downloader.prototype.addTorrent = function(torrent){
    this._torrentsArray.push(torrent);
    this.client.add(torrent, function(torrent){
	console.log(torrent.infoHash);
    }); // esto debería ser lo mismo que lo de abajo


};

Downloader.prototype.setFileMorePriority = function(file) {
    this.client.files[file].select();
};

Downloader.prototype.setFileBuffer = function(file) {
    stream  = this.client.files[file].getBuffer();
    //poner a reproducir el buffer
};

Downloader.prototype.setPlayFile = function(file) {
    document.getElementById("body").append(this.client.files[file]);
};

Downloader.prototype.getFiles = function(){
    var files_ = [];
    var torrent_files = this.client.torrents;

    // TODO: esas dos funciones anidadas son raras.
    torrent_files.forEach( function(file_){
	file_.files.forEach( function(f){
	files_.push(f);
	})
    })

    return files_;
}

Downloader.prototype.getLastFiles = function(){
    var torrent = this.client.torrents[this.client.torrents.length -1];
    //console.log(torrent.infoHash);
    console.log(torrent.files.length);
}
module.exports = Downloader;
