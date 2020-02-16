import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    public collapsed: boolean = true;
    @Output() featureSelected = new EventEmitter<string>();

    public onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}