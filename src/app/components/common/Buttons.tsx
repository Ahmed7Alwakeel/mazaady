import Image from "next/image"

const Buttons = ({ text, icon,customClass }: IButton) => {
	return (
		<div className={`common-button ${customClass?customClass:""}`}>
			{icon && <Image width={18} height={18} src={icon} alt="icon" />}
			<span>{text}</span>
		</div>
	)
}

export default Buttons
