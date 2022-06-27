import Container from "@components/Container";
import SectionHeader from "@components/SectionHeader";
import PostList from "@components/PostList";
import Head from "next/head";

export async function getServerSideProps({ query: { q } }) {
  const reqPosts = await fetch(
    process.env.NEXT_PUBLIC_URLAPI + "/posts?title_contains=" + q
  );
  const posts = await reqPosts.json();

  return {
    props: {
      posts,
      q,
    },
  };
}

export default function Search({ posts, q }) {
  return (
    <>
      <Head>
        <title>Search &mdash; BlogStrap</title>
      </Head>
      <Container>
        <SectionHeader>Search: {q}</SectionHeader>
        <PostList posts={posts} />
        {/* {!posts.length ? (
          <div className="text-center py-20">
            <h2 className="text-6xl">No result 😥</h2>
            <p className="text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">
              We couldn’t find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <div className="flex -mx-4 flex-wrap mt-6">
            {posts.map((post) => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )} */}
      </Container>
    </>
  );
}
