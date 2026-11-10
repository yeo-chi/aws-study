# AWS 인프라 & 네트워크 학습 가이드

`AWS-인프라-네트워크-학습가이드.pdf` — 네트워크 기초부터 VPC 심화, 하이브리드(VPN/DX/TGW), 컴퓨팅·스토리지·DB, 보안·모니터링, IaC, 고가용성/DR, 실습, 트러블슈팅까지 다루는 학습용 교재 (A4, 64쪽).

## 다시 빌드하기
원본은 `src/*.html`이며, 파일명 순서대로 합쳐 PDF로 만듭니다.

```bash
npm i playwright && npx playwright install chromium   # 최초 1회
node build.js
```
한글 폰트(Noto Sans CJK KR, 나눔고딕코딩)가 설치되어 있어야 합니다.
