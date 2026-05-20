import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/woocurlee.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '이정우',
  },
  contact: [
    {
      title: 'woocurlee@naver.com',
      link: 'woocurlee@naver.com',
      icon: faEnvelope,
    },
    {
      link: 'https://github.com/woocurlee',
      icon: faGithub,
    },
    {
      link: 'https://woocurlee.medium.com/',
      icon: faMedium,
    },
  ],
};

export default profile;
