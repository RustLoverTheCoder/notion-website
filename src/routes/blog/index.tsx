import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@/components/Image";
import { formatDate } from "@/lib/utils";

export default component$(() => {
  const posts: any[] = [];
  return (
    <>
      <div class="container max-w-4xl py-6 lg:py-10">
        <div class="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div class="flex-1 space-y-4">
            <h1 class="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
              Blog
            </h1>
            <p class="text-xl text-muted-foreground">
              A blog built using Contentlayer. Posts are written in MDX.
            </p>
          </div>
        </div>
        <hr class="my-8" />
        {posts?.length ? (
          <div class="grid gap-10 sm:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post._id}
                class="group relative flex flex-col space-y-2"
              >
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={804}
                    height={452}
                    class="rounded-md border bg-muted transition-colors"
                  />
                )}
                <h2 class="text-2xl font-extrabold">{post.title}</h2>
                {post.description && (
                  <p class="text-muted-foreground">{post.description}</p>
                )}
                {post.date && (
                  <p class="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                )}
                <Link href={post.slug} class="absolute inset-0">
                  <span class="sr-only">View Article</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
