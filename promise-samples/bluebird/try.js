/**
 * Created by dilip on 01/08/17.
 */

"use strict";

function getUserById(id) {
    return Promise.try(function() {
        if (typeof id !== "number") {
            throw new Error("id must be a number");
        }
        return db.getUserById(id);
    });
}