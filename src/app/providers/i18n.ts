import {createI18n} from "vue-i18n";
import en from "../../../public/locales/en.json"
import ru from "../../../public/locales/ru.json"


const resources = {
    en: en,
    ru: ru
}


export const i18n = createI18n({
    locale: 'en',
    messages: resources,
    allowComposition: true, // you need to specify that!
})


