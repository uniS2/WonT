function getNode(selector: string, context = document) {
  return context.querySelector(selector);
}

function getNodeList(selector: string, context = document) {
  return context.querySelectorAll(selector);
}

export { getNode, getNodeList };
