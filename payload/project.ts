import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '전사 행사 차세대 프로젝트',
      startedAt: '2025-06',
      endedAt: '2025-10',
      where: '지마켓(Gmarket)',
      descriptions: [
        {
          content: '하드코딩으로 운영되던 전사 행사 페이지 구성 요소와 뱃지 정보를 어드민화',
        },
        {
          content:
            '대규모 트래픽을 고려한 Redis 캐싱과 Pub/Sub 기반 캐시 무효화로 행사 정보 변경 사항을 즉시 반영',
        },
        {
          content: '행사 페이지 개발 및 QA 소요 기간 70% 이상 감소',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '쇼룸',
      startedAt: '2023-04',
      where: '지마켓(Gmarket)',
      descriptions: [
        {
          content:
            '기획전 운영자가 템플릿 기반으로 페이지를 제작할 수 있는 차세대 에디터 API 서버 개발',
        },
        {
          content: '지마켓/옥션 멀티 테넌시와 MongoDB/JSON Schema 기반 모듈 버전 관리 구조 설계',
        },
        {
          content: '카드, 멤버십 등 안내 페이지 제작 소요 기간 60% 이상 단축',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '꿀템 서비스 개발',
      startedAt: '2024-03',
      endedAt: '2025-05',
      where: '지마켓(Gmarket)',
      descriptions: [
        {
          content: '꿀템 피드와 운영 어드민에서 사용할 API 서버 및 DB 테이블/인덱스 설계',
        },
        {
          content: 'Redis Look-Aside 캐싱과 Sorted Set 기반 Near Real Time 랭킹 기능 구현',
        },
        {
          content: '첫 오픈 당시 구매 전환율 49%를 기록한 서비스의 API 서버 개발',
          href: 'https://news.gmarket.com/index.php/blog-detail/?pid=1066',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '이벤트 응모 시스템 개편',
      startedAt: '2024-06',
      where: '지마켓(Gmarket)',
      descriptions: [
        {
          content: '쿠폰, 경품 등 이벤트 응모와 리워드 발급을 처리하는 시스템 개편 개발',
        },
        {
          content:
            '.NET Windows 서버와 Stored Procedure 중심 구조를 Spring Boot/JPA 기반 클라우드 환경으로 전환하는 API 개발',
        },
        {
          content:
            'Redis 기반 분산 락을 적용해 동시 응모 시 발생할 수 있는 중복 발급 문제를 개선하도록 설계',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '웹 성능 수집 및 통계',
      startedAt: '2024-05',
      endedAt: '2024-11',
      where: '지마켓(Gmarket)',
      descriptions: [
        {
          content: 'LCP, FID, CLS 등 Web Vitals 지표를 수집하는 API 서버와 시각화 대시보드 구현',
        },
        {
          content:
            'InfluxDB, 리텐션 정책, 비동기 큐를 활용해 대량의 로그성 성능 데이터를 안정적으로 수집/관리',
        },
        {
          content: '지마켓/ESM+ 내 성능 개선 필요 영역 식별 시간 60% 이상 감소',
          weight: 'MEDIUM',
        },
      ],
    },
  ],
};

export default project;
