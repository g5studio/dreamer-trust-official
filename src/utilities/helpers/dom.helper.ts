export const createSource = (dom: HTMLVideoElement, url: string) => {
  const sourceDom = document.createElement('source');
  sourceDom.setAttribute('src', url);
  dom.appendChild(sourceDom);
};

const findParents = (node: HTMLElement, list: HTMLElement[] = []): HTMLElement[] => {
  if (node.parentElement) {
    return findParents(node.parentElement, [...list, node.parentElement]);
  }
  return list;
};

export const findParentNodeByName = (node: HTMLElement, name: string): HTMLElement | undefined => {
  const parents = findParents(node);
  return parents.find((element) => element.getAttribute('name') === name);
};
