export async function load({ params }) {
    const post = await import(`../${params.id}.md`)
    const metadata = post.metadata;
    const content = post.default;

    return {
        postData: {
            metadata,
            content
        }
    }
}