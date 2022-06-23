import Link from "next/link";
import InfoPost from "@components/InfoPost";

export default function CardPost(props) {
  // console.log(props);
  return (
    <article>
      <Link href={props.slug}>
        <a>
          <img
            src={
              process.env.NEXT_PUBLIC_URLAPI +
              props.thumbnail.formats.thumbnail.url
            }
            className="w-full rounded mb-4"
          />
        </a>
      </Link>
      <InfoPost
        slug={props.slug}
        category={props.category.name}
        date={props.published_at}
        title={props.title}
        shortDescription={props.headline}
        authorAvatar={process.env.NEXT_PUBLIC_URLAPI + props.author.avatar.url}
        authorName={props.author.name}
        authorJob={props.author.job}
      />
    </article>
  );
}
