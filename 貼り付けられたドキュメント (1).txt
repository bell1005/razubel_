document.getElementById("approvalLink").addEventListener("click", function () {
    document.getElementById("messageBox").classList.remove("hidden");
});

document.getElementById("yesButton").addEventListener("click", function () {
    document.getElementById("messageBox").classList.add("hidden");
    document.getElementById("responseBox").innerHTML = `
        <ul>
            <li>いつも頑張ってて偉い！</li>
            <li>かっこいい！</li>
            <li>いつも助かってるよ！</li>
        </ul>
    `;
    document.getElementById("responseBox").classList.remove("hidden");
});

document.getElementById("noButton").addEventListener("click", function () {
    document.getElementById("messageBox").classList.add("hidden");
    document.getElementById("responseBox").innerHTML = `
        <ul>
            <li>ﾆｨｨｲｲｲｲｲｲｲｲｲｲｲ</li>
            <li>ｸﾞｧﾝｸﾞｧﾝｸﾞｧﾝｸﾞｧﾝ</li>
            <li>ﾍﾞｼﾞﾍﾞｼﾞﾍﾞｼﾞﾍﾞｼﾞﾍﾞｼﾞﾍﾞｼﾞﾍﾞｼﾞﾍﾞ</li>
        </ul>
    `;
    document.getElementById("responseBox").classList.remove("hidden");
});