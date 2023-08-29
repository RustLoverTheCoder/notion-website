import { cn, formatDate } from "@/lib/utils";
import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { buttonVariants } from "@/components/ui/button";
import { IconQwik as Icon } from "../ui/icons";
import { Image } from "../Image";

export default component$(() => {
  const post: any = {};
  const authors: any[] = [];
  return (
    <>
      <article class="container relative max-w-3xl py-6 lg:py-10 prose prose-zinc dark:prose-invert">
        <Link
          href="/blog"
          class={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-[-200px] top-14 hidden xl:inline-flex"
          )}
        >
          <Icon clsx="mr-2 h-4 w-4" name="ChevronLeft" />
          See all posts
        </Link>
        <div>
          {post.date && (
            <time
              dateTime={post.date}
              class="block text-sm text-muted-foreground"
            >
              Published on {formatDate(post.date)}
            </time>
          )}
          <h1 class="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
            {post.title}
          </h1>
          {authors?.length ? (
            <div class="mt-4 flex space-x-4">
              {authors.map((author) =>
                author ? (
                  <Link
                    key={author._id}
                    href={`https://twitter.com/${author.twitter}`}
                    class="flex items-center space-x-2 text-sm"
                  >
                    <Image
                      src={author.avatar}
                      alt={author.title}
                      width={42}
                      height={42}
                      class="rounded-full bg-white"
                    />
                    <div class="flex-1 text-left leading-tight">
                      <p class="font-medium">{author.title}</p>
                      <p class="text-[12px] text-muted-foreground">
                        @{author.twitter}
                      </p>
                    </div>
                  </Link>
                ) : null
              )}
            </div>
          ) : null}
        </div>
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={720}
            height={405}
            class="my-8 rounded-md border bg-muted transition-colors"
          />
        )}
        <Slot />
        <hr class="mt-12" />
        <div class="flex justify-center py-6 lg:py-10">
          <Link href="/blog" class={cn(buttonVariants({ variant: "ghost" }))}>
            <Icon clsx="mr-2 h-4 w-4" name="ChevronLeft" />
            See all posts
          </Link>
        </div>
      </article>
    </>
  );
});
