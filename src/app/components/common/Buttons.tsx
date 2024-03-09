import Image from "next/image"

const Buttons = ({ text, icon, customClass,type='button' }: IButton) => {
	return (
		<button
			className={`common-button ${customClass ? customClass : ""}`}
			type={type}
		>
			{icon && <Image width={18} height={18} src={icon} alt="icon" />}
			<span>{text}</span>
		</button>
	)
}

export default Buttons
