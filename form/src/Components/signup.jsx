import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";

const Signup = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
		},
		validationSchema: yup.object({
			name: yup
				.string()
				.min(4, "name must have atleast 4 characters")
				.required(),
			email: yup.string().email().required(),
			password: yup
				.string()
				.min(6, "Password must have atleast 6 characters")
				.required(),
		}),
		onSubmit: (values, { resetForm }) => {
			console.log(values);
			resetForm({ values: "" });
		},
	});

	return (
		<div>
			<h2>Form Signpu </h2>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						onChange={formik.handleChange}
						value={formik.values.name}
					/>
					<br />
					{formik.touched.name && formik.errors.name && (
						<span className="red">{formik.errors.name}</span>
					)}
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					<br />
					{formik.touched.email && formik.errors.email && (
						<span className="red">{formik.errors.email}</span>
					)}
				</div>
				<div>
					<label htmlFor="password">password</label>
					<input
						type="password"
						id="password"
						name="password"
						onChange={formik.handleChange}
						value={formik.values.password}
					/>
					<br />
					{formik.touched.password && formik.errors.password && (
						<span className="red">{formik.errors.password}</span>
					)}
				</div>
				<button type="submit">Signpu</button>
			</form>
		</div>
	);
};

export default Signup;
