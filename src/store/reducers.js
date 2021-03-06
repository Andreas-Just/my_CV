import { ACTION_TYPE } from './actions';
const portfolioText = {
  eng: {
    lang: 'eng',
    menuNavigation: [
      {name: 'Home', to: '/home'},
      {name: 'About me', to: '/about'},
      {name: 'Project', to: '/project'},
      {name: 'Contact', to: '/contact'},
    ],
    home: {
      name: 'Andrew Ivanchenko',
      specialty: 'Designer, Front-end developer',
      slogan: '"The difficult I make immediately. The impossible takes a little longer."',
    },
    about: {
      text: [
        'Я человек, которому нравится решать головоломки, находить алгоритмы, строить дедуктивные и индуктивные конструкции, а также человек, который делает работу продуктивнее, избавляясь от проблем с нецелеустремленными и неуверенными новичками.',
        'Последние 12 лет я строил свою карьеру по одному простому принципу: «work wisely». Я отслеживаю неэффективные схемы работы, корректирую их и тем самым повышаю производительность. Ничего не находит тот, кто не ищет, и кому нечего предложить рынку. У меня же есть рекомендации, опыт, уверенность и возможности. Хочу, могу и знаю, как решать поставленные передо мной задачи.',
        'Благодаря Полновременному обучению в Москве я приобрел хороший опыт командной работы: teamwork, team building, leadership, public speech, communication, а также personal growth and time management. Я ответственный, настойчивый и творческий человек, способный отстаивать свою точку зрения и адаптирующийся к любым условиям работы в любой команде, также я всегда открыт для новых знаний и новых знакомств. До встречи!',
      ],
    },
    project: {
      name: 'Andrew Ivanchenko',
      specialty: 'Front-End Developer',
    },
    contact: {
      name: 'Andrew Ivanchenko',
      specialty: 'Front-End Developer',
    },
  },
  ru: {
    lang: 'ru',
    menuNavigation: [
      {name: 'Главная', to: '/home'},
      {name: 'Обо мне', to: '/about'},
      {name: 'Проекты', to: '/project'},
      {name: 'Контакты', to: '/contact'},
    ],
    home: {
      name: 'Андрей Иванченко',
      specialty: 'Дизайнер, Front-end разработчик',
      slogan: '"Трудные задачи выполняю немедленно, невозможные — чуть погодя."',
    },
    about: {
      text: [
        'Я человек, которому нравится решать головоломки, находить алгоритмы, строить дедуктивные и индуктивные конструкции, а также человек, который делает работу продуктивнее, избавляясь от проблем с нецелеустремленными и неуверенными новичками.',
        'Последние 12 лет я строил свою карьеру по одному простому принципу: «work wisely». Я отслеживаю неэффективные схемы работы, корректирую их и тем самым повышаю производительность всех, кто находится рядом со мной. Ничего не находит тот, кто не ищет, и кому нечего предложить рынку. У меня же есть рекомендации, опыт, уверенность и возможности. Хочу, могу и знаю, как решать поставленные передо мной задачи.',
        'Благодаря Полновременному обучению в Москве я приобрел хороший опыт командной работы: teamwork, team building, leadership, public speech, communication, а также personal growth and time management. Я ответственный, настойчивый и творческий человек, способный отстаивать свою точку зрения и адаптирующийся к любым условиям работы в любой команде, также я всегда открыт для новых знаний и новых знакомств. До встречи!',
      ],
    },
    project: {
      name: 'Andrew Ivanchenko',
      specialty: 'Front-End Developer',
    },
    contact: {
      name: 'Andrew Ivanchenko',
      specialty: 'Front-End Developer',
    },
  },
};

const initialState = {
  dataCV: portfolioText,
  language: null,
  flag: false,
  canvas: {
    canvasWidth: window.innerWidth,
    canvasHeight:  window.innerHeight,
  },
};

export function getNextState(state = initialState, action) {
  // console.log(action, state);
  switch (action.type) {
    /*case ACTION_TYPE.LOAD_DATA:
      return {
        ...state,
        dataCV: action.data
      };*/
    case ACTION_TYPE.SELECT_LANG:
      if (action.lang === 'ru') {
        return {
          ...state,
          language: state.dataCV.ru
        };
      } else {
        return {
          ...state,
          language: state.dataCV.eng
        };
      }
    case ACTION_TYPE.CHANGE_FLAG:
      return {
        ...state,
        flag: !state.flag
      };
      case ACTION_TYPE.CHANGE_SIZE:
      return {
        ...state,
        canvas: {
          canvasWidth: action.width,
          canvasHeight:  action.height,
        }
      };
    default:
      return state;
  }
}