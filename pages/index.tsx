import { Welcome } from "../components/Welcome/Welcome";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";
import { DatePickerComponent } from "../components/DatePicker";

export default function HomePage() {
  return (
    <>
      <Welcome />
      <DatePickerComponent />
    </>
  );
}
