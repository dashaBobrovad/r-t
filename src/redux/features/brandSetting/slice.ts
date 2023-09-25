import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  EFamilies,
  TCategory,
  TSchemeData,
} from '../../../components/Brand/components/Menu/models.ts';
import { EColors } from "../../../components/ui";


const initialState: TSchemeData = {
  editText: [],
  bgColor: [],
  categories: {
    allCategories: [
      // { title: 'верхняя одежда', name: 'outerwear' },
      // { title: 'штаны-oversize', name: 'pants-oversize' },
      // { title: 'category 1', name: 'category1' },
      // { title: 'category 2', name: 'category2' },
      // { title: 'category 3', name: 'category3' },
      // { title: 'category 4', name: 'category4' },
      // { title: 'category 5', name: 'category5' },
      // { title: 'category 6', name: 'category6' },
    ],
    value: [
      // { title: 'штаны-oversize', name: 'pants-oversize' }
    ],
  },
  colorAndFamily: [
    // {
    //   title: 'название бренда',
    //   name: 'brandName',
    //   family: EFamilies.DelaGothicOne,
    //   size: 32,
    //   color: EColors.Black,
    // },
    // {
    //   title: 'о нас',
    //   name: 'about',
    //   family: EFamilies.DelaGothicOne,
    //   size: 32,
    //   color: EColors.Black,
    // },
    // {
    //   title: 'текст с описанием бренда (2 слайд)',
    //   name: 'slide2',
    //   family: EFamilies.DelaGothicOne,
    //   size: 32,
    //   color: EColors.Black,
    // },
    // {
    //   title: 'категории товаров, кнопки 1,2',
    //   name: 'category',
    //   family: EFamilies.DelaGothicOne,
    //   size: 32,
    //   color: EColors.Black,
    // },
    // {
    //   title: 'заголовок',
    //   name: 'title',
    //   family: EFamilies.DelaGothicOne,
    //   size: 32,
    //   color: EColors.Black,
    // },
    // {
    //   title: 'основной текст',
    //   name: 'mainText',
    //   family: EFamilies.DelaGothicOne,
    //   size: 32,
    //   color: EColors.Black,
    // },
    // {
    //   title: 'текст 2',
    //   name: 'text',
    //   family: EFamilies.DelaGothicOne,
    //   size: 32,
    //   color: EColors.Black,
    // },
  ],
};

// const {data} = useGetBrandPageStyle1DataQuery({ scheme_id: 0, vendor_id: "12" });
// console.log(data);

const brandSettingSlice = createSlice({
  name: "brandSettingAlias",
  initialState, // тут брать инфо из приходящих данных
  reducers: {
    setBaseData(state,
      action: PayloadAction<{
        data: any;
        schemeId: number;
      }>) {

      const { data, schemeId } = action.payload as any;

      if (data) {
        // TODO: fx any
        let editTextData = [] as any;
        let colorAndFamilyData = [] as any;
        switch (schemeId) {
          case 0: {
            editTextData = [
              { name: "name", title: "Название", value: data.name },
              { name: "about", title: "О нас", value: data.about },
              { name: "description_2page", title: "2 страница слайдера", value: data.description_2page },
              { name: "heading", title: "Заголовок 1", value: data.heading },
              { name: "text1_block", title: "Текстовый блок 1", value: data.text1_block },
              { name: "heading2", title: "Заголовок 2", value: data.heading2 },
              { name: "text2_block", title: "Текстовый блок 2", value: data.text2_block },
              { name: "text2", title: "Заголовк", value: data.text2 },
            ];
            colorAndFamilyData = [
              {
                title: 'Название',
                name: 'name',
                family: data.name_param.fontFamily,
                size: data.name_param.fontSize,
                color: data.name.color,
              }
            ];
          };
          case 1: editTextData = [];
          case 2: editTextData = [
            { name: "heading1", title: "Заголово 1", value: data.heading1 },
            { name: "text1_block", title: "Текстовый блок 1", value: data.text1_block },
            { name: "heading2", title: "Заголовок 2", value: data.heading2 },
            { name: "text2_block", title: "Текстовый блок 2", value: data.text2_block },
            { name: "heading3", title: "Заголовок 3", value: data.heading3 },
          ];
          default: []
        };

        const bgColorData = [
          { name: "background_color", title: "Цвет фона", value: data.background_color },
        ];



        return {
          ...state,
          editText: editTextData,
          bgColor: bgColorData,
          colorAndFamily: colorAndFamilyData,
        }
      }

    },

    setBrandSettingsByField(
      state,
      action: PayloadAction<{
        field: keyof TSchemeData;
        newData: TSchemeData[keyof TSchemeData];
      }>,
    ) {
      return {
        ...state,
        [action.payload.field]: action.payload.newData,
      };
    },

    addCategory(state, action: PayloadAction<TCategory>) {
      const currentCategoriesMap = new Map(
        [...state.categories.value, action.payload].map((category) => [
          category.name,
          category,
        ]),
      );
      return {
        ...state,
        categories: {
          ...state.categories,
          value: [...currentCategoriesMap.values()],
        },
      };
    },
    removeCategory(state, action: PayloadAction<TCategory>) {
      return {
        ...state,
        categories: {
          ...state.categories,
          value: state.categories.value.filter(
            (category) => category.name !== action.payload.name,
          ),
        },
      };
    },
  },
});

export default brandSettingSlice.reducer;
export const { setBaseData, setBrandSettingsByField, addCategory, removeCategory } =
  brandSettingSlice.actions;
