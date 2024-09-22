# <경딧불이> - <KNUIM>
## 서비스 요약
KNU Indoor Map(KNUIM) - 경북대학교 건물 내부 3차원 지도 서비스

## 주제 구분
-	E타입 경북대에 다니는 다양한 배경의 학우들을 위한 서비스

## 팀원 소개
팀 경딧불이 팀원<br>
-박수민 (인공지능 컴퓨팅)(팀장)<br>
-서지형 (플랫폼 소프트웨어)(팀원)<br>
-이경민 (인공지능 컴퓨팅)(팀원)<br>
-지아넬라 (인공지능 컴퓨팅)(팀원)

## 시연 영상
(https://youtu.be/E2y8ygUETGw)

## 서비스 소개
### 서비스 개요
경북대학교 캠퍼스 내 건물들의 내부 구조를 3D로 보여주는 서비스이다.
사용자는 건물 이름을 선택하거나 지도에서 해당 건물을 클릭하여 원하는 건물의 내부 지도를 볼 수 있다. 
건물을 선택하면 층별로 나뉜 내부 구조를 확인할 수 있으며, 
각 층에서는 강의실, 화장실, 엘리베이터, 계단 등의 위치가 표시되어 있다.

### 타서비스와의 차별점
기존의 2차원 지도 서비스가 건물의 외부만을 보여주는 것과 달리, 이 서비스는 건물 내부 구조를 3D로 확인할 수 있다는 점에서 차별화된다. 특히 강의실, 화장실, 기타 편의시설의 위치를 명확하게 표시하여, 모든 사용자를 대상으로 하는 기존 서비스와 달리 학교 사용자에게 최적화된 지도 서비스라는 점이 강점이다.

### 구현 내용 및 결과물
구현 결과물 : https://sootation.synology.me:8080/

1. 메인 페이지
  - 건물 이름과 사진으로 구성된 카드를 통해 건물을 선택할 수 있다.
  - 열람 가능한 건물이 표시된 캠퍼스 지도 뷰에서 건물을 선택할 수 있다.
2. 건물 뷰어 페이지
  - 해당 건물에서 몇번째 층을 볼 것인지 선택할 수 있다.
  - 마우스/터치를 이용해 건물을 돌리거나, 줌 인/아웃 등의 동작을 수행할 수 있다.
3. About Us 페이지
    개발 팀원들에 대한 정보를 확인할 수 있다.
4. Bug & Issue Report 페이지
  -사용자의 피드백을 수용할 수 있는 개발진의 이메일 주소를 확인할 수 있다.

각 페이지는 모바일 환경에서 사용할 수 있도록 화면 크기에 따라 능동적으로 페이지의 스타일이 바뀐다.

### 구현 방식
HTML/CSS/JS를 통해 웹 사이트를 구현하고 Model-viewer 라는 반응형 3D 모델 웹 뷰어를 사용해 제작된 3D 건물 내부 구조를 보여준다.<br>
리눅스 서버 환경에서 nginx를 통해 https://sootation.synology.me:8080/에서 웹 서버를 배포한다.

## 향후 개선 혹은 발전 방안
-아직 미완성된 건물 내부 구조가 있기에 현재는 웹사이트 캐싱을 사용하지 않아 로딩이 오래 걸린다. 하지만 내부 구조 완성 후에는 사이트 캐싱을 사용해 로딩 시간을 줄여 사용에 불편함을 줄일 수 있다.<br><br>
-소화기, 소화전, 완강기, 등의 구조물 위치를 모델에 추가하여 화재상황시 사용가능한 자원을 눈에 쉽게 보여주어 사용자의 건물 내부 화재 대처 능력을 향상 시킨다.<br><br>
-GPS 기능을 사용해 사용자의 위치 및 방향을 3D 모델 속에서 보여주어 길 찾기를 더욱 쉽게 만들어 준다.<br><br>
