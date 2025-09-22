import { useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

// Type for country option
type CountryOption = {
	value: string
	label: string
}

interface CountrySelectorProps {
	value?: CountryOption | null
	onChange?: (selectedOption: CountryOption | null) => void
}

function CountrySelector({ value, onChange }: CountrySelectorProps) {
	const options = useMemo(() => countryList().getData(), [])

	return <Select options={options} value={value} onChange={onChange} />
}

export default CountrySelector
