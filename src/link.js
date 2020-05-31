function contextMenuAction(info, tab) {
  if (info.menuItemId == "deep-dive-link") {
    const delimiter = ":~:text=";
    let shallow_url = tab.url.split(delimiter)[0];
    let anchor = shallow_url.includes("#") ? "" : "#";
    let deepLink = encodeURI(shallow_url
                             + anchor
                             + delimiter
                             + info.selectionText);

    navigator.clipboard
      .writeText(deepLink)
      .then(
        () => { console.log("DeepDive: Clipboard set to deep link"); },
        () => { console.log("DeepDive: Failed to set clipboard"); });
  }
}

browser.contextMenus.create(
  {
    id: "deep-dive-link",
    title: "Copy Deep Link",
    contexts: ["selection"]
  });

browser.contextMenus.onClicked.addListener(contextMenuAction);
