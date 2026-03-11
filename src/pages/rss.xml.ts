import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  const sorted = posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return rss({
    title: "./havu",
    description: "Security Researcher",
    site: context.site!,
    items: sorted.map((post) => {
      const d = new Date(post.data.date);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description ?? "",
        link: `/${y}/${m}/${post.id}/`,
      };
    }),
  });
}
