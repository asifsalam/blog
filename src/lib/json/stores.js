import { writable } from "svelte/store";

export const articleList = writable([]);
export const postList = writable([]);
export const allCategories = writable([]);
export const allThemes = writable([]);
export const clickedCategory = writable('all');