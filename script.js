function openGoogleSheet(sheetName) {
    var spreadsheetURLs = {
		'Menu1': 'https://docs.google.com/spreadsheets/d/1_PLrXHsyhMZyF9YXAm-Q7IHpT3i_wq2yRXdEVIjnFzY/edit#gid=0',
        'Menu2': 'https://docs.google.com/spreadsheets/d/1uUKfVgbbchOzAuhDyvMB2f4nG0Z2hHr4yI6PQIFfdqY/edit#gid=1888316717',
        'Menu3': 'https://docs.google.com/spreadsheets/d/1cl-V-GkSNTWqNDFKftPViy0NQmmvCp440f-o8lxsppw/edit#gid=900677335',
		'Menu4': 'https://docs.google.com/spreadsheets/d/1-2Ysl8kz05jwIC5kAn0D-qD3fFFqSjbX_wWSEuSt5qg/edit#gid=472377989',
		'Menu5': 'https://docs.google.com/spreadsheets/d/14SbODhtCMelkIIfxdkfIPJp_XpFlkYKSkbiF5F36RmI/edit#gid=1113308512',
		'Menu6': 'https://docs.google.com/spreadsheets/d/1xfaZG9K8CgqW6WCB6WrZ_62eaRWWCAGcLqXL4gkFyh0/edit#gid=1002223136',
		'Menu7': 'https://docs.google.com/spreadsheets/d/1nVJlgofxKVQib6a4TOQY4c7glLYK2Vc1Wayd8Ra21-g/edit#gid=1038351251',
		'Menu8': 'https://docs.google.com/spreadsheets/d/1MJMmFLVygTFgV6k1M2g8N-cKEYBBk4MCuHY6EhiChnc/edit#gid=851632209',
		'Menu9': 'https://docs.google.com/spreadsheets/d/132P1Ia9xgxpdQcezkypK-GGpLaJ8RlwuLFQ5M-khyxk/edit#gid=20660227',
        // 다른 메뉴에 대한 스프레드시트 URL 추가
    };

    var spreadsheetURL = spreadsheetURLs[sheetName];

    if (spreadsheetURL) {
        var iframeCode = '<iframe src="' + spreadsheetURL + '/pubhtml" width="100%" height="100%"></iframe>';
        document.getElementById('frame').innerHTML = iframeCode;
    } else {
        console.error('해당하는 스프레드시트가 없습니다.');
    }
}
