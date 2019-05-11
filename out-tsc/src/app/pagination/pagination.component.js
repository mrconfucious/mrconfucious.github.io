import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        // masImg = [
        //   "1.png", 
        //   "2.png",
        //   "3.png",
        //   "4.png",
        //   "5.png",
        //   "6.png",
        //   "7.png",
        //   "8.png",
        //   "9.png",
        //   "10.png",
        //   "11.png",
        //   "12.png",
        // ];
        //title: string;
        this.title = 'Enter new title';
        this.masImg = new Array(12).fill('.png').map(function (el, index) { return index + 1 + el; });
        this.numberOfVocations = this.masImg.length;
        this.initialNumber = this.masImg.length;
        this.pages = [];
        this.page = 1;
        this.itemsPerPages = 5;
        this.temp = this.itemsPerPages;
    }
    PaginationComponent.prototype.changePage = function () {
        var _this = this;
        this.current = this.masImg.filter(function (img, index) {
            return index >= (_this.page - 1) * _this.itemsPerPages && index < _this.page * _this.itemsPerPages;
        });
    };
    PaginationComponent.prototype.onClick = function (page) {
        if (page === "<") {
            if (this.page > 1)
                this.page--;
        }
        else if (page === ">") {
            if (this.page < this.pages.length)
                this.page++;
        }
        else {
            this.page = page;
        }
        this.changePage();
    };
    PaginationComponent.prototype.numberOfPages = function () {
        var _this = this;
        this.current = this.masImg.filter(function (img, index) {
            return index < _this.itemsPerPages;
        });
        this.masImg.forEach(function (i, index) {
            if (!((index + 1) % _this.itemsPerPages))
                _this.pages.push((index + 1) / _this.itemsPerPages);
            if (index === _this.masImg.length - 1 && (index + 1) % _this.itemsPerPages)
                _this.pages.push(_this.pages.length + 1);
        });
    };
    PaginationComponent.prototype.onClickImg = function (img) {
        if (confirm("Вы точно хотите удалить вакансию?")) {
            var i = this.masImg.findIndex(function (t) { return t == img; });
            this.masImg.splice(i, 1);
            //console.log(this.masImg);
            this.numberOfVocations--;
            console.log(this.initialNumber + " - " + this.numberOfVocations + " == " + this.temp);
            // this.pages.splice(1, this.pages.length);
            // this.numberOfPages();
            // if((this.initialNumber - this.numberOfVocations) ===  this.temp)
            //  {
            //   this.temp+=this.itemsPerPages;
            //    this.pages.pop();
            // } 
            this.changePage();
        }
    };
    PaginationComponent.prototype.ngOnInit = function () {
        this.numberOfPages();
    };
    PaginationComponent = tslib_1.__decorate([
        Component({
            selector: "app-pagination",
            templateUrl: "./pagination.component.html",
            styleUrls: ["./pagination.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());
export { PaginationComponent };
//# sourceMappingURL=pagination.component.js.map