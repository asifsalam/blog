export async function load({ params }) {
    const post = await import(`../${params.id}.md`)
    const metadata = post.metadata;
    const content = post.default;
    console.log(post);
    return {
        postData: {
            metadata,
            content
        }
    }
}