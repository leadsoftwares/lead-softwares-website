import Select, { SingleValue } from "react-select";

type Option = { value: string; label: string };

interface RegionSelectorProps {
  value?: string | null;
  onChange?: (selectedValue: string | null) => void;
}

const REGION_OPTIONS: Option[] = [
  { value: "North America", label: "North America" },
  { value: "South America", label: "South America" },
  { value: "Europe", label: "Europe" },
  { value: "Asia", label: "Asia" },
  { value: "Africa", label: "Africa" },
  { value: "Australia", label: "Australia" },
];

function RegionSelector({ value, onChange }: RegionSelectorProps) {
  const selected =
    REGION_OPTIONS.find((opt) => opt.value === value || opt.label === value) ||
    null;

  return (
    <Select<Option, false>
      className="border border-text rounded-md p-px focus:outline-none focus:ring-2 focus:ring-primary/30"
      classNames={{ control: () => "!border-0 !shadow-none" }}
      options={REGION_OPTIONS}
      value={selected}
      onChange={(opt: SingleValue<Option>) =>
        onChange?.(opt ? opt.value : null)
      }
      getOptionLabel={(opt: Option) => opt.label}
      getOptionValue={(opt: Option) => opt.value}
      isClearable
    />
  );
}

export default RegionSelector;
