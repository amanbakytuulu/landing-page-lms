import * as Yup from "yup";
import en from "../../locales/en/en";
import ru from "../../locales/ru/ru";
import {useRouter} from "next/router";
import {yupResolver} from "@hookform/resolvers/yup";

export function Validations() {
    let router = useRouter()
    const {locale} = router;
    const t = locale === 'en' ? en : ru;

    const validationScheme = Yup.object().shape({
        first_name: Yup.string()
            .required(t.validation.required),
        phone: Yup.string().min(11, t.validation.min).required(t.validation.required)
    })

    return {
        formOptions: {resolver: yupResolver(validationScheme)}
    }
}