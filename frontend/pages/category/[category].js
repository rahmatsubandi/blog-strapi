import Container from "@components/Container";
import SectionHeader from "@components/SectionHeader";
import PostList from "@components/PostList";
import Head from "next/head";

export async function getServerSideProps({
  params: { category: categorySlug },
}) {
  const reqCategory = await fetch(
    process.env.NEXT_PUBLIC_URLAPI + "/categories?slug=" + categorySlug
  );
  const category = await reqCategory.json();
  const reqPosts = await fetch(
    process.env.NEXT_PUBLIC_URLAPI +
      "/posts?_where[category.slug]=" +
      categorySlug
  );
  const posts = await reqPosts.json();

  return {
    props: {
      posts,
      category: category.length > 0 ? category[0] : {},
    },
  };
}

export default function Posts({ posts, category }) {
  return (
    <>
      <Head>
        <title>Category &mdash; {category.name}</title>
      </Head>
      <Container>
        <SectionHeader>{category.name}</SectionHeader>
        <PostList
          posts={posts}
          noresultTitle="No Posts😢"
          noresultDecription="Sorry, category no have posts. Please comeback again."
        />
      </Container>
    </>
  );
}
