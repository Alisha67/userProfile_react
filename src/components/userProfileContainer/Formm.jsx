import React from "react";
import Form from "react-bootstrap/Form";
import { Btn as CustomButton } from "../../styleComponent/button.component";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../reducers/UserProfileSlice";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "./style.scss";
const Formm = ({ closeDialog }) => {
  const user = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  const formSchema = Yup.object({
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    description: Yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({
    defaultValues: {
      username: user.username,
      email: user.email,
      description: user.description,
    },
    resolver: yupResolver(formSchema),
  });

  const submitForm = () => {
    dispatch(updateUser(getValues()));
    closeDialog();
  };
  return (
    <>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>UserName</Form.Label>
          <span className="text-danger error">
            {errors.username && errors.username?.message}
          </span>
          <Form.Control
            type="text"
            {...register("username", { required: true })}
            placeholder="Username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <span className="text-danger error">
            {errors.email && errors.email?.message}
          </span>
          <Form.Control
            {...register("email", { required: true })}
            type="email"
            placeholder="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <span className="text-danger error">
            {errors.description && errors.description?.message}
          </span>
          <Form.Control
            as="textarea"
            type="text"
            {...register("description", { required: true })}
            rows={3}
          />
        </Form.Group>

        <CustomButton variant="secondary" type="submit">
          Submit
        </CustomButton>
      </Form>
    </>
  );
};

export default Formm;
