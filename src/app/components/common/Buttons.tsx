import Image from "next/image"

const Buttons = ({ text, icon }: IButton) => {
	return (
		<div className="common-button">
			{icon && <Image width={18} height={18} src={icon} alt="icon" />}
			<span>{text}</span>
		</div>
	)
}

export default Buttons
