import {ReactNode} from "react";

const InputGroup = ({elements}:{elements:ReactNode[]}) => {
    return (
        <div className='grid lg:grid-cols-2 gap-4 md:px-5 px-2'>
            {
                elements.map((item:ReactNode) => item)
            }
    </div>

    );
};

export default InputGroup;

export class InputConfigType {
}