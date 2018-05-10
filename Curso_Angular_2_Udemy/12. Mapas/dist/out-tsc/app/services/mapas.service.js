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
var MapasService = (function () {
    function MapasService() {
        this.marcadores = [];
        var nuevoMarcador = {
            lat: 9.976052,
            lng: -84.006836,
            titulo: "Iglesia de Coronado",
            draggable: true
        };
        this.marcadores.push(nuevoMarcador);
    }
    MapasService.prototype.insertarMarcador = function (marcador) {
        this.marcadores.push(marcador);
        this.guardarMarcadores();
    };
    MapasService.prototype.borrarMarcador = function (idx) {
        this.marcadores.splice(idx, 1);
        this.guardarMarcadores();
    };
    MapasService.prototype.guardarMarcadores = function () {
        localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
    };
    MapasService.prototype.cargarMarcadores = function () {
        if (localStorage.getItem('marcadores')) {
            this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
        }
        else {
            this.marcadores = [];
        }
    };
    return MapasService;
}());
MapasService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], MapasService);
export { MapasService };
//# sourceMappingURL=../../../../src/app/services/mapas.service.js.map