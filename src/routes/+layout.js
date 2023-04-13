import * as d3 from 'd3';
import { parseArticle, parsePosts } from '/src/lib/modules/utility_functions';
import { allCategories, allThemes, allTopics } from '$lib/json/app-data';
const postFile = '/data/my_posts.csv';
const dataFile = '/data/processed_links-small.csv';
// const dataFile = 'https://raw.githubusercontent.com/asifsalam/datasets/master/processed_links-small.csv';

export const ssr = false;
export async function load({ fetch }) {
    const response = await fetch(dataFile);
    const textData = await response.text();
    const xsv = d3.dsvFormat(";")
    const articleData = xsv.parse(textData);

    /**
     * @type {any[]}
     */
    let articles = [];
    articleData.forEach((d, i) => {
        articles[i] = parseArticle(d)
    })

    const repsonse2 = await fetch(postFile);
    const textData2 = await repsonse2.text();
    const postData = xsv.parse(textData2);

    /**
     * @type {any[]}
     */
    let posts = []
    postData.forEach((d, i) => {
        posts[i] = parseArticle(d)
    })

    articles = [...posts, ...articles];
    return {
        articles, posts, allCategories, allThemes, allTopics
    }
}
