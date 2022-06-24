import Container from "@components/Container";
import PostMetaTitle from "@components/PostMetaTitle";
import PostAuthor from "@components/PostAuthor";
import Head from "next/head";
import { formatDate } from "utils/utils";
import ReactMarkdown from "react-markdown";

export async function getServerSideProps({ params: { slug } }) {
  // console.log(params);
  const reqDetail = await fetch(
    process.env.NEXT_PUBLIC_URLAPI + "/posts?slug=" + slug
  );
  const single = await reqDetail.json();

  if (!single.length)
    return {
      notFound: true,
    };

  return {
    props: {
      single: single.length > 0 ? single[0] : {},
    },
  };
}

export default function Detail({
  single: {
    title,
    category,
    published_at,
    author,
    thumbnail,
    headline,
    content,
  },
}) {
  // console.log(single);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
          <PostMetaTitle
            category={category.name}
            date={formatDate(published_at)}
            title={title}
            center
          />
          <PostAuthor
            authorName={author.name}
            authorJob={author.job}
            authorAvatar={process.env.NEXT_PUBLIC_URLAPI + author.avatar.url}
          />
        </div>
        <div className="md:w-10/12 w-full mx-auto my-10">
          <img
            src={process.env.NEXT_PUBLIC_URLAPI + thumbnail.url}
            className="w-full rounded-lg"
          />
        </div>
        <div className="md:w-8/12 w-full mx-auto leading-relaxed">
          <p className="text-xl mb-4">{headline}</p>
          <ReactMarkdown className="prose">{content}</ReactMarkdown>
        </div>
      </Container>
    </>
  );
}
