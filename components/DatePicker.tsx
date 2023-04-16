import { useState } from "react";
import { Group } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { ScrollArea } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

export function DatePickerComponent() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <>
      {/* <Group position="center">
        <ScrollArea h={500}>
          <DatePicker
            value={value}
            type="range"
            onChange={setValue}
            numberOfColumns={12}
            classNames={{
              calendar: "calendar",
              monthLevelGroup: "monthLevelGroup",
            }}
          />
        </ScrollArea>
      </Group> */}
      <DatePickerInput
        label="Pick date"
        placeholder="Pick date"
        value={value}
        type="range"
        onChange={setValue}
        mx="auto"
        dropdownType="modal"
        numberOfColumns={8}
        columnsToScroll={1}
        maw={400}
        classNames={{
          calendar: "calendar",
          monthLevelGroup: "monthLevelGroup",
          calendarHeaderControl: "calendarHeaderControlIcon",
          calendarHeader: "calendarHeader",
          wrapper: "wrapper",
        }}
      />
    </>
  );
}
