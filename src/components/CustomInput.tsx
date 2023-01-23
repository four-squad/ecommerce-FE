import { FC, InputHTMLAttributes } from 'react'

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    inputSet?: string;
    labelSet?: string;
}

const CustomInput: FC<PropsInput> = ({label, inputSet, labelSet, ...props}) => {
    return (
        <div className="mb-3">
            <label className={`${labelSet}`}>{label}</label>
            <input
                className={`input input-bordered w-full bg-white ${inputSet}`}
                {...props}
            />
        </div>
    )
}

export default CustomInput