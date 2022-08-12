export const trending = (req, res) => {
  const videos = [
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
      views: 52,
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
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });

export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
