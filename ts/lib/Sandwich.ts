/// <reference path="../declarations/tsd.d.ts" />

import e = require('./errors');
import Recipe = require('./Recipe');

class Sandwich {

    static make(recipe: Recipe) {
        if (recipe === undefined || recipe === null) {
            throw new e.ArgumentError('A Sandwich requires a Recipe.', 'recipe');
        }
        // TODO: Implement make
    }

    static remake(recipe: Recipe) {
        if (recipe === undefined || recipe === null) {
            throw new e.ArgumentError('A Sandwich requires a Recipe.', 'recipe');
        }
        // TODO: Implement remake
    }
}

export = Sandwich;
