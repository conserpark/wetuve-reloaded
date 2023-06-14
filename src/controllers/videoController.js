let videos = [
  {
    title: "Hello",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Video #2",
    rating: 3,
    comments: 6,
    createdAt: "10 minutes ago",
    views: 54,
    id: 2,
  },
  {
    title: "Whatsup",
    rating: 4,
    comments: 1,
    createdAt: "22 minutes ago",
    views: 154,
    id: 3,
  },
];

export const trending = (req, res) => res.render("home", { pageTitle: "Home", videos });
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
