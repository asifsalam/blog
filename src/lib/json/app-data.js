const allCategories = [
    {
        id: 0,
        category: 'all',
        title: 'All',
        subCategory: ['all'],
        img: '/static/img/icons/book-svgrepo-com-2.svg',
        numArticles: 95
    },
    {
        id: 1,
        category: 'mypost',
        title: 'My posts',
        subCategory: ['myposts'],
        img: '/static/img/icons/book-svgrepo-com-2.svg',
        numArticles: 0
    },
    {
        id: 11,
        category: 'book',
        title: 'Books',
        subCategory: ['book'],
        img: '/static/img/icons/book-svgrepo-com-2.svg',
        numArticles: 10
    },
    {
        id: 12,
        category: 'education',
        subCategory: ['learning', 'tutorial', 'course', 'contest'],
        title: 'Education',
        img: '/static/img/icons/tutorials-svgrepo-com.svg',
        numArticles: 15
    },
    {
        id: 13,
        category: 'rstats',
        subCategory: ['rstats'],
        title: 'Rstats',
        img: '/static/img/icons/r-svgrepo-com.svg',
        numArticles: 17
    },
    {
        id: 14,
        category: 'python',
        subCategory: ['python'],
        title: 'Python',
        img: '/static/img/icons/python-svgrepo-com.svg',
        numArticles: 23
    },
    {
        id: 15,
        category: 'method',
        title: 'Methods',
        subCategory: ['method', 'model'],
        img: '/static/img/icons/method-chemistry-svgrepo-com.svg',
        numArticles: 19
    },
    {
        id: 16,
        category: 'organization',
        title: 'Organization & Process',
        subCategory: ['organization', 'process'],
        img: '/static/img/icons/organization-people-group-public-svgrepo-com.svg',
        img2: '/static/img/icons/process-graph-svgrepo-com.svg',
        numArticles: 6
    },
    {
        id: 17,
        category: 'inspiration',
        title: 'Inspiration',
        subCategory: ['newsletter', 'inspiration', 'example'],
        img: '/static/img/icons/inspiration-art-svgrepo-com.svg',
        numArticles: 7
    },
    {
        id: 18,
        category: 'cautionarytale',
        title: 'Cautionary Tales',
        subCategory: ['cautionarytale', 'pitfall'],
        img: '/static/img/icons/caution-svgrepo-com.svg',
        numArticles: 5
    }
];
const allThemes = ['datadrivenenterprise',
    'dataliteracy',
    'dataviz',
    'techniques',
    'pitfalls',
    'inspiration',
    'process'];
const allTopics = [
    'datadrivenenterprise',
    'rstats',
    'python',
    'tutorial',
    'book',
    'machinelearning',
    'datascience',
    'statistics',
    'dataliteracy',
    'art',
    'dataviz',
    'method',
    'process',
    'tool',
    'äll'
]

export { allCategories, allThemes, allTopics }