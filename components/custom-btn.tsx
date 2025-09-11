type Props = {
	title: string
}

const CustomButton = (props: Props) => {
	return (
		<button
			className='bg-blue-500 text-white font-semibold py-3 px-6 cursor-pointer hover:bg-purple-900 rounded-md transition mr-4'
		>
			{props.title}
		</button>
	)

}
export default CustomButton
