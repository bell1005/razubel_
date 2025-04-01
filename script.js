// 「はい」を押したときの処理
function approve() {
  showResult([
    "いつも頑張ってて偉い！",
    "かっこいい！",
    "いつも助かってるよ！"
  ]);
}

// 「いいえ」を押したときの処理
function deny() {
  showResult([
    "ﾆｨｨｲｲｲｲｲｲｲｲｲｲｲ",
    "ｸﾞｧﾝｸﾞｧﾝｸﾞｧﾝｸﾞｧﾝ",
    "ﾍﾞｼﾞﾍﾞｼﾞﾍﾞｼﾞﾍﾞｼﾞﾍﾞ"
  ]);
}

// 結果を表示する関数
function showResult(messages) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = messages.map(msg => `<p>${msg}</p>`).join('');
  resultDiv.style.display = 'block';
  document.querySelector('.container').style.height = 'auto'; // 高さ自動調整
}