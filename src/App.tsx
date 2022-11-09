import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { BaseButton, ComboBox, DatePicker, DefaultButton, defaultDatePickerStrings, IComboBoxOption, TextField, Toggle } from '@fluentui/react';
import moment from 'moment';
import "./App.css";

function App() {

  const onFormatDate = (date?: Date): string => {
    return !date ? '' : moment(date).format('YYYY-MM-DD');
  };
  const options: IComboBoxOption[] = [
    { key: 'Expense:日用:窗帘', text: 'Expense:日用:窗帘' },
    { key: 'Assets:yyc:weixin', text: 'Assets:yyc:weixin' }
  ]

  const costOptions: IComboBoxOption[] = [
    { key: 'CNY', text: 'CNY' },
    { key: 'USD', text: 'USD' },
    { key: 'HKD', text: 'HKD' },
  ]
  const pricesOption: IComboBoxOption[] = [
    { key: 'price', text: '@' },
    { key: 'totalCost', text: '@@' },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="flex-none basis-1/4 p-4">
          <DatePicker label="Date"
            showWeekNumbers={true}
            firstWeekOfYear={1}
            showMonthPickerAsOverlay={true}
            strings={defaultDatePickerStrings}
            formatDate={onFormatDate}></DatePicker>
        </div>
        <div className="flex-none basis-1/4 p-4">
          <TextField label="Payee" />
        </div>
        <div className="flex-none basis-1/2 p-4">
          <TextField label="Narration" />
        </div>
      </div>
      <div>
        <div className="flex">
          <div className="flex-1 basis-1/2 p-4">
            <ComboBox allowFreeform={true}
              options={options}
              selectedKey={"Expense:日用:窗帘"}>
            </ComboBox>
          </div>
          <div className="flex-1 basis-1/8 p-4">
            <TextField type="number" value="233">
            </TextField>
          </div>
          <div className="flex-1 basis-1/8 p-4">
            <ComboBox allowFreeform={true}
              options={costOptions}
              selectedKey={"HKD"}>
            </ComboBox>
          </div>
          <div className="flex-1 basis-1/8 p-4">
              <DefaultButton className="mx-auto" style={{
                width:'100%'
              }}>@</DefaultButton>
          </div>
          <div className="flex-1 basis-1/8 p-4">
          <DefaultButton className="mx-auto" style={{
                width:'100%'
              }}>+</DefaultButton>
          </div>

        </div>
        <div className="flex">
          <div className="flex justify-end flex-none basis-2/3 p-4">
            <div className="w-1/4">
              <ComboBox
                options={pricesOption}
                selectedKey={"totalCost"}>
              </ComboBox>
            </div>
          </div>
          <div className="flex-none basis-1/6 py-4 pl-4 pr-1">
            <TextField type="number" value="186.4">
            </TextField>
          </div>
          <div className="flex-none basis-1/6 py-4 pl-1 pr-4">
            <ComboBox allowFreeform={true}
              options={costOptions}
              selectedKey={"CNY"}>
            </ComboBox>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex-none basis-2/3 p-4">
          <ComboBox allowFreeform={true}
            options={options}
            selectedKey={"Assets:yyc:weixin"}>
          </ComboBox>
        </div>
      </div>
    </div>
  );
}

export default App;
