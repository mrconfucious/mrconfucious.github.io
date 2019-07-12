import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { BrowserModule } from '@angular/platform-browser';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-first-project';
    }
    AppComponent_1 = AppComponent;
    var AppComponent_1;
    AppComponent = AppComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        NgModule({
            imports: [BrowserModule, FormsModule],
            declarations: [AppComponent_1, PaginationComponent],
            bootstrap: [AppComponent_1]
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map