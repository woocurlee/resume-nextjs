import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'Kotlin',
    },
    {
      title: 'Java',
    },
    {
      title: 'Spring Boot',
    },
    {
      title: 'JPA',
    },
    {
      title: 'Kotlin Coroutines',
    },
    {
      title: 'GraphQL',
    },
  ],
};

const dataAndCache: ISkill.Skill = {
  category: 'Data & Cache',
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
      title: 'Redis',
    },
  ],
};

const platformAndObservability: ISkill.Skill = {
  category: 'Platform & Observability',
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
  skills: [backend, dataAndCache, platformAndObservability],
};

export default skill;
