import { FC, InputHTMLAttributes } from 'react'

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
    parentSet?: string
    label?: string;
    inputSet?: string;
    labelSet?: string;
}

export const CustomInput: FC<PropsInput> = ({parentSet, label, inputSet, labelSet, ...props}) => {
    return (
        <div className={`mb-3 ${parentSet}`}>
            <label className={`${labelSet}`}>{label}</label>
            <input
                className={`input input-bordered w-full bg-white ${inputSet}`}
                {...props}
            />
        </div>
    )
}

