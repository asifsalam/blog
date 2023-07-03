import * as d3 from 'd3';

function getImageUrl(article) {
    //grab a random image if img_type is "rep"lace
    const baseImageUrl = '/img/images/geometric-pattern-';
    const minImg = 1;
    const maxImg = 34; //max number of images in /img/images/folder
    let img_url;
    if (article.img_type === "rep") {
        img_url = baseImageUrl.concat(paddedRandomIntFromInterval(minImg, maxImg), '.jpg');
    } else {
        img_url = article.img_url;
    }
    return (img_url)
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * @param {number} min
 * @param {number} max
 */
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

/**
 * @param {any[] | Promise<{ allPosts: any; }>} posts
 */
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
        sequence: d.sequence,
        link_id: d.link_id,
        link: d.link,
        title: d.article_title,
        author: d.article_author,
        post_date: d.post_date,
        excerpt: d.article_excerpt,
        tags: d.categories.split(';'),
        site: d.site_manual,
        link_type: d.link_type,
        img_type: d.img_type,
        img_url: d.img_url,
        author_image: d.author_image,
        author_url: d.author_url
        // img_file: d.img_file,        
        // media_type: d.media_type,
        // processed_date: d.processed_date,
        // status: d.status,        
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
    filterCategory, filterTheme, filterTopic, getImageUrl
} 