import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
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
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/woocurlee',
      icon: faGithub,
    },
    {
      link: 'https://sorious77.tistory.com',
      icon: faMedium,
    },
  ],
};

export default profile;
