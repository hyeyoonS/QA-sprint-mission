// src/pages/Register.js
import React from "react";
import { useForm } from "react-hook-form";
import Button from "./button/Button";
import "./Registeration.css";

function Registration() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = console.log("제출!!");

  // const onSubmit = async (data) => {
  //   const formData = new FormData();
  //   formData.append("image", data.image[0]);
  //   formData.append("name", data.name);
  //   formData.append("description", data.description);
  //   formData.append("price", data.price);
  //   formData.append("tags", data.tags);

  // 임시 try-catch문
  //   try {
  //     const response = await fetch("/postProducts", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       const responseData = await response.json();
  //       console.log(responseData);
  //     } else {
  //       console.error('Error:', response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <main>
      <section className="registration_title">
        <h1>상품 등록하기</h1>
        <Button color="blue" type="submit">
          등록
        </Button>
      </section>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label>상품 이미지</label>
          <input type="file" {...register("image", { required: true })} />
          {errors.image && <span>This field is required</span>}
        </fieldset>

        <fieldset>
          <label>상품명</label>
          <input
            type="text"
            placeholder="상품명을 입력해주세요"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </fieldset>

        <fieldset>
          <label>상품 소개</label>
          <textarea
            placeholder="상품 소개를 입력해주세요"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && <span>This field is required</span>}
        </fieldset>

        <fieldset>
          <label>판매가격</label>
          <input
            type="text"
            placeholder="판매 가격을 입력해주세요"
            {...register("price", { required: true })}
          />
          {errors.price && <span>This field is required</span>}
        </fieldset>

        <fieldset>
          <label>태그</label>
          <input
            type="text"
            placeholder="태그를 입력해주세요"
            {...register("tags", { required: true })}
          />
        </fieldset>
      </form>
    </main>
  );
}

export default Registration;
