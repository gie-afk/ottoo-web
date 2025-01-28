import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Input,
	Button,
	Link,
} from "@heroui/react";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import logo from "../assets/icons/logo.jfif";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const navigate = useNavigate();

	const handleSignUpRedirect = () => {
		navigate("/sign-up");
	};

	return (
		<div className="container">
			<Card className="w-full bg-white p-4 rounded-lg shadow-xl">
				<CardHeader>
					<div className="w-full flex flex-col gap-4">
						<div className="flex flex-col justify-center items-center">
							<div>
								<img src={logo} alt="logo" className="size-16" />
							</div>
							<div>
								<span className="text-2xl font-bold">Sign in to Ottoo</span>
							</div>
						</div>
						<div className="text-center">
							<span className="text-base">
								Let's start with your email address to see if you have an
								account.
							</span>
						</div>
					</div>
				</CardHeader>
				<CardBody>
					<Input
						isRequired
						className="w-100"
						label="Email"
						type="email"
						placeholder="Please enter your email"
					/>
				</CardBody>
				<CardFooter className="flex flex-col-reverse md:flex-row md:justify-center lg:flex-row lg:justify-between gap-4">
					<div className="w-full text-center">
						<Link href="#" color="foreground" underline="hover">
							<ArrowLongLeftIcon className="size-4" />
							<span>Go back to Ottoo.com</span>
						</Link>
					</div>
					<div className="w-full">
						<Button onPress={handleSignUpRedirect} color="secondary" className="w-full">
							Check Email
						</Button>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
};

export default LoginForm;
