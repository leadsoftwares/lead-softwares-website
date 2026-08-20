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
      className="border border-[#e2e8f0] rounded-md p-px focus:outline-none focus:ring-2 focus:ring-primary/30"
      classNames={{
        control: () => "!border-0 !shadow-none",
        placeholder: () => "!text-[rgb(184,184,184)]", // Placeholder color
        singleValue: () => "!text-gray-900", // Selected value color
        input: () => "!text-gray-900", // Typed input text color
        menu: () => "!bg-white !border !border-gray-200 !rounded-md !shadow-lg", // Dropdown menu container
        option: ({ isSelected, isFocused }) =>
          isSelected
            ? "!bg-primary !text-white" // Selected item style
            : isFocused
              ? "!bg-gray-100 !text-gray-900" // Hover/focused item style
              : "!text-gray-700", // Normal item style
      }}
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
