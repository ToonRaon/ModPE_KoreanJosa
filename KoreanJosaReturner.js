/*
 * 스크립터 : 툰라온
 * 블로그 : http://blog.naver.com/toonraon/
 * 참고 사이트 : http://taegon.kim/archives/24
						http://javaservice.net/~java/bbs/read.cgi?m=dbms&b=QandA&c=r_p&n=992930520&p=56&s=d
 */

const INITIAL = 19; //초성 - ㄱ, ㄲ, ㄴ, ㄷ, ㄸ, ㄹ, ㅁ, ㅂ, ㅃ, ㅅ, ㅆ, ㅇ, ㅈ, ㅉ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ
const MEDIAL = 21; //중성 - ㅏ, ㅐ, ㅑ, ㅒ, ㅓ, ㅔ, ㅕ, ㅖ, ㅗ, ㅘ, ㅙ, ㅚ, ㅛ, ㅜ, ㅝ, ㅞ, ㅟ, ㅠ, ㅡ, ㅢ,ㅣ
const FINAL = 28; //종성 - (없음), ㄱ, ㄲ, ㄳ, ㄴ, ㄵ, ㄶ, ㄷ, ㄹ, ㄺ, ㄻ, ㄼ, ㄽ, ㄾ, ㄿ, ㅀ, ㅁ, ㅂ, ㅄ, ㅅ, ㅆ, ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ
const FIRST_KOREAN_OF_UNICODE = 44032; //유니코드에서 첫번째 한글 문자인 '가'의 고유번호. 44033은 각, 44034는 갂... 과 같은 순서로 55203번째까지 한글이 존재하고있다.

function josa(kor, josa) {
	var finalCode = kor.charCodeAt(kor.length - 1) - FIRST_KOREAN_OF_UNICODE; //kor의 마지막 문자의 유니코드 번호
	
	if(josa == "이" || josa == "가")
		josa = ((finalCode % (MEDIAL * FINAL)) % FINAL == 0 ? "가" : "이");
	else if(josa == "은" || josa == "는")
		josa = ((finalCode % (MEDIAL * FINAL)) % FINAL == 0 ? "는" : "은");
	else if(josa == "을" || josa == "를")
		josa = ((finalCode % (MEDIAL * FINAL)) % FINAL == 0 ? "를" : "을");
	else if(josa == "와" || josa == "과")
		josa = ((finalCode % (MEDIAL * FINAL)) % FINAL == 0 ? "와" : "과");
	
	return (kor + josa);
}

print(josa("마우스", "은")); //마우스는