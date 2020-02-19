import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelecte = new EventEmitter<Recipe>();
  public recipes: Array<Recipe> = [
    new Recipe('A Test Recipe', 'This is simply test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Another Test Recipe', 'This is simply test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  public onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelecte.emit(recipe);
  }

}
