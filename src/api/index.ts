const API_URL = 'https://api.carbonintensity.org.uk';

export const get = async <T>(url: string, config?: any): Promise<T> => {
  const res = await fetch(`${API_URL}${url}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    ...config,
  });

  if (res.status >= 400) {
    throw new Error('Error');
  }

  return res.json();
};

const api = {
  get,
};

export default api;
