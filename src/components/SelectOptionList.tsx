export const SelectOptionList = (props:any) => {
    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/components/select.css'} />

        <div className="select-container">

            <select value={props.value} onChange={props.onChange}>

                {Object.keys(props.options).map((key) => (

                    <option key={key} value={key}>
                        {props.options[key]}
                    </option>
                
                ))}

            </select>
            
        </div>
    </>
    );
};