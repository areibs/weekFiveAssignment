class Recipe {
    constructor(ingredients, nameOfRecipe) {
        this.ingredients = ingredients;
        this.nameOfRecipe = nameOfRecipe;
    }
    describe() {
         return '${this.nameOfRecipe} requires ${this.ingredients}';
    }
}

class Recipebook {
    constructor(name) {
        this.name = name;
        this.recipes = [];
    }

    addRecipes(Recipe) {
        if (Recipe instanceof Recipe) {
            this.Recipe.push(Recipe);
        } else {
            throw new Error("You can only add a type of recipe.  Argument is not a type of recipe: ${Recipe}");
        }
    }

    describe() {
        return 'return ${this.name} has ${this.Recipe.length} recipes.';
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
                    this.displayRecipeBook();
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
        1) Create New Recipe Book
        2) View Recipe Book
        3) Delete Recipe Book
        4) Display All Recipe Books
        5) Exit
        `);
    }

    showRecipebookMenuOptions(recipeBookInfo) {
        return prompt(`
        1) Add a recipe
        2) Delete a recipe
        3) Go back
        ------------------------
        ${RecipebookInfo}
        `)
    }

    displayRecipeBooks() {
        let recipeBookString = '';
        for (let i = 0; i < this.Recipebook.length; i ++) {
            recipeBookString += i + ')' + this.recipeBooks[i].name + '\n';
        }
    alert(recipeBookString);
    }

    createRecipeBook() {
        let name = prompt('Enter name for new recipebook:');
        this.Recipebook.psuh(new RecipeBook(name));
    }

    deleteRecipeBook() {
        let index = prompt("Enter the index of the recipebook you wish to delete:");
        if (index > -1 && index < this.Recipebook.length) {
            this.Recipebook.splice(index, 1);
        }
    }
    viewRecipeBooks() {
        let index = prompt('Enter the index of the recipebook you wish to view:');
        if (index > -1 && index < this.Recipebook.length) {
            this.selectedRecipebook = this.Recipebook[index];
            let description = "Recipe Book Name" + this.selectedRecipebook.name + '\n';

            for (let i = 0; i < this.selectedRecipebook.Recipe.length; i ++) {
                description += i + ') ' + this.selectedRecipebook.Recipe[i].name + ' - ' + this.selectedRecipebook.Recipe[i].position + '\n';

            }
            let selection = this.showRecipebookMenuOptions(description);
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
    
    createRecipe() {
        let nameOfRecipe = prompt('Enter name for new recipe:');
        let ingredients = prompt("Enter ingredients for new Recipe: ");
        this.selectedRecipebook.Recipe.push(new Recipe(nameOfRecipe, ingredients));
    }
    deleteRecipe() {
        let index = prompt("Enter the index of the recipe you wish to delete:");
        if (index > -1 && index , this.selectedRecipebook.Recipe.length) {
            this.selectedRecipebook.Recipe.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();
