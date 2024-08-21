import * as Yup from 'yup';

const checkoutValidationSchema = Yup.object({
    title: Yup.string()
        .min(1, 'At least one character')
        .max(150, 'Too many characters')
        .required('required')
        .trim(),
    body: Yup.string()
        .min(1, 'At least one character')
        .max(800, 'Too many characters')
        .required('required')
        .trim(),
})

export default checkoutValidationSchema;