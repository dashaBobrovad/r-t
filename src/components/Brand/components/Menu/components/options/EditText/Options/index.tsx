import { useContext } from 'react';

import { Collapse, Input, Divider } from '../../../../../../../ui';



// import { brandSettingsTextSelector } from '@/store/brandSetting/selectors';
// import { setBrandSettingsByField } from '@/store/brandSetting/slice';
// import { useAppDispatch, useAppSelector } from '@/hooks/store';

import cx from './index.module.scss';

interface IEditTextOption {
  title: string;
  value: string;
  name: string;
}

const EditTextOption = ({ title, name, value }: IEditTextOption) => {
  //   const dispatch = useAppDispatch();
  //   const editText = useAppSelector(brandSettingsTextSelector);

  const onChange = (newValue: string) => {
    // const newData = editText.map((item) => {
    //   if (item.name === name) {
    //     return {
    //       ...item,
    //       value: newValue,
    //     };
    //   }
    //   return item;
    // });
    // dispatch(setBrandSettingsByField({ field: 'editText', newData }));
    console.log("onChange")
  };

  return (
    <Collapse
      title={title}
      content={
        <Input
          name={name}
          defaultValue={value}
          isTextArea
          className={cx.textarea}
          onChange={(e) => onChange(e.target.value)}
        />
      }
    />
  );
};

const Options = () => {
  //   const dispatch = useAppDispatch();
  //   const editText = useAppSelector(brandSettingsTextSelector);
  // TODO: mock
  const editText = [{
    name: "string",
    value: "string",
    title: "string",
  }]

  return (
    <div>
      {editText?.map((field) => {
        return (
          <div key={field.name}>
            <EditTextOption
              title={field.title}
              name={field.name}
              value={field.value}
            />
            <Divider direction={'horizontal'} />
          </div>
        );
      })}
    </div>
  );
};

export default Options;
