import * as d3 from 'd3';

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function paddedRandomIntFromInterval(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    let paddedRandomNumber = randomNumber > 9 ? String(randomNumber) : String('0' + randomNumber);
    return paddedRandomNumber;
}

function loadPosts(postApi = '/api/posts.json') {
    const load = async ({ fetch }) => {
        const posts = await fetch(postApi);
        const allPosts = await posts.json();
        return {
            allPosts
        }
    };
    let myPosts = load()
    myPosts = parsePosts(myPosts)
    return {
        myPosts
    }

};



function parsePosts(posts) {

    posts.forEach((d) => {
        (d.author = d.meta.author),
            (d.excerpt = d.meta.excerpt),
            (d.img_url = d.meta.preview_image),
            (d.link = d.path),
            (d.post_date = d.meta.post_date),
            (d.tags = d.meta.categories),
            (d.title = d.meta.title);
        delete d.meta;
        delete d.path;
        return d;
    });
    return posts
}

function loadArticles(numArticles = 0, dataFile = "/static/data/processed_links-small.csv", sep = ";") {
    let articleData;
    async function load() {
        let data = await d3.dsv(sep, dataFile, (d) => {
            return parseArticle(d);
        });
        if (numArticles > 0) {
            return data.slice(0, numArticles);
        } else {
            return data;
        }
    }
    articleData = load();
    return articleData;
}


function parseArticle(d) {
    return {
        // id: d.id,
        author: d.article_author,
        excerpt: d.article_excerpt,
        // img_file: d.img_file,
        img_url: d.img_url,
        // img_type: d.img_type,
        link: d.link,
        link_id: d.link_id,
        link_type: d.link_type,
        // media_type: d.media_type,
        post_date: d.post_date,
        // processed_date: d.processed_date,
        sequence: d.sequence,
        // site: d.site_manual,
        // status: d.status,
        tags: d.categories.split(';'),
        title: d.article_title
    };
}

function capitalizeFirstLetter(word) {
    const capitalized =
        word.charAt(0).toUpperCase()
        + word.slice(1)
    return capitalized
}

function filterCategory(articles, category) {
    // console.log("filterCategory: ", articles, category);
    let result;
    if (category.category === "all") {
        result = articles;
    } else {
        result = articles.filter((x) => {
            let includesCategory = false;
            x.tags.forEach((element) => {
                if (category.subCategory.includes(element)) {
                    includesCategory = true;
                }
            });
            if (includesCategory) {
                return x;
            }
        });
    }
    return result;
}

function filterTheme(articles, theme) {
    console.log("filterTheme: ", articles, theme)
    let result;
    if (theme === "all") {
        result = articles;
        // console.log("FilterTheme: ", theme);
        // console.log("FilterTheme: result ", result.length);
    } else {
        result = articles.filter(x => {
            console.log('tags: ', x.tags);
            let includesTheme = false;
            x.tags.forEach(element => {
                if (theme == element) {
                    includesTheme = true;
                }
            });
            if (includesTheme) {
                console.log('filtered: ', x.tags);
                return x;
            }
        });
    }
    // filteredArticles = result;
    // let numArticles = result.length;
    return result;
}

function filterTopic(articles, topic) {
    let result;
    if (topic === "all") {
        result = articles;
    } else {
        result = articles.filter((x) => {
            if (x.tags.includes(topic)) {
                return x;
            }
        });
    }
    return result;
}

function filterTopic1(articles, topic) {
    let result;
    if (topic === "all") {
        result = articles;
    } else {
        result = articles.filter((x) => {
            console.log('tags: ', x.tags);
            if (x.tags.includes(topic)) {
                return x;
            }

        });
    }
    return result;
}

export {
    randomIntFromInterval, paddedRandomIntFromInterval, parsePosts, parseArticle, capitalizeFirstLetter, loadArticles, loadPosts,
    filterCategory, filterTheme, filterTopic
} 