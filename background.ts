import { Storage } from "@plasmohq/storage"
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: 'Post to Discord',
    contexts: ["all"],
    id: "sendToDiscord"
  })
})

export type Message = {
  success: boolean;
  link: string;
}

chrome.contextMenus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId === "sendToDiscord") {
    const link = info.srcUrl || info.linkUrl || info.pageUrl;
    const storage = new Storage();
    const webhookUrl = await storage.get("webhookUrl");
    try{
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          content: link
        })
      });
    }
    catch(e){
      console.log(e);
    }

}
})
