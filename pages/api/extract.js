export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const url = JSON.parse(req.body);
      if (!url.data) {
        return res
          .status(400)
          .json({ success: false, msg: "Error : Invalid Request" });
      }
      try {
        const resp = await fetch(url.data);
        const txt = await resp.text();
        res.status(200).send(txt);
      } catch (error) {
        res
          .status(400)
          .json({ success: false, msg: "Error : " + error.message });
      }
      break;
    default:
      res.status(400).json({ success: false, msg: "Error : Invalid Request" });
      break;
  }
}
