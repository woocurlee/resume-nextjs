import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Kotlin',
    },
    {
      title: 'Java',
    },
    {
      title: 'Javascript',
    },
  ],
};

const frameworks: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    {
      title: 'Spring Boot',
    },
    {
      title: 'JPA',
    },
    {
      title: 'coroutine',
    },
    {
      title: 'GraphQL',
    },
  ],
};

const infrastructure: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'Oracle',
    },
    {
      title: 'Mysql',
    },
    {
      title: 'MongoDB',
    },
    {
      title: 'InfluxDB',
    },
    {
      title: 'Kubernetes',
    },
    {
      title: 'Redis',
    },
  ],
};

const tools: ISkill.Skill = {
  category: 'Skills',
  items: [
    {
      title: 'Jenkins',
    },
    {
      title: 'Datadog',
    },
    {
      title: 'OpenShift',
    },
    {
      title: 'Grafana',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, frameworks, infrastructure, tools],
};

export default skill;
