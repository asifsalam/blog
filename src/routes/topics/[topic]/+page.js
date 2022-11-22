// src/routes/blog/topics/[topic]/+page.js
export const load = ({ params }) => {
    const { topic } = params;

    // console.log(params)
    return { topic }
}