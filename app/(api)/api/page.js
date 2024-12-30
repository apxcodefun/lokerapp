export default async function api() {
    const res = await fetch('https://open-api.my.id/api/wilayah/provinces');
    const posts = await res.json();

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.name}</li>
                ))}
            </ul>
        </div>
    );
}