import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
	const [registerInput, setRegisterInput] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		passwordAgain: "",
	});

	const [errorMessage, setErrorMessage] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();

		// Perform authentication logic
		axios
			.post("https://fakestoreapi.com/auth/login", {
				username: loginInput.username,
				password: loginInput.password,
			})
			.then((response) => {
				// Login successful
				// You can handle the successful login here, such as storing the token or redirecting the user to another page
				alert("Login successful");
			})
			.catch((error) => {
				// Login failed
				setErrorMessage("Invalid username or password");
				alert("Login failed:", error);
			});
	};
	return (
		<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-lg">
				<h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
					Get started today
				</h1>

				<form
					onSubmit={handleSubmit}
					className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
				>
					<p className="text-center text-lg font-medium">
						Sign up in to your account
					</p>
					<div>
						<label className="sr-only">first name</label>
						<div className="relative">
							<input
								type="text"
								className="w-full rounded-lg outline outline-1 outline-offset-2 outline-indigo-400 border-gray-200 p-4 pe-12 text-sm shadow-sm"
								placeholder="Enter FirstName"
								onChange={(e) =>
									setRegisterInput({
										...registerInput,
										firstName: e.target.value,
									})
								}
							/>
							<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
									/>
								</svg>
							</span>
						</div>
					</div>
					<div>
						<label className="sr-only">lastName</label>
						<div className="relative">
							<input
								type="text"
								className="w-full rounded-lg outline outline-1 outline-offset-2 outline-indigo-400 border-gray-200 p-4 pe-12 text-sm shadow-sm"
								placeholder="Enter LastName"
								onChange={(e) =>
									setRegisterInput({
										...registerInput,
										lastName: e.target.value,
									})
								}
							/>
							<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
									/>
								</svg>
							</span>
						</div>
					</div>
					<div>
						<label className="sr-only">Email</label>
						<div className="relative">
							<input
								type="email"
								className="w-full rounded-lg outline outline-1 outline-offset-2 outline-indigo-400 border-gray-200 p-4 pe-12 text-sm shadow-sm"
								placeholder="Enter email"
								onChange={(e) =>
									setRegisterInput({
										...registerInput,
										username: e.target.value,
									})
								}
							/>
							<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
									/>
								</svg>
							</span>
						</div>
					</div>
					<div>
						<label className="sr-only">Password</label>
						<div className="relative">
							<input
								type="password"
								className="w-full rounded-lg outline outline-1 outline-offset-2 outline-indigo-400 border-gray-200 p-4 pe-12 text-sm shadow-sm"
								placeholder="Enter password"
								onChange={(e) =>
									setRegisterInput({
										...registerInput,
										password: e.target.value,
									})
								}
							/>
							<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
									/>
								</svg>
							</span>
						</div>
					</div>
					<div>
						<label className="sr-only">Password Again</label>
						<div className="relative">
							<input
								type="password"
								className="w-full rounded-lg outline outline-1 outline-offset-2 outline-indigo-400 border-gray-200 p-4 pe-12 text-sm shadow-sm"
								placeholder="Enter again password"
								onChange={(e) =>
									setRegisterInput({
										...registerInput,
										password: e.target.value,
									})
								}
							/>
							<span className="absolute inset-y-0 end-0 grid place-content-center px-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 text-gray-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
									/>
								</svg>
							</span>
						</div>
					</div>
					<button
						type="submit"
						className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
					>
						Sign in
					</button>
					<p className="text-center text-sm text-gray-500">
						Already have an account!
						<Link
							to={"/login"}
							className="underline text-xl text-indigo-600 ml-3"
						>
							Login
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Register;
