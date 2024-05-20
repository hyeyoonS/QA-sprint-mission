### 스프린트 미션 제출 방법

- **codeit-bootcamp-backend / QA-sprint-mission** 에서 `fork` 합니다.

  - main branch only 체크를 **해제**합니다.

- `fork` 된 레포에서 자신의 이름으로 된 브랜치가 있는지 확인하고 없다면, 요청합니다.

- `fork` 해 온 repository에서 `본인이름` 브랜치를 `clone` 해서 작업합니다.

  ```bash
  git clone -b 본인이름 --single-branch {저장소 URL}
  ```

- **클론한 폴더 열고, base 브랜치가 `본인이름` 브랜치인지 확인한다.** 만약 그렇지 않다면, 아래 명령어로 base 브랜치를 이동한다.

  ```bash
  git checkout 본인이름
  ```

- `본인이름` 브랜치를 기준으로 각 미션마다 `본인이름-mission번호` 브랜치를 생성합니다.

  ```bash
  git checkout -b 본인이름-mission3
  ```

- `본인이름-mission3` 브랜치에서 해당 스프린트 미션을 진행 후 `push` 합니다.

- 위 과정을 통해 미션을 다 완료했다면, **PR**(Pull Request)을 올립니다.

  -  ex)  `jiwoo-im/임지우-mission3` → `codeit-bootcamp-backend/임지우`



### PR 템플릿

```markdown
### 주요 변경사항
-
-

### QA 의견
-
-
```

