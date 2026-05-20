import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '지마켓(Gmarket)',
      positions: [
        {
          title: 'Web Experience Engineering 팀, Web Service Developer',
          startedAt: '2022-11',
          descriptions: [
            'Kotlin/Spring Boot 기반 커머스 API 서버 설계 및 운영',
            '기획전, 캠페인, 이벤트 등 사용자가 직접 마주하는 서비스 영역 담당',
            'Redis 캐싱, 모니터링, 레거시 전환을 통한 서비스 안정성 및 운영 효율 개선',
          ],
          skillKeywords: [
            'Kotlin',
            'Spring Boot',
            'Oracle',
            'MSSQL',
            'MongoDB',
            'Redis',
            'InfluxDB',
            'Grafana',
            'Datadog',
            'Jenkins',
          ],
        },
      ],
    },
    {
      title: 'LG CNS',
      positions: [
        {
          title: 'Cloud 개발팀',
          startedAt: '2021-07',
          endedAt: '2022-11',
          descriptions: [
            'LG U+ 차세대 전산 시스템 개발',
            'Java/Spring Boot 기반 API, Batch, Kafka 연동 개발',
          ],
          skillKeywords: ['Java', 'Spring Boot', 'Spring Batch', 'MySQL', 'Kafka'],
        },
      ],
    },
  ],
};

export default experience;
