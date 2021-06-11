import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
    'Curried Tomato Lentil Soup',
    "This curried tomato lentil soup is one of my go-to pantry recipes! The ingredients are easy to keep on hand",
    "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-580x580.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
