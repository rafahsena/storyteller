import { useIntl } from "react-intl";
import { useForm } from "react-hook-form";

import Button from "../../../components/Button";

import Card from "../../../components/Card";
import HCenter from "../../../components/HCenter";
import Input from "../../../components/Input";
import LoginWrapper from "../../../components/LoginWrapper";
import { Form } from "./styled";

const Login: React.FC = () => {
  const intl = useIntl();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => console.log(values);

  return (
    <LoginWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <HCenter>
            <Input
              {...register("email", { required: true })}
              placeholder={intl.formatMessage({ id: "placeholder.email" })}
            />
          </HCenter>
          <HCenter>
            <Input
              {...register("password", {
                required: true,
                validate: (value) =>
                  value.length > 5 || "Deveria ter mais de 5 caracteres",
              })}
              placeholder={intl.formatMessage({ id: "placeholder.password" })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </HCenter>
          <HCenter>
            <Button type="submit">
              {intl.formatMessage({ id: "login.button" })}
            </Button>
          </HCenter>
        </Card>
      </Form>
    </LoginWrapper>
  );
};

export default Login;
