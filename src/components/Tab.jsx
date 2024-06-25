import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const categories = [
  {
    name: "Project",
    posts: [
      {
        id: 1,
        title: "Simple Rest API",
        date: "5h ago",
        commentCount: 3,
        shareCount: 2,
        url: 'https://api.alhifnywahid.xyz'
      },
      {
        id: 2,
        title: "Media Tools",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
        url: 'https://tools.alhifnywahid.xyz'
      },
      {
        id: 3,
        title: "Notes on Programing",
        date: "136h ago",
        commentCount: 3,
        shareCount: 2,
        url: 'https://notes.alhifnywahid.xyz/'
      },
    ],
  },
  // {
  //   name: "Trending",
  //   posts: [
  //     {
  //       id: 1,
  //       title: "Ask Me Anything: 10 answers to your questions about coffee",
  //       date: "2d ago",
  //       commentCount: 9,
  //       shareCount: 5,
  //     },
  //     {
  //       id: 2,
  //       title: "The worst advice we've ever heard about coffee",
  //       date: "4d ago",
  //       commentCount: 1,
  //       shareCount: 2,
  //     },
  //   ],
  // },
];

export default function Tabs() {
  return (
    <div className="flex w-full justify-center pt-10">
      <div className="w-full max-w-md">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, posts }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5"
                    >
                      <a href={post.url} target="_blank" className="font-semibold text-white">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                      <ul
                        className="flex gap-2 text-white/50"
                        aria-hidden="true"
                      >
                        <li>{post.date}</li>
                        {/* <li aria-hidden="true">&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.shareCount} shares</li> */}
                      </ul>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
