import React from 'react';
import LandingPage from './LandingPage'
import './App.css';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them)
    resources: {
      en: {
        translation: {
          'Description': 'Description About us: Membership can only be purchased online. You play at your risk. The City will continue to monitor tennis clubs through its “park ambassadors” program.',
          'Introduction':'Introduction',
          'Reservation':'Reservation',
          'Contact us': 'Contact Us',
          'Service': 'Service',
          'One to one': 'One to One',
          'Price': 'Price',
          'Mutltiple class':'Multiple',
          'This is coach mike our best coach': 'This is coach mike our best coach',
          'This is coach jane our best coach': 'This is coach jane our best coach',
          'grass':'grass',
          'red':'red',
          'Our coach':'Our coach',
          'Our court':'Our court',
          'Choose your coach' :'Choose your coach',
          'Choose your court' : 'Choose your court', 
          'Input information':'Input information',
          'Phone number': 'Phone number',
          'submit':'submit',
          'Name':'Name',
          'Thanks for Reserve':'Thanks for Reserve, our representative will contact you soon.'
        }
      },
      zh: {
        translation: {
          'Description': '简介: 自己对自己负责，只能网上购买会员',
          'Introduction':'介绍',
          'Reservation':'预约',
          'Contact us': '联系我们',
          'Service': '服务',
          'One to one': '一对一',
          'Price': '价格',
          'Mutltiple class':'多对多',
          'This is coach mike our best coach': '这是我们最好的教练之一mike',
          'This is coach jane our best coach': '这是我们最好的教练之一jane',
          'grass':'草地',
          'red':'红土',
          'Our coach':'我们的教练',
          'Our court':'我们的场地',
          'Choose your coach' :'选择教练',
          'Choose your court' : '选择场地', 
          'Input information':'输入信息',
          'Phone number': '电话号码',
          'submit':'提交',
          'Name':'名字',
          'Thanks for Reserve':'谢谢你的预定，我们的工作人员会尽快联系你'

        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  });


function App() {
    const { t, i18n } = useTranslation();
    
    return ( 
    <div className = "App">
        <LandingPage t={t} i18={i18n}/>
     </div>
    );
}

export default App;