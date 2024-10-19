import { Controller, useForm } from "react-hook-form";
import Input from "../../components/basic-components/Input/Input";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/Logo";
import TrelloRight from "../../assets/icons/trello-right.svg";

function LoginPage() {
  const navigate = useNavigate();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    email: "",
    password: "",
  });

  const onSubmit = (formData) => {
    console.log("formData", formData);
  };

  const redirectToRegister = () => {
    navigate("/register");
  };

  return (
    <main className="min-h-screenheight bg-[#FAFBFC] pt-20 shadow-2xl shadow-black flex items-center justify-between">
      <div className="w-[30%] self-end">
        <img
          src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/trello-left.4f52d13c.svg"
          alt=""
        />
      </div>
      <div
        className="w-[25%] px-14 pt-0 pb-14 shadow-md shadow-black rounded-md space-y-2 bg-white"
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        <div className="w-fit mx-auto">
          <Logo width="150" height="150" />
        </div>
        <h1 className="text-lg text-exgray-700 font-semibold text-center">
          Log in with your Atlassian account
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Controller
              name="email"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Email Id is required",
                },
                pattern: {
                  value:
                    /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                  message: "Please enter a valid email ID",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="abc@cd.com"
                  title="Email Id *"
                  name="email"
                  value={value || ""}
                  onChange={onChange}
                  error={errors?.email?.message}
                />
              )}
            />
          </div>

          <div>
            <Controller
              name="password"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Password is required",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder=""
                  title="Password"
                  name="password"
                  value={value || ""}
                  onChange={onChange}
                  error={errors?.password?.message}
                />
              )}
            />
          </div>

          <div>
            <div className="w-fit ml-auto mr-0">
              <button
                className="px-8 py-2 text-center text-base font-semibold text-white bg-blue-700 rounded-md active:scale-95"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="w-[30%] self-end">
        <img
          src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/trello-right.e6e102c7.svg"
          alt=""
        />
      </div>
    </main>
  );
}

export default LoginPage;
