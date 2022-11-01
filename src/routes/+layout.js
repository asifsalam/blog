import * as d3 from 'd3';
import { parseArticle, parsePosts } from '/src/lib/modules/utility_functions';
import { allCategories, allThemes, allTopics } from '$lib/json/app-data';
// const dataFile = 'https://raw.githubusercontent.com/asifsalam/datasets/master/processed_links-small.csv';
const dataFile = '/data/processed_links-small.csv';
const postFile = '/data/my_posts.csv';

export async function load({ fetch }) {
    // const articleList = await d3.dsv(";", dataFile)
    const response = await fetch(dataFile);
    const textData = await response.text();
    const xsv = d3.dsvFormat(";")
    const articleData = xsv.parse(textData);
    // console.log("page-js; ", articleData);
    let articles = [];
    articleData.forEach((d, i) => {
        articles[i] = parseArticle(d)
    })
    // console.log(articleData);
    const repsonse2 = await fetch(postFile);
    const textData2 = await repsonse2.text();
    const postData = xsv.parse(textData2);
    let posts = []
    postData.forEach((d, i) => {
        posts[i] = parseArticle(d)
    })
    // console.log(postData, posts);
    return {
        articles, posts, allCategories, allThemes, allTopics
    }
}
