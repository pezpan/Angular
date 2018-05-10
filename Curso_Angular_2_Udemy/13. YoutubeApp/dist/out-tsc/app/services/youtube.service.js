var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from "@angular/http";
import 'rxjs/Rx';
var YoutubeService = (function () {
    function YoutubeService(http) {
        this.http = http;
        this.youtubeUrl = "https://www.googleapis.com/youtube/v3";
        this.apikey = "AIzaSyCe7edHGrVL0kPNhsLpyyTnGZSu_ACTOMk";
        this.playlist = "UUuaPTYj15JSkETGnEseaFFg";
        this.nextPageToken = "";
    }
    YoutubeService.prototype.getVideos = function () {
        var _this = this;
        var url = this.youtubeUrl + "/playlistItems";
        var params = new URLSearchParams();
        params.set('part', 'snippet');
        params.set('maxResults', '10');
        params.set('playlistId', this.playlist);
        params.set('key', this.apikey);
        if (this.nextPageToken) {
            params.set('pageToken', this.nextPageToken);
        }
        return this.http.get(url, { search: params })
            .map(function (res) {
            console.log(res.json());
            _this.nextPageToken = res.json().nextPageToken;
            var videos = [];
            for (var _i = 0, _a = res.json().items; _i < _a.length; _i++) {
                var video = _a[_i];
                var snippet = video.snippet;
                videos.push(snippet);
            }
            return videos;
        });
    };
    return YoutubeService;
}());
YoutubeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], YoutubeService);
export { YoutubeService };
//# sourceMappingURL=../../../../src/app/services/youtube.service.js.map