import React from "react";
import Form from "react-bootstrap/Form";
import { Btn as CustomButton } from "../../styleComponent/button.component";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts } from "../../reducers/UserPostReducer";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
const PostForm = ({ closeDialog }) => {
  const dispatch = useDispatch();

  const submitForm = async () => {
    const { image, ...post } = getValues();
    let convertedImage = await getBase64(image ? image[0] : null);
    post.image = convertedImage;
    dispatch(addPosts(post));
    closeDialog();
    console.log(post);
  };
  async function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
    });
  }
  const postFormSchema = Yup.object({
    title: Yup.string().required(),
    image: Yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(postFormSchema),
    defaultValues: {
      title: null,
      image: null,
    },
  });

  return (
    <>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Image</Form.Label>
          <span className="text-danger error">
            {errors.image && errors.image?.message}
          </span>
          <Form.Control
            type="file"
            name="image"
            placeholder=""
            // onChange={handleImage}
            {...register("image", { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Title</Form.Label>
          <span className="text-danger error">
            {errors.title && errors.title?.message}
          </span>
          <Form.Control
            as="textarea"
            type="text"
            name="title"
            rows={3}
            {...register("title", { required: true })}
          />
        </Form.Group>

        <CustomButton variant="secondary" type="submit">
          Submit
        </CustomButton>
      </Form>
    </>
  );
};

export default PostForm;
