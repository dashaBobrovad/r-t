import { api } from '../baseApi';
import { TestData } from '../../types/testTypes';

export const brandPageStyle1Api = api.injectEndpoints({
    endpoints: (builder) => ({
        getBrandPageStyle1Data: builder.query<TestData, {scheme_id: number, vendor_id: string}>({
            query: ({scheme_id, vendor_id}) => ({
                url: `/BrandPageStyle${scheme_id + 1}/vendor_id=${vendor_id}`,
            }),
        }),
        // createData: builder.mutation<void, TestData>({
        //     query: (body) => ({
        //         url: `/test`,
        //         method: 'POST',
        //         body,
        //     }),
        // }),
        // updateData: builder.mutation<void, { id: string; body: TestData; }>({
        //     query: ({ id, body }) => ({
        //         url: `/test/${id}`,
        //         method: 'PATCH',
        //         body,
        //     }),
        // }),
        // deleteData: builder.mutation<void, { id: string }>({
        //     query: ({ id }) => ({
        //         url: `/test/${id}`,
        //         method: 'DELETE',
        //     }),
        // }),
    }),
});
  
export const {
    useGetBrandPageStyle1DataQuery,
    // useCreateDataMutation,
    // useUpdateDataMutation,
    // useDeleteDataMutation,
} = brandPageStyle1Api;
