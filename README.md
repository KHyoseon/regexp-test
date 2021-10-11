# 정규표현식

## 역할
- 문자 검색
- 문자 대체
- 문자 추출

## 자바스크립트 정규식 생성

```js
// 생성자 방식
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi') // a부터 z까지 일치하는 문자는 모두(g) 대소문자 구분 없이(i) 검색

// 리터럴 방식
/표현/옵션
/[a-z]/gi

// 생성자-> 표현은 '패턴'로 감싸지만 리터럴에서는 /패턴/로 감싼다
```

## 예제 문자
```js
const str = `
010-1234-5678
thesecon@gmail.com
https://omdbapi.com/?aipkey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 정규식과 일치하는 문자가 있는지 (Boolean)
match | `문자열.match(정규식)` | 일치하는 문자의 배열 데이터 반환 (Array)
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 새로운 문자로 대체

## 플래그(옵션)

플래그 | 설명
--|--
g | 정규식과 일치하는 `모든` 문자 (global)
i | 영어 `대소문자 구분 없이` 일치하는 문자 (ignore case)
m | 여러 줄 일치 (multi line)

## 패턴(표현)

패턴 | 설명
--|--
^ab | 줄 시작에 있는 ab와 일치
ab$ | 줄 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;|b | a 또는 b와 일치
ab? | b가 없거나 a가 일치
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개 이하 연속 일치
[abc] | a 또는 b 또는 c
[a-z] | a부터 z 사이의 문자 구간에 일치
[A-Z] | A부터 Z 사이의 문자 구간에 일치
[0-9] | 0부터 9 사이의 문자 구간에 일치
[가-힣] | 가부터 힣 사이의 문자 구간에 일치
\w | 63개 문자(대소영문52개 + 숫자10개 + _)
\b | 63개 문자에 일치하지 않는 나머지 문자
\d | 숫자에 일치
\s | 공백(space, tab)에 일치
(?=) | 앞쪽 일치
(?<=) | 뒤쪽 일치