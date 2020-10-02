import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email("email inválido")
    .required('E-mail é obrigatório'),
    
    password: yup.string().required("Senha é obrigatória")
    .min(8, "8 caracteres no minino"),
  });

  export default schema;