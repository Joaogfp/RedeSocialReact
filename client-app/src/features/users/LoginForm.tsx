import { Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import { Button, Header } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
import { useStore } from "../../app/stores/store";

export default observer(function LoginForm() {
    const { userStore } = useStore();
    
    return (
        <Formik
            initialValues={{ email: '', password: '', error: null }}
            onSubmit={(values) => userStore.login(values)}
        >
            {({ handleSubmit, isSubmitting }) => (
                <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
                    <Header as='h2' content='Login to Reactivities' color="teal" textAlign="center" />
                    <MyTextInput placeholder="E-mail" name="email" />
                    <MyTextInput placeholder="Password" name="password" type="password" />
                    <Button loading={isSubmitting} positive content="Login" type="submit" fluid />
                </Form>
            )}

        </Formik>
    )
})