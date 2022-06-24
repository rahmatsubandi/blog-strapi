import Link from "next/link";
import InfoPost from "@components/InfoPost";

export default function CardPost({
  slug,
  title,
  category,
  published_at,
  author,
  thumbnail,
  headline,
}) {
  return (
    <article>
      <Link href={`/${slug}`}>
        <a>
          <img
            src={
              process.env.NEXT_PUBLIC_URLAPI + thumbnail.formats.thumbnail.url
            }
            className="w-full rounded mb-4"
          />
        </a>
      </Link>
      <InfoPost
        slug={slug}
        category={category.name}
        date={published_at}
        title={title}
        shortDescription={headline}
        authorAvatar={process.env.NEXT_PUBLIC_URLAPI + author.avatar.url}
        authorName={author.name}
        authorJob={author.job}
      />
    </article>
  );
}
