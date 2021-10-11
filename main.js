const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?aipkey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
ok
동해물과 백두산이 마르고 닳도록
`

// const regexp = new RegExp('the', 'gi')
// const regexp = /the/g

// const regexp = /fox/gi
// console.log(regexp.test(str))   // str에 fox라는 단어가 보이는가? => true

// const regexp = /fox/gi
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)                // replace로 원본 데이터를 변경할 수는 없다

// console.log(str.match(/the/g))
// console.log(str.match(/the/gi))
// console.log(str.match(/\.$/gim))     // $ = $앞의 단어로 끝나는 문장을 찾는다
    // 원래는 str의 마지막 부분은 ...dddd\n 까지인데, m 플래그를 같이 써서, 
    // 문장 사이사이에 있는 \n 부분까지 탐색 영역으로 쳐줌.
    // 원래 [0]~[n]인 하나의 문단을 \n를 기준으로 여러개의 문장으로 나누어 준다고 생각

// console.log(str.match(/d$/gm))

// console.log(
//     str.match(/h..p/g),
//     str.match(/fox|dog/g),
//     str.match(/https?/g)
// )

// console.log(
//     str.match(/d{2}/g),
//     str.match(/d{2,}/g),
//     str.match(/d{2,3}/g)
// )
// console.log(
//     str.match(/\w{2,3}/g),       // \w: 숫자를 포함한 알파벳
//     str.match(/\b\w{2,3}\b/g)   // \b: 경계.. \w를 둘러싸면 숫자, 알파벳으로만 이루어진 단어를 가리킴
// )

// console.log(
//     str.match(/[fox]/g),        // str 내의 모든 f, o, x 가 출력됨
//     str.match(/[0-9]{1,}/g),
//     str.match(/[가-힣]{1,}/g)
// )

// console.log(
//     str.match(/\w/g),
//     str.match(/\bf\w{1,}\b/g),      // f로 시작하는 모든 영단어를 찾음
//     str.match(/\d{1,}/g),
//     str.match(/\s/g)
// )

// const h = `  the hello  world  !

// `
// console.log(
//     h.match(/\s/g),
//     h.replace(/\s/g, '')        // 공백, 줄바꿈 부분을 삭제함
// )

console.log(
    str.match(/.{1,}(?=@)/g),
    str.match(/(?<=@).{1,}/g)
)