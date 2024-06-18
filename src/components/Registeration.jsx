import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./button/Button";
import { postProducts, postImage } from "../utils/api";
import { ERROR_MESSAGES } from "../utils/error_constants";
import useValidation from "../hooks/useValidation";
import styles from "./Registeration.module.css";
import TagList from "./TagList/TagList";

function Registration() {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors: formErrors },
  } = useForm();

  const { errors: validationErrors, validate } = useValidation();
  const [tags, setTags] = useState([]);

  const onSubmit = async (data) => {
    console.log("데이터확인:", data);

    const imageData = await imgToUrl(data.image[0]);

    console.log(imageData);
    const sendData = {
      images: [imageData.url],
      name: data.name,
      description: data.description,
      price: +data.price,
      tags: tags,
    };

    try {
      const response = await postProducts(sendData);
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const imgToUrl = async (imgData) => {
    const imageUrl = await postImage(imgData);
    return imageUrl;
  };

  //유효성 검사 hook 사용을 위한 핸들러
  const handleBlur = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    validate(name, value);
  };

  //엔터를 누르면 태그를 추가하고 띄어쓰기는 제거
  const handleTagKeyPress = (e) => {
    const inputTagName = e.target.value.trim();
    console.log("이", inputTagName);
    if (inputTagName.length > 5) return;

    if (e.key === "Enter") {
      e.preventDefault();
      const value = inputTagName;
      if (value) {
        setTags([...tags, value]);
        setValue("tags", "");
      }
    }
  };

  return (
    <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
      <section className={styles.registration_title}>
        <h1>상품 등록하기</h1>
        <Button color="blue" type="submit">
          등록
        </Button>
      </section>
      <fieldset>
        <label>상품 이미지</label>
        <input
          className={`${styles.register_input} ${
            formErrors.image ? styles.input_error : ""
          }`}
          type="file"
          {...register("image", { required: true })}
          onBlur={handleBlur}
        />
        {formErrors.image && (
          <span className={styles.error}>{ERROR_MESSAGES.image}</span>
        )}
      </fieldset>

      <fieldset>
        <label>상품명</label>
        <input
          className={`${styles.register_input} ${
            formErrors.name ? styles.input_error : ""
          }`}
          type="text"
          placeholder="상품명을 입력해주세요"
          {...register("name", { required: true })}
          onBlur={handleBlur}
        />
        {(formErrors.name || validationErrors.name) && (
          <span className={styles.error}>
            {formErrors.name ? formErrors.name.message : validationErrors.name}
          </span>
        )}
      </fieldset>

      <fieldset>
        <label>상품 소개</label>
        <textarea
          className={`${formErrors.description ? styles.input_error : ""}`}
          placeholder="상품 소개를 입력해주세요"
          {...register("description", { required: true })}
          onBlur={handleBlur}
        ></textarea>
        {(formErrors.description || validationErrors.description) && (
          <span className={styles.error}>
            {formErrors.description
              ? formErrors.description.message
              : validationErrors.description}
          </span>
        )}
      </fieldset>

      <fieldset>
        <label>판매가격</label>
        <input
          className={`${styles.register_input} ${
            formErrors.price ? styles.input_error : ""
          }`}
          type="text"
          placeholder="판매 가격을 입력해주세요"
          {...register("price", { required: true })}
          onBlur={handleBlur}
        />
        {(formErrors.price || validationErrors.price) && (
          <span className={styles.error}>
            {formErrors.price
              ? formErrors.price.message
              : validationErrors.price}
          </span>
        )}
      </fieldset>

      <fieldset>
        <label>태그</label>
        <input
          className={`${styles.register_input} ${
            formErrors.tags ? styles.input_error : ""
          }`}
          type="text"
          placeholder="태그를 입력해주세요"
          onKeyDown={handleTagKeyPress}
          {...register("tags")}
          onBlur={handleBlur}
        />
        <TagList
          tags={tags}
          formErrors={formErrors}
          validationErrors={validationErrors}
        />
      </fieldset>
    </form>
  );
}

export default Registration;
