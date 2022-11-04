class Recipe {
    constructor(ingredients, nameOfRecipe) {
        this.ingredients = ingredients;
        this.nameOfRecipe = nameOfRecipe;
    }
    describe() {
         return '${this.nameOfRecipe} requires ${this.ingredients}';
    }
}

class RecipeBook {
    constructor(name) {
        this.name = name;
        this.recipes = [];
    }

    addRecipes(recipe) {
        if (recipe instanceof Recipe) {
            this.recipe.push(recipe);
        } else {
            throw new Error("You can only add a type of recipe.  Argument is not a type of recipe: ${recipe}");
        }
    }

    describe() {
        return 'return ${this.name} has ${this.recipes.length} recipes.';
    }
}

class Menu {
    constructor() {
        this.recipeBook = [];
        this.selectedRecipeBook = null;
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createRecipeBook();
                    break;
                case '2':
                    this.viewRecipeBook();
                    break;
                case '3':
                    this.deleteRecipeBook();
                    break;
                case '4':
                    this.displayRecipeBooks();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }    
        alert("Goodbye and Good Cooking!");
    }
    showMainMenuOptions() {
        return prompt (`
        0) Exit
        1) Create New Recipe Book
        2) View Recipe Book
        3) Delete Recipe Book
        4) Display All Recipe Books
        `);
    }

    showRecipebookMenuOptions(recipeBookInfo) {
        return prompt(`
        0) back
        1) create recipe
        2) delete recipe
        ------------------------
        ${recipeBookInfo}
        `)
    }

    displayRecipeBooks() {
        let recipeBookString = '';
        for (let i = 0; i < this.recipeBooks.length; i ++) {
            recipeBookString += i + ')' + this.recipeBooks[i].name + '\n';
        }
    alert(recipeBookString);
    }

    createRecipeBook() {
        let name = prompt('Enter name for new recipebook:');
        this.recipeBooks.psuh(new RecipeBook(name));
    }

    viewRecipeBooks() {
        let index = prompt('Enter the index of the recipebook you wish to view:');
        if (index > -1 && index < this.recipeBooks.length) {
            this.selectedRecipebook = this.recipeBooks[index];
            let description = "Recipe Book Name" + this.selectedRecipeBook.name + '\n';

            for (let i = 0; i < this.selectedRecipeBook.recipes.length; i ++) {
                description += i + ') ' + this.selectedRecipeBook.recipes[i].name + ' - ' + this.selectedRecipeBook.recipes[i].position + '\n';

            }
            let selection = this.showRecipeBookMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createRecipe();
                    break;
                case '2':
                    this.deleteRecipe();
                    break;
                

            }

        }
    }
    deleteRecipeBook() {
        let index = prompt("Enter the index of the recipebook you wish to delete:");
        if (index > -1 && index < this.recipeBooks.length) {
            this.recipeBooks.splice(index, 1);
        }
    }
    createRecipe() {
        let nameOfRecipe = prompt('Enter name for new recipe:');
        let ingredients = prompt("Enter ingredients for new Recipe: ");
        this.selectedRecipeBook.recipes.push(new Recipe(nameOfRecipe, ingredients));
    }
    deleteRecipe() {
        let index = prompt("Enter the index of the recipe you wish to delete");
        if (index > -1 && index , this.selectedRecipeBook.recipes.length) {
            this.selectedRecipeBook.recipes.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();
