export const getByteSize = (s) => {
  const str = s.toString();
  let byteSize = 0;
  let char = '';

  for (let i = 0; !isNaN(str.charCodeAt(i)); i++) {
    char = str.charCodeAt(i);

    // 12비트 이상으로 표현 가능한 유니코드
    if (char >> 11) {
      byteSize += 3;

    // 8비트 ~ 11비트로 표현 가능한 유니코드
    } else if (char >> 7) {
      byteSize += 2;

    // 7비트 이하로 표현 가능한 유니코드
    } else {
      byteSize += 1;
    }
  }

  return byteSize;
}