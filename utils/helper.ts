import config from '../config';

export const removeTrailingSlashes = (str: string): string => str.replace(/^\/|\/$/g, '');

export const siteUrl = (path?: string, withProtocol = true): string => {
  const protocol = withProtocol ? `http${config.app.is_secure ? 's' : ''}://` : '';
  const base = removeTrailingSlashes(config.app.base_url);
  const endpoint = path ? removeTrailingSlashes(path) : '';

  return `${protocol}${base}/${endpoint}`;
};

export const appendQueryString = (uri: string, key: string, value: string): string => {
  const baseUri = uri.replace(/\/$/, '');
  const pattern = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
  const separator = baseUri.indexOf('?') === -1 ? '?' : '&';

  if (baseUri.match(pattern)) {
    return baseUri.replace(pattern, '$1' + key + '=' + value + '$2');
  }

  return baseUri + separator + key + '=' + value;
};

export const nl2Br = (str: string): string => str.replace(/\n/g, '<br />');

export function nFormatter(num: number, digits?: number) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });

  return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0';
}
