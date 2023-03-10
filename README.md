## 노드의 정의
Node.js는 크롬 V8 자바스크립트 엔진으로 빌드 된 자바스크립트 런타임
* 서버의 역할도 수행할 수 있는 자바스크립트 런타임
* 노드로 자바스크립트로 작성된 서버를 실행할 수 있음(노드 자체가 서버인 게 아님)
* 서버 실행을 위해 필요한 http/https/http2 모듈을 제공

※ 런타임: 특정 언어로 만든 프로그램들을 실행할 수 있게 해주는 가상 머신(크롬 V8 엔진사용)의 상태
<br>
-> 노드는 자바스크립트로 만든 프로그램들을 실행할 수 있게 해준다.


## 내부 구조
* V8 엔진: 오픈 소스 자바스크립트 엔진 -> 속도 문제 개선
* libuv: 노드의 특성인 이벤트 기반, 논블로킹 I/O모델을 구현한 라이브러리

![image](https://user-images.githubusercontent.com/114047532/218671423-9a642e81-b495-4e06-9b7a-a812fd23693c.png)


## 노드의 특성
#### 1. 이벤트 기반
* 이벤트가 발생할 때 미리 지정해둔 작업을 수행하는 방식
  * 이벤트의 예: 클릭, 네트워크 요청, 타이머 등
  * 이벤트 리스너: 이벤트를 등록하는 함수
  * 콜백 함수: 이벤트가 발생했을 때 실행될 함수

![image](https://user-images.githubusercontent.com/114047532/218672687-3c6542b9-2a9b-49f3-acb5-b67a04b70f55.png)

#### 2. 논블로킹 I/O
* 논블로킹: 오래 걸리는 함수를 백그라운드로 보내서 다음 코드가 먼저 실행되게 하고, 나중에 오래 걸리는 함수를 실행
  * 논 블로킹 방식 하에서 일부 코드는 백그라운드에서 병렬로 실행
  * 일부 코드: I/O 작업(파일 시스템 접근, 네트워크 요청), 압축, 암호화 등
  * 나머지 코드는 블로킹 방식으로 실행
  * 그러므로 I/O 작업이 많을 때 노드 활용성이 극대화

#### 3. 싱글 스레드
* 노드 프로세스는 멀티 스레드이지만 직접 다룰 수 있는 스레드는 하나이기 때문에 싱글 스레드라고 표현
* 노드는 주로 멀티 스레드 대신 멀티 프로세스 활용
* 노드는 14버전부터 멀티 스레드 사용 가능
* 논 블로킹 모델을 채택하여 일부 코드(I/O)를 백그라운드(다른 프로세스)에서 실행 가능
  * 요청을 먼저 받고, 완료될 때 응답함
  * I/O 관련 코드가 아닌 경우 싱글 스레드, 블로킹 모델과 같아짐

![image](https://user-images.githubusercontent.com/114047532/218674636-f95a11c3-f14c-4617-abd2-4bf8ab23933e.png)


## 노드의 역할
#### 1. 서버로서의 노드
* 노드 서버의 장단점

![image](https://user-images.githubusercontent.com/114047532/218675587-125aff5c-3a73-479c-932f-83f0f91468e2.png)

* CPU 작업을 위해 AWS Lambda나 Google Cloud Functions 같은 별도 서비스 사용
* 페이팔, 넷플릭스, 나사, 월마트, 링크드인, 우버 등에서 메인 또는 서브 서버로 사용

#### 2. 서버 외의 노드
* 자바스크립트 런타임이기 때문에 용도가 서버에만 한정되지 않음
* 웹, 모바일, 데스크탑 애플리케이션에도 사용
 * 웹 프레임워크: Angular, React, Vue, Meteor 등
 * 모바일 앱 프레임워크: React Native
 * 데스크탑 개발 도구: Electron(Atom, Slack, VSCode, Discord 등 제작)
