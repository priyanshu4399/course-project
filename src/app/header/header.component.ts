import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector : 'app-header',
    templateUrl : "./header.component.html",
    styles : ["./header.component.css"]
})
export class HeaderComponent{
    @Output() featureSelected = new EventEmitter<string>();

    onSelected(feature:string){
        this.featureSelected.emit(feature);
    }
}