import Link from "next/link";
import InfoPost from "@components/InfoPost";

export default function FeaturedPost({
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
      <div className="flex -mx-4 lg:items-center items-start flex-wrap">
        <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
          <Link href={`/${slug}`}>
            <a>
              <img
                src={process.env.NEXT_PUBLIC_URLAPI + thumbnail.url}
                className="rounded-xl w-full mb-4 md:mb-0"
              />
            </a>
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
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
        </div>
      </div>
      <hr className="border-white/10 mt-10 md:hidden" />
    </article>
  );
}
