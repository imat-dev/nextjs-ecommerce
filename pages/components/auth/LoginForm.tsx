import useInput from "@/hooks/useInput";
import { isEmail, isNotEmpty, isValidPassword } from "@/util/validationSchema";
import { useState } from "react";
import { signIn } from "next-auth/react";
import SocialLogin from "./SocialLogin";
import { useRouter } from "next/router";

const LoginForm = () => {
	const [formErrorMsg, setFormErrorMsg] = useState("");
	const showFormError = formErrorMsg !== "";
	const [isLogginIn, setIsLogginIn] = useState(false);
	const router = useRouter()

	const {
		enteredValue: enteredEmail,
		isValid: emailIsValid,
		inputHasError: emailInputError,
		inputChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
	} = useInput((value) => {
		const validation = isEmail.validate({ value: value });
		if (validation.error) {
			return false;
		}
		return true;
	});

	const {
		enteredValue: enteredPassword,
		isValid: passwordIsValid,
		inputHasError: passwordInputError,
		inputChangeHandler: passwordChangeHandler,
		inputBlurHandler: passwordBlurHandler,
	} = useInput((value) => {
		const validation = isNotEmpty.validate({ value: value });
		if (validation.error) {
			return false;
		}
		return true;
	});

	let formIsValid = false;
	if (emailIsValid && passwordIsValid) {
		formIsValid = true;
	}

	const loginHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		setFormErrorMsg("");
		setIsLogginIn(true);

		//always resolves, it will not be caught by try catch
		const result = await signIn("credentials", {
			redirect: false,
			email: enteredEmail,
			password: enteredPassword,
		});

		if (!result!.ok) {
			setFormErrorMsg("Invalid email or password");
			return;
		}
		setIsLogginIn(false);

		router.replace("/");
	};

	return (
		<div className="h-full flex justify-center">
			<div className="w-full max-w-xs mt-20">
				<h1 className="text-blue-500 text-center font-bold text-4xl mb-5">
					Login
				</h1>
				<form
					onSubmit={loginHandler}
					className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				>
					{showFormError && (
						<p className="text-red-500 text-md italic mb-2">
							{formErrorMsg}
						</p>
					)}

					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="username"
						>
							Email
						</label>
						<input
							className={`${
								emailInputError ? "border-red-500" : ""
							} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
							id="email"
							type="email"
							value={enteredEmail}
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
							placeholder="Email address"
						/>
						{emailInputError && (
							<p className="text-red-500 text-xs italic mt-2">
								Invalid email address.
							</p>
						)}
					</div>

					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className={`${
								passwordInputError ? "border-red-500" : ""
							} shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
							id="password"
							type="password"
							value={enteredPassword}
							onChange={passwordChangeHandler}
							onBlur={passwordBlurHandler}
							placeholder="******************"
						/>
						{passwordInputError && (
							<p className="text-red-500 text-xs italic mt-2">
								Password should not be empty
							</p>
						)}
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
							disabled={!formIsValid}
						>
							{isLogginIn ? "Loading..." : "Login"}
						</button>

						<a
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
							href="#"
						>
							Forgot Password?
						</a>
					</div>
				</form>
			<SocialLogin />
			</div>
		</div>
	);
};

export default LoginForm;
