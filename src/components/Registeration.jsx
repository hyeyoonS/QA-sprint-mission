import React from "react";
import { useForm } from "react-hook-form";
import Button from "./button/Button";
import { postProducts } from "../utils/api";
import { ERROR_MESSAGES } from "../utils/error_constants";
import useValidation from "../hooks/useValidation";
import "./Registeration.css";

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm();
  const { errors: validationErrors, validate } = useValidation();

  const onSubmit = async (data) => {
    console.log("데이터확인:", data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("tags", data.tags);

    try {
      const response = await postProducts(formData);
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validate(name, value);
  };

  return (
    <form className="registration_container" onSubmit={handleSubmit(onSubmit)}>
      <section className="registration_title">
        <h1>상품 등록하기</h1>
        <Button color="blue" type="submit">
          등록
        </Button>
      </section>
      <fieldset>
        <label>상품 이미지</label>
        <input
          className="register_input"
          type="file"
          {...register("image", { required: true })}
          onBlur={handleBlur}
        />
        {formErrors.image && (
          <span className="error">{ERROR_MESSAGES.image}</span>
        )}
      </fieldset>

      <fieldset>
        <label>상품명</label>
        <input
          className="register_input"
          type="text"
          placeholder="상품명을 입력해주세요"
          {...register("name", { required: true })}
          onBlur={handleBlur}
        />
        {(formErrors.name || validationErrors.name) && (
          <span className="error">
            {formErrors.name ? formErrors.name.message : validationErrors.name}
          </span>
        )}
      </fieldset>

      <fieldset>
        <label>상품 소개</label>
        <textarea
          placeholder="상품 소개를 입력해주세요"
          {...register("description", { required: true })}
          onBlur={handleBlur}
        ></textarea>
        {(formErrors.description || validationErrors.description) && (
          <span className="error">
            {formErrors.description
              ? formErrors.description.message
              : validationErrors.description}
          </span>
        )}
      </fieldset>

      <fieldset>
        <label>판매가격</label>
        <input
          className="register_input"
          type="text"
          placeholder="판매 가격을 입력해주세요"
          {...register("price", { required: true })}
          onBlur={handleBlur}
        />
        {(formErrors.price || validationErrors.price) && (
          <span className="error">
            {formErrors.price
              ? formErrors.price.message
              : validationErrors.price}
          </span>
        )}
      </fieldset>

      <fieldset>
        <label>태그</label>
        <input
          className="register_input"
          type="text"
          placeholder="태그를 입력해주세요"
          {...register("tags", { required: true })}
          onBlur={handleBlur}
        />
        {(formErrors.tags || validationErrors.tags) && (
          <span className="error">
            {formErrors.tags ? formErrors.tags.message : validationErrors.tags}
          </span>
        )}
      </fieldset>
    </form>
  );
}

export default Registration;
