import { Component } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    public collapsed: boolean = true;

    constructor(private dataStorageService: DataStorageService) { }

    onSaveData() {
        this.dataStorageService.storeRecipe();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }

}