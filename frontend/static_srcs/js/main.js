"use strict";

//import
import { checkLoginStatus } from "/js/modules/auth.js";
import { addLinkPageEvClick, checkProtectedRoute, router } from "/js/modules/router.js";
import { switchLanguage } from "/js/modules/switchLanguage.js";

//load
document.addEventListener("DOMContentLoaded", async () => {
    const isLoggedIn = await checkLoginStatus();
    if (!isLoggedIn && checkProtectedRoute(window.location.pathname)) {
        window.location.pathname = '/';//todo: routing調整
    }
    //todo: selectedLanguageが未セットならdefault lang
    //const selectedLanguage = localStorage.getItem("selectedLanguage");
    try {
        await router();
    } catch (error) {
        console.error(error);
    }
    //共通パーツのa[data-link]にaddEventListener
    const linkPagesCommon = document.querySelectorAll(':not(#app) a[data-link]');
    addLinkPageEvClick(linkPagesCommon);

    //ブラウザの履歴移動でrouter呼ぶようaddEventListener
    window.addEventListener("popstate", router);

    // 言語切り替え
    switchLanguage();
});
