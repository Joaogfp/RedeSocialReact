import { ErrorMessage, useField } from "formik";
import { Form, Icon, Label } from "semantic-ui-react";

interface Props {
    placeholder: string;
    name: string;
    rows: number;
    label?: string;
}

export default function MyTextArea(props: Props) {
    const [field, meta] = useField(props.name);
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <textarea {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorMessage name={field.name} render={msgError =>
                    <span style={{ color: 'red' }}>
                        <Icon color='red' name='warning' />
                        {msgError}
                    </span>} />
            ) : null}
        </Form.Field>
    )
}