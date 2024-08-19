
// 弹窗内容
var popupNotice = "⭐个人提示⭐";
var popupMainContent = "本站只用于电脑访问，不适配手机访问，现阶段只是模板设计中，还在开发中，后续将会完善！";
var popupJoinLink = "https://zwcx520.netlify.app";

// 是否弹出弹窗的变量
var shouldPopup = 1;

// 创建弹窗元素
var popupWrapper = document.createElement("div");
popupWrapper.className = "popup-wrapper";

var popupContent = document.createElement("div");
popupContent.className = "popup-content";

var popupNoticeElement = document.createElement("div");
popupNoticeElement.className = "popup-notice";
popupNoticeElement.textContent = popupNotice;

var popupMainContentElement = document.createElement("div");
popupMainContentElement.className = "popup-main-content";
popupMainContentElement.textContent = popupMainContent;

var popupButtons = document.createElement("div");
popupButtons.className = "popup-buttons";

var popupCloseButton = document.createElement("button");
popupCloseButton.className = "popup-btn-close";
popupCloseButton.textContent = "关闭";

var popupJoinButton = document.createElement("a");
popupJoinButton.className = "popup-btn-join";
popupJoinButton.textContent = "博客";
popupJoinButton.href = popupJoinLink;

popupButtons.appendChild(popupCloseButton);
popupButtons.appendChild(popupJoinButton);

popupContent.appendChild(popupNoticeElement);
popupContent.appendChild(popupMainContentElement);
popupContent.appendChild(popupButtons);

popupWrapper.appendChild(popupContent);

// 弹出弹窗函数
function showPopup() {
  if (shouldPopup) {
    document.body.appendChild(popupWrapper);
  }
}

// 关闭弹窗函数
function closePopup() {
  document.body.removeChild(popupWrapper);
}

// 监听关闭按钮点击事件
popupCloseButton.addEventListener("click", closePopup);

// 监听加群按钮点击事件
popupJoinButton.addEventListener("click", function(e) {
  e.preventDefault();
  var link = this.getAttribute("href");
  window.open(link);
});

// 显示弹窗
showPopup();