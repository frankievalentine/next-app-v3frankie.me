import Image from "next/image"

const posts = [
  {
    id: 1,
    title: "Life update #1",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Photos", href: "#" },
    author: {
      name: "Frankie Valentine",
      role: "Founder",
      href: "#",
      imageUrl: "/images/avatar-bw.jpg",
    },
  },
  // More posts...
]

export default function HomePosts() {
  return (
    <section className="container">
      <div className="dark:bg-inherit sm:py-10">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Recent updates
            </h2>
            <p className="dark:text-muted-foreground mt-2 text-lg leading-8 text-gray-600 dark:text-white">
              My most recent updates in my life, work, and dailies.
            </p>
          </div>
          <div className="mx-auto mb-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-500 pt-10 sm:mt-2 sm:pt-4">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={post.datetime}
                    className="text-gray-500 dark:text-white"
                  >
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="dark:text relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-white">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image
                    width={100}
                    height={100}
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
