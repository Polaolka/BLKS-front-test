import * as yup from "yup";

export const CreateUserValidSchema = yup.object({
  name: yup.string().required('Додайте Ім`я'),
  email: yup.string().required('Додайте email'),
});

