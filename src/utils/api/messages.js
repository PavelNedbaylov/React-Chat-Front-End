import { axios } from "core";

export default {
  getAllByDialogId: id => axios.get("/messages?_id=" + id),
  removeById: id => axios.delete("/messages?id=" + id),
  send: (text, dialogId, attachments) =>
    axios.post("/messages", {
      text: text,
      dialog_id: dialogId,
      attachments
    })
};