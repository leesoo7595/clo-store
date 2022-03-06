export function hasSearchParam(key: string) {
  return new URLSearchParams(new URL(document.URL).search).has(key);
}

export function getSearchParamKeys() {
  const url = new URL(document.URL);
  let keys = [];
  for (const key of new URLSearchParams(url.search).keys()) {
    keys.push(key);
  }
  return keys;
}

export function addSearchParam(key: string, value: any) {
  const url = new URL(document.URL);
  if (Array.from(new URLSearchParams(url.search).keys()).includes(key)) {
    url.searchParams.delete(key);
  }
  url.searchParams.append(key, value);
  window.history.pushState(null, '', url.search);
}

export function removeSearchParam(key: string) {
  const url = new URL(document.URL);
  const params = new URLSearchParams(url.search);
  if (Array.from(params.keys()).includes(key)) {
    window.history.replaceState(key, '', url.origin + url.pathname);
  }
}

export function removeSearchParams() {
  const url = new URL(document.URL);
  window.history.replaceState(null, '', url.origin + url.pathname);
}
