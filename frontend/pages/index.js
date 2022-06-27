import Container from "@components/Container";
import FeaturedPost from "@components/FeaturedPost";
import PostList from "@components/PostList";
import Head from "next/head";

export async function getServerSideProps() {
  const reqFeatured = await fetch(
    process.env.NEXT_PUBLIC_URLAPI + "/posts?featured=true"
  );
  const featured = await reqFeatured.json();

  const reqPosts = await fetch(
    process.env.NEXT_PUBLIC_URLAPI + "/posts?featured_ne=true"
  );
  const posts = await reqPosts.json();

  return {
    props: {
      featured: featured.length > 0 ? featured[0] : false,
      posts,
    },
  };
}

export default function Home({ featured, posts }) {
  return (
    <>
      <Head>
        <title>Home &mdash; BlogStrap</title>
      </Head>
      <Container>
        {featured && <FeaturedPost {...featured} />}
        <PostList posts={posts} />
      </Container>
    </>
  );
}
