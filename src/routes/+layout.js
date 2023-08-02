import * as d3 from 'd3';
import { parseArticle, parsePosts } from '/src/lib/modules/utility_functions';
// import {categories, themes, tags, allThemes, allTopics } from '$lib/json/app-data';
import { themes, categories, tags, allCategories, allThemes, allTopics } from '$lib/json/categories';
// const postFile = '/data/my_posts.csv';
// const dataFile = '/data/basic_resource_link_data.csv';
const dataFile = '/data/link_data_full-v2.csv';
// const dataFile = 'https://raw.githubusercontent.com/asifsalam/datasets/master/processed_links-small.csv';

export const ssr = false;
export async function load({ fetch }) {
    const response = await fetch(dataFile);
    const textData = await response.text();
    const xsv = d3.dsvFormat(";")
    const articleData = xsv.parse(textData)
        .filter((d) => d.link_type !== "blog")
        .filter((d) => d.link_type !== "site");

    /**
     * @type {any[]}
     */
    let articles = [];
    articleData
        .forEach((d, i) => {
            articles[i] = parseArticle(d)
        })

    // console.log(articles[1]);
    articles.sort((a, b) => {
        if (a.link_id > b.link_id) {
            // console.log(a, b)
            return -1
        } else {
            return 1;
        }
    })

    // const repsonse2 = await fetch(postFile);
    // const textData2 = await repsonse2.text();
    // const postData = xsv.parse(textData2);

    const posts = articles.filter((d) => d.link_type === "my-post");
    const siteData = articles.filter((d) => d.link_type === "site");

    // articles = articles.slice(0, 5);

    return {
        articles, posts, themes, categories, tags, allCategories, allThemes, allTopics
    }
}

/**
 * @type {any[]}
 */
    // let posts = []
    // postData.forEach((d, i) => {
    //     posts[i] = parseArticle(d)
    // })

    // posts = posts.sort((first, second) =>
    // new Date(second.date).getTime() - new Date(first.date).getTime()
    // second.link_id - first.link_id
    // )
    // posts = posts.sort((a, b) => {
    //     if (a.link_id > b.link_id) {
    //         return -1;
    //     } else {
    //         return 1;
    //     }
    // });
