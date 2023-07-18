import type { Metadata } from "next"

// import Image from "next/image";
// import Link from "next/link";
// import clsx from "clsx";

// import portraitImage from "../placeholder.jpg";

export const metadata: Metadata = {
  title: "Blog",
  description: "Founder of V3 Digital Studio.",
}

export default function Blog() {
  return (
    <>
      <div className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            {/* <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div> */}
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Blog Page
            </h1>
            {/* <div className="mt-6 text-lg prose space-y-7 dark:prose-invert text-zinc-600 dark:text-zinc-400">
              <p>Read my blogs</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

// import type { Metadata } from "next";
// import { Card } from "@/components/Card";
// import { SimpleLayout } from "@/components/SimpleLayout";
// import { getAllArticles } from "@/lib/getAllArticles";
// import { formatDate } from "@/lib/formatters";

// function Article({ article }) {
//   return (
//     <article className="md:grid md:grid-cols-4 md:items-baseline">
//       <Card className="md:col-span-3">
//         <Card.Title href={`/articles/${article.slug}`}>
//           {article.title}
//         </Card.Title>
//         <Card.Eyebrow
//           as="time"
//           dateTime={article.date}
//           className="md:hidden"
//           decorate
//         >
//           {formatDate(article.date)}
//         </Card.Eyebrow>
//         <Card.Description>{article.description}</Card.Description>
//         <Card.Cta>Read article</Card.Cta>
//       </Card>
//       <Card.Eyebrow
//         as="time"
//         dateTime={article.date}
//         className="mt-1 hidden md:block"
//       >
//         {formatDate(article.date)}
//       </Card.Eyebrow>
//     </article>
//   );
// }

// // <NextSeo
// //   title="Articles - Brian Ketelsen"
// //   description={siteMeta.description}
// //   canonical="https://brian.dev/articles"
// //   openGraph={{
// //     url: "https://brian.dev/articles",
// //     images: [
// //       {
// //         url: `https://og.brian.dev/api/og?title=Articles&desc=${headline}`,
// //         width: 1200,
// //         height: 600,
// //         alt: "Og Image Alt",
// //         type: "image/jpeg",
// //       },
// //     ],
// //     siteName: "brian.dev",
// //   }}
// // />;

// export const metadata: Metadata = {
//   title: "About",
//   description: "VP of Developer Experience at Vercel.",
// };

// export default function ArticlesIndex({ articles }) {
//   const headline = "I write about things I’m learning and things I’m building.";
//   const intro =
//     "All of my long-form thoughts on programming, leadership, infrastructure, and more, collected in chronological order.";

//   return (
//     <>
//       <SimpleLayout title={headline} intro={intro}>
//         <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
//           <div className="flex max-w-3xl flex-col space-y-16">
//             {articles.map((article) => (
//               <Article key={article.slug} article={article} />
//             ))}
//           </div>
//         </div>
//       </SimpleLayout>
//     </>
//   );
// }

// export async function getStaticProps() {
//   return {
//     props: {
//       articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
//     },
//   };
// }
