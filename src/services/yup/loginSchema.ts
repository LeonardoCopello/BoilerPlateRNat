import { BoilerplateModule } from '@util/Module'
import * as yup from 'yup'

export const LoginSchema = yup.object().shape({
    userName: yup.string().required(BoilerplateModule.LoginObligatoryUserName),
    password: yup.string().required(BoilerplateModule.LoginObligatoryPassword),
    // eventName: yup.string().required(obligatoryEventName),
    // certs_model_id: yup
    //     .number()
    //     .typeError(obligatoryCerts_model_id)
    //     .required(obligatoryCerts_model_id)
    //     .max(2000, 'Valor máximo de 2000'),
    // year: yup
    //   .number()
    //   .typeError(obligatoryYear)
    //   .min(2022, 'Valor mínimo de 2022')
    //   .max(2023, 'Valor máximo de 2023')
    //   .required(obligatoryYear),
})
