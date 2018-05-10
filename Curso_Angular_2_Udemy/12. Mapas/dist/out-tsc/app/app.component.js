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
import { MapasService } from "./services/mapas.service";
var AppComponent = (function () {
    function AppComponent(_ms) {
        this._ms = _ms;
        this.lat = 9.976052;
        this.lng = -84.006836;
        this.zoom = 16;
        this.marcadorSel = null;
        this.draggable = "1";
        this._ms.cargarMarcadores();
    }
    AppComponent.prototype.clickMapa = function (evento) {
        var nuevoMarcador = {
            lat: evento.coords.lat,
            lng: evento.coords.lng,
            titulo: "Sin titulo",
            draggable: true
        };
        this._ms.insertarMarcador(nuevoMarcador);
    };
    AppComponent.prototype.clickMarcador = function (marcador, i) {
        console.log(marcador, i);
        this.marcadorSel = marcador;
        if (this.marcadorSel.draggable) {
            this.draggable = "1";
        }
        else {
            this.draggable = "0";
        }
    };
    AppComponent.prototype.cambiarDraggable = function () {
        console.log(this.draggable);
        if (this.draggable == "1") {
            this.marcadorSel.draggable = true;
        }
        else {
            this.marcadorSel.draggable = false;
        }
    };
    AppComponent.prototype.dragEndMarcador = function (marcador, evento) {
        var lat = evento.coords.lat;
        var lng = evento.coords.lng;
        marcador.lat = lat;
        marcador.lng = lng;
        this._ms.guardarMarcadores();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [MapasService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../src/app/app.component.js.map