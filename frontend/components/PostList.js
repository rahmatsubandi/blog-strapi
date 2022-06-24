import CardPost from "@components/CardPost";

export default function PostList({
  posts,
  noresultTitle = "No result 😓",
  noresultDecription = "We couldn't find any posts your keyword. Please try another keyword.",
}) {
  return (
    <div className="flex -mx-4 flex-wrap mt-6">
      {!posts.length ? (
        <div className="text-center py-20 mx-auto">
          <h2 className="text-6xl">{noresultTitle}</h2>
          <p className="text-xl mt-4 text-white/60 md:w-10/12 w-full mx-auto">
            {noresultDecription}
          </p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
            <CardPost {...post} />
          </div>
        ))
      )}
    </div>
  );
}
