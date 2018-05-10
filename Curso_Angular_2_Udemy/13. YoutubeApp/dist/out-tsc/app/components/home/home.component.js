var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { YoutubeService } from "../../services/youtube.service";
var HomeComponent = (function () {
    function HomeComponent(_yts) {
        var _this = this;
        this._yts = _yts;
        this.videos = [];
        this._yts.getVideos()
            .subscribe(function (videos) { return _this.videos = videos; });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.cargarMas = function () {
        var _this = this;
        this._yts.getVideos()
            .subscribe(function (videos) { return _this.videos.push.apply(_this.videos, videos); });
    };
    HomeComponent.prototype.verVideo = function (video) {
        this.videoSel = video;
        $('#myModal').modal();
    };
    HomeComponent.prototype.cerrarModal = function () {
        this.videoSel = null;
        $('#myModal').modal('hide');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [YoutubeService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=../../../../../src/app/components/home/home.component.js.map