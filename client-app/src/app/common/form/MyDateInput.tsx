import { ErrorMessage, useField } from "formik";
import { Form, Icon } from "semantic-ui-react";
import DatePicker, {ReactDatePickerProps} from 'react-datepicker';

interface Props {
    placeholder: string;
    name: string;
    label?: string;
}

export default function MyDateInput(props: Partial<ReactDatePickerProps>) {
    const [field, meta, helpers] = useField(props.name!);
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <DatePicker 
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={value => helpers.setValue(value)}
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