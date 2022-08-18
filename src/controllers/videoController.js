import Video from "../models/Video";

// callback style
// Video.find({}, (error, videos) => {
// });
export const home = async (req, res) => {
  // promise style
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const id = req.params.id;
  return res.render("watch", { pageTitle: `Watching: ` });
};

export const getEdit = (req, res) => {
  const id = req.params.id;
  return res.render("edit", { pageTitle: `Editting: ` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  // === const id = req.params.id;
  const title = req.body.title;
  //  === const { title } = req.params
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};

export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
