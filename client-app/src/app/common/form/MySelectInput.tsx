import { ErrorMessage, useField } from "formik";
import { Form, Icon, Label, Select } from "semantic-ui-react";

interface Props {
    placeholder: string;
    name: string;
    option: any;
    label?: string;
}

export default function MySelectInput(props: Props) {
    const [field, meta, helpers] = useField(props.name);
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <Select 
                clearable
                options={props.option}
                value={field.value || null}
                onChange={(e, d) => helpers.setValue(d.value)}
                onBlur={() => helpers.setTouched(true)}
                placeholder={props.placeholder}
            />
            {meta.touched && meta.error ? (
                <ErrorMessage name={field.name} render={msgError => 
                <span style={{color: 'red'}}>
                    <Icon color='red' name='warning' />
                    {msgError}
                </span>} />
            ) : null}
        </Form.Field>
    )
}