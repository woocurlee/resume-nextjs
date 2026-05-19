import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '꿀템 서비스 개발',
      startedAt: '2024-03',
      endedAt: '2025-05',
      where: '지마켓(Gmarket)',
      descriptions: [
        {
          content: 'DB 테이블 및 인덱스 설계',
        },
        {
          content: 'Redis를 Cache Layer로 도입하여 캐싱 전략 설계',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Look-Aside 패턴을 적용하여 조회 성능 향상 및 DB 부하 감소',
            },
            {
              content: 'Sorted Set을 이용한 Near Real Time 랭킹 기능 구현',
            },
          ],
        },
        {
          content: '프론트 및 어드민 API 서버 개발',
          descriptions: [
            {
              content: 'JPA의 타입 안정성을 강화하기 위해 QueryDSL을 적용',
            },
          ],
        },
        {
          content: 'Openshift 기반의 배포 및 운영 환경 구축',
        },
        {
          content: '첫 오픈 당시 구매 전환율 49% 달성',
          weight: 'MEDIUM',
        },
        {
          content: 'G마켓 개발자에게 직접 듣는, 화제의 “빅스마일데이 꿀템 피드” 개발 스토리',
          href: 'https://news.gmarket.com/index.php/blog-detail/?pid=1066',
        },
      ],
    },
    {
      title: '쇼룸',
      startedAt: '2023-04',
      where: '지마켓(Gmarket)',
      descriptions: [
        {
          content: '템플릿화된 모듈을 에디터를 통해 제작/운영되던 기획전 에디터의 차세대 프로젝트',
        },
        {
          content: '신규 에디터 서비스에서 사용할 API 서버 개발',
          descriptions: [
            {
              content: '지마켓/옥션 멀티 테넌시 기반 API 아키텍쳐 도입',
              weight: 'MEDIUM',
            },
          ],
        },
        {
          content: '기존 에디터 분석 및 개선점 도출',
          descriptions: [
            {
              content:
                '여러 형태의 기획전을 만들고 싶은 요구가 계속해서 있으나, RDBMS 사용으로 인한 확장에 제한이 있었음',
            },
            {
              content: '.NET과 handlebars.js 프레임워크의 레거시 존재',
            },
            {
              content:
                'NoSQL인 MongoDB 도입, 타입 안정성 및 새로운 모듈 추가/수정시 하위 호환성을 지원하기 위한 JSON Schema 기반의 모듈 버전 관리',
            },
          ],
        },
        {
          content: 'Redis를 Cache Layer로 도입하여 API 성능 개선',
        },
        {
          content:
            'Phase 1으로 카드, 멤버십 등의 개발이 필요했던 안내 페이지를 에디터로 제작하며 페이지 제작 소요 기간 60% 이상 단축',
          descriptions: [
            {
              content: '카드 안내 페이지',
              href: 'https://www.gmarket.co.kr/n/showroom/samsungcard',
            },
            {
              content: '이후 전사 행사시에도 기획전을 대체한 행사 페이지로 운영',
            },
          ],
        },
      ],
    },
    {
      title: '판매자 기획전',
      startedAt: '2024-12',
      endedAt: '2025-12',
      where: '지마켓(Gmarket)',
      descriptions: [
        {
          content: '판매자가 직접 상품을 홍보하고 관리할 수 있는 기획전 기능 제공',
        },
        {
          content: '판매자 및 구매자 영역에서 사용할 API 서버 개발',
        },
        {
          content: 'Thymeleaf 기반의 임직원용 기획전 관리 페이지 개발',
        },
        {
          content: '특정 시점의 미리보기, 임시 저장 등의 기능 제공으로 판매자 사용성 강화',
        },
        {
          content: '행사 기획에 소요되는 시간 50% 이상 단축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '기존에는 특정 판매자를 위해 디자이너와 영업이 만들어야 했던 기획전을 판매자가 스스로 만들게 됨',
            },
          ],
        },
        {
          content:
            '정식 오픈 이후 하루 80건 이상의 기획전이 꾸준히 생성되며, 브랜드 콜라보 행사인 "올인"에서 사용',
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
          content:
            '팀 내에서 관리 중인 웹 페이지의 LCP, FID, CLS 등의 Web Vitals 지표를 수집하는 API 서버 구현, 시각화 대시보드를 제공',
        },
        {
          content: '대량의 로그성 데이터 수집을 고려한 DB 및 리텐션 정책 정의',
          descriptions: [
            {
              content:
                'InfluxDB, Bucket4j, ArrayBlockingQueue 등을 통한 안정적인 데이터 수집 및 처리',
            },
          ],
        },
        {
          content: '다양한 서비스에 손쉽게 적용할 수 있는 Whitelist 기반의 솔루션 제공',
        },
        {
          content: '지마켓/ESM+ 등의 사이트 내 개선이 필요한 영역 식별에 걸리는 시간 60% 이상 감소',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '전사 행사 차세대 프로젝트',
      startedAt: '2025-06',
      endedAt: '2025-10',
      where: '지마켓(Gmarket)',
      descriptions: [
        {
          content: '전사 행사에서 사용되는 정보 관리 시스템의 차세대 프로젝트',
          descriptions: [
            {
              content: '하드코딩으로 진행되던 행사 페이지 내 구성 요소 어드민화',
            },
            {
              content: '전 도메인에서 사용하는 행사 관련 뱃지 정보 어드민화',
            },
          ],
        },
        {
          content: '대규모 트래픽을 고려한 캐싱 전략 설계',
        },
        {
          content:
            'Redis Pub/Sub을 통해 데이터 변경 시 캐시를 즉시 무효화함으로써, 캐시 반영 지연으로 인한 사용자 경험 저하를 방지',
          descriptions: [
            {
              content: '운영자 세팅 실수로 인한 휴먼 에러 발생시, 즉각적으로 반영',
            },
          ],
        },
        {
          content: '행사 페이지 개발 및 QA 소요 기간 70% 이상 감소',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '동시 행사 지원을 위한 상품별 뱃지 노출 API 개발',
      startedAt: '2026-03',
      where: '지마켓(Gmarket)',
      descriptions: [
        {
          content:
            '단일 행사 및 단일 상품 뱃지만 지원하던 기존 구조를 확장하여, 동시 행사 진행 시 상품별로 서로 다른 뱃지를 노출할 수 있는 API 설계 및 구현',
        },
        {
          content:
            'AIDC에서 설정한 행사 정보를 Database CDC 및 Message Queue 기반으로 수신하여 행사 정보 변경 사항을 즉시 반영하는 구조 구현',
        },
        {
          content:
            '상품별 행사 참여 정보와 뱃지 노출 정책을 기반으로 프론트엔드에 최종 노출 대상 뱃지 정보를 제공',
        },
        {
          content:
            '행사 정보 변경 시 API 응답에 빠르게 반영될 수 있도록 데이터 동기화 및 캐시 갱신 흐름 구현',
        },
      ],
    },
    {
      title: '개인화 추천 시스템 연동 API 개발',
      startedAt: '2025-10',
      endedAt: '2026-03',
      where: '지마켓(Gmarket)',
      descriptions: [
        {
          content: '개인화 추천 알고리즘 운영에 필요한 메타데이터 생성/수정 API를 설계 및 구현',
        },
        {
          content:
            'AIDC 추천 결과를 조회하고 프론트엔드 요구사항에 맞게 가공하여 제공하는 API 개발',
        },
        {
          content: '추천 결과 사전 검수를 위한 미리보기 페이지 구현',
        },
      ],
    },
    {
      title: '이벤트 응모 시스템 개편',
      startedAt: '2024-06',
      where: '지마켓(Gmarket)',
      descriptions: [
        {
          content: '쿠폰, 경품 등의 이벤트에 응모하고 리워드를 발급받는 시스템 개편',
        },
        {
          content: '.NET Window 서버에서 Spring Boot 기반의 클라우드 환경으로 전환',
          descriptions: [
            {
              content: 'SP(Stored Procedure) -> JPA 전환',
            },
          ],
        },
        {
          content: '트랜잭션 의존으로 발생한 중복 발급 문제 개선',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                "기존에는 응모 테이블의 방대한 양으로 중복 발급 문제를 해결하기 위해 'created_at' 컬럼에 Unique 옵션으로 해결하고 있었음",
            },
            {
              content: '동시성 처리를 위해 Redis 기반의 분산 락 적용',
            },
          ],
        },
      ],
    },
    {
      title: '차세대 UCube 프로젝트',
      startedAt: '2021-07',
      endedAt: '2022-11',
      where: 'LG CNS',
      descriptions: [
        {
          content: 'LG U+의 전산 시스템 Ucube의 MSA 전환 프로젝트',
        },
        {
          content: 'WebSquare 기반 가입 화면 및 데이터 유효성 검증 API 구현',
          descriptions: [
            {
              content:
                '조회 쿼리 최적화 및 코드 성능 개선을 통해 유효성 검증 처리 시간 30% 이상 단축',
            },
          ],
        },
        {
          content: 'Kafka를 통한 가입 정보를 타 서비스로 비동기 전송',
        },
        {
          content: 'Spring Batch를 통한 이메일/전문 전송 개발',
        },
      ],
    },
  ],
};

export default project;
