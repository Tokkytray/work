function openGoogleSheet(sheetName) {
    // Google 스프레드시트를 불러오는 코드를 여기에 추가
    // 예를 들어, iframe을 사용하여 Google 스프레드시트를 표시할 수 있습니다.
    // 아래는 예시 코드입니다.

    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<iframe src="https://docs.google.com/spreadsheets/d/스프레드시트_아이디/edit#gid=${sheetName}" width="100%" height="600px"></iframe>`;
}
