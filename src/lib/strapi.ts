import qs from "qs";

interface Props {
  endpoint: string;
  query?: Record<string, any>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
  token?: string;
  fields?: string[];
  populate?: Record<string, any> | string;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @param token - The Bearer token for authorization
 * @param fields - Fields to select from the response
 * @param populate - Population instructions for the response
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query = {},
  wrappedByKey,
  wrappedByList,
  token,
  fields,
  populate,
}: Props): Promise<T> {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }

  if (fields) {
    query.fields = fields;
  }

  if (populate) {
    query.populate =
      typeof populate === "object"
        ? qs.stringify(populate, { encode: false })
        : populate;
  }

  const queryString = qs.stringify(query, { encodeValuesOnly: true });
  const url = new URL(
    `${import.meta.env.STRAPI_URL}/api/${endpoint}?${queryString}`
  );

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url.toString(), { headers });
  if (!res.ok) {
    throw new Error(`Error fetching data: ${res.statusText}`);
  }

  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList && Array.isArray(data)) {
    data = data[0];
  }

  return data as T;
}
