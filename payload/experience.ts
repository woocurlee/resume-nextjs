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
            'Kotlin + Spring Boot 기반 API 서버 설계 및 개발',
            'Openshift 기반의 서버 유지 관리',
            '기획전, 꿀템, 캠페인 등 대규모 트래픽 처리 도메인 담당',
            '레거시 시스템 개선 및 유지보수',
            'Datadog 모니터링 시스템 연동, 대시보드 생성 및 Alert 체계 구축\n',
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
          descriptions: ['WebSquare 기반 Full Stack 개발', 'LG U+ 차세대 전산 시스템 개발'],
          skillKeywords: ['Java', 'Spring Boot', 'Spring Batch', 'MySQL', 'Kafka'],
        },
      ],
    },
  ],
};

export default experience;
