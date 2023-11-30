﻿// U+FEFF at the beginning

/*eslint unicode-bom: ["error", "always"]*/

import floratest_small from "./../img/Floratest_small.gif";
import network_small from "./../img/Network_small.gif";
import communicator_small from "./../img/Communicator_small.gif";

const projectsAllText = [
  {
    "proj-name": { en: "Portable device 'FLORATEST'", ua: "Портативний прилад 'ФЛОРАТЕСТ'" },
    "proj-img": floratest_small,
    "proj-descr": {
      en: "The portable device 'FLORATEST' is intended for express-diagnostics of the impact of stress factors of natural and anthropogenic origin on the state of plants. The device measures the induction of chlorophyll fluorescence without damaging the plant. The use of the curve of chlorophyll fluorescence induction makes it possible to diagnose the influence of one or another factor on the state of plants and to take timely measures to eliminate or compensate the negative impact in order to avoid crop losses or plant death.",
      ua: "Портативний прилад 'ФЛОРАТЕСТ' призначено для експрес-діагностики впливу стресових чинників природного і техногенного походження на стан рослин. Прилад вимірює індукцію флуоресценції хлорофілу без пошкодження рослини. Використання кривої індукції флуоресценції хлорофілу дає можливість діагностувати вплив того чи іншого чиннику на стан рослин та вчасно вжити заходи для усунення або компенсації негативного впливу з метою уникнення втрат урожаю або загибелі рослин.",
    },
    "proj-detail": {
      en: "More detailed about project...",
      ua: "Детальніше про проект...",
    },
  },
  {
    "proj-name": {
      en: "Wireless sensor network for agriculture",
      ua: "Бездротова сенсорна мережа для сільського господарства",
    },
    "proj-img": network_small,
    "proj-descr": {
      en: "The wireless sensor network is intended for real-time estimation of the impact of stress factors on the state of plants in large areas for use in agriculture and environmental monitoring. Distributed sensors with embedded wireless transmitters are used as nodes of wireless sensor network for express estimation of the state of plants. The data acquisition about the state of plants is carried out through the self-organization of wireless nodes with different sets of sensors into a wireless sensor network that can covers a large territory.",
      ua: "Бездротову сенсорну мережу призначено для оцінювання в реальному часі впливу стресових чинників на стан рослин на великих територіях для застосування у сільському господарстві та екологічному моніторингу. Як вузли бездротової сенсорної мережі для експресної оцінки стану рослин використовують розподілені сенсори з вбудованими радіопередавачами. Збір даних про стан рослин виконують через самоорганізацію бездротових вузлів з різними наборами датчиків в бездротову сенсорну мережу, яка може охопити велику територію.",
    },
    "proj-detail": {
      en: "More detailed about project...",
      ua: "Детальніше про проект...",
    },
  },
  {
    "proj-name": {
      en: "Information medical communicator",
      ua: "Інформаційний медичний комунікатор",
    },
    "proj-img": communicator_small,
    "proj-descr": {
      en: "The information medical communicator is designed to support the first contact between the doctor and patient by providing detailed information about the injury or disease and appropriate methods of care and treatment during the first examination of the sick or injured person, and in emergency medicine to communicate with patients who have lost the ability to speak or patients with limited opportunities. Correct communication and mutual understanding between the doctor and patient helps to avoid problems related to making a diagnosis and predicting the development of the disease, and leads the patient to a quick recovery.",
      ua: "Інформаційний медичний комунікатор призначено для підтримка першого контакту лікаря та пацієнта через надання детальної інформації про травму або захворювання і відповідні методи догляду та лікування при першому огляді хворого або постраждалого, та в невідкладній медицині при спілкуванні з хворими, які втратили можливість говорити, або пацієнтами з обмеженими можливостями. Правильне спілкування і взаємне розуміння лікаря і пацієнта допомагає уникнути проблем, пов'язаних з встановленням діагнозу і прогнозуванням розвитку хвороби, та веде хворого до швидкого одужання.",
    },
    "proj-detail": {
      en: "More detailed about project...",
      ua: "Детальніше про проект...",
    },
  },
];

export default projectsAllText;

/*
  "":{
    en: "",
    ua: "",
  },
  */
