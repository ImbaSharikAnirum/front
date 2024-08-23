import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../../configs/constants";

export const courseAPI = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API,
  }),
  endpoints: (builder) => ({
    fetchCourseById: builder.query({
      query: (id) => ({
        url: `/groups/${id}?&populate[teacher][populate][photo]=*&populate[images]=*&populate[city]=*&populate[address]=*populate[district]=*`,
        method: "GET",
      }),
    }),
    // Можно добавить другие эндпоинты, если нужно
  }),
});

export const { useFetchCourseByIdQuery } = courseAPI;
