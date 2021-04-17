import { useIntl } from "react-intl";
import { useForm } from "react-hook-form";

import { useRouter } from "next/router";

import Button from "../../../components/Button";

import Card from "../../../components/Card";
import HCenter from "../../../components/HCenter";
import Input from "../../../components/Input";
import LoginWrapper from "../../../components/LoginWrapper";
import { Form } from "./styled";

import { signIn } from "../../../lib/auth";
import { ISignIn } from "./login.types";

import { chat } from "../../../constants/routes";

const Login: React.FC = () => {
  const intl = useIntl();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }: ISignIn) => {
    signIn(email, password).then(() => router.push(chat));
  };

  return (
    <LoginWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <HCenter>
            <Input
              {...register("email", { required: true })}
              isInvalid={Boolean(errors.email)}
              errorMsg={intl.formatMessage({ id: "errors.email" })}
              placeholder={intl.formatMessage({ id: "placeholder.email" })}
            />
          </HCenter>
          <HCenter>
            <Input
              {...register("password", {
                required: true,
                validate: (value) => value.length > 7,
              })}
              isInvalid={Boolean(errors.password)}
              errorMsg={intl.formatMessage({ id: "errors.password" })}
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
