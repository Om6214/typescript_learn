import React , {useState} from "react"

const Click = () => {
    const handleClick = ( e : React.MouseEvent<HTMLButtonElement> ) => {
        console.log ( "Clicked" , e );
    }
    return <button onClick={handleClick}>Click Me</button>
}

const TextInput = () => {
    const [ text , setText ] = useState<string> ( "" );
    const handleChange = ( e : React.ChangeEvent<HTMLInputElement> ) => {
        const { value } = e.target;
        setText ( value );
    }
    return (
        <div>
            <input type="text" onChange={handleChange} value={text}/>
            <p>Typed : {text}</p>
        </div>
    )
}

const FormExample = () => {
    const handleSubmit = ( e : React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault ();
        console.log ( "Submit" , e );
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    )
}

const Dropdown = () => {
    const [option, setOption] = useState ( "" );

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOption(e.currentTarget.value);
    }
    return (
        <div>
            <select value={option} onChange={handleChange}>
                <option value="react">React</option>
                <option value="typescript">TypeScript</option>
            </select>
        </div>
    )
}

const CheckboxExample = () => {
    const [ ischecked, setIsChecked ] = useState<Boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {checked} = e.target
        setIsChecked(checked);
    }

    return(
        <div>
            <input type="checkbox" checked={ischecked} onChange={handleChange}/>
            <p>Checkbox is {ischecked? "Checked" : "UnChecked"}</p>
        </div>
    )
}

export {Click , TextInput , FormExample, Dropdown, CheckboxExample};