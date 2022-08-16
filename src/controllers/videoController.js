let videos = [
  {
    title: "First video",
    rating: 4,
    comments: 2,
    createAt: "32 minutes ago",
    views: 512,
    id: 1,
  },
  {
    title: "Second video",
    rating: 2,
    comments: 0,
    createAt: "2 minutes ago",
    views: 1,
    id: 2,
  },
  {
    title: "Third video",
    rating: 5,
    comments: 72,
    createAt: "3 hours ago",
    views: 12510,
    id: 3,
  },
];
export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const id = req.params.id;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editting: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  // === const id = req.params.id;
  const title = req.body.title;
  //  === const { title } = req.params
  // 실제로 이렇게 사용하지는 않고, fake database이기 때문에 사용(밑의 내용)
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
