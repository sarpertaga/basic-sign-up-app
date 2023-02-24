import * as yup from "yup" 

const validations = yup.object().shape({
    email: yup.string().email('Gecerli bir email girin').required('Zorunlu alan'), //girilmesi zorunlu
    password: yup.string().min(5, 'Parola en az 5 karakter olmali').required(), //minimum 5 karakterli ve girilmesi zorunlu olcak
    passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Parolalar uyusmuyor').required()
})

export default validations

//emailin icine hata mesajı girdik