export const Input = (
    props: any) => (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/components/inputs.css'} />
    
        <input type={props.type} 
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder} 
            onClick={props.onClick}
            className={"form-control " + props.className} 
            id={props.id} 
            required={props.required ? true : undefined}
        />
    </>    
);