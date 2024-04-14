"use strict";

import PageBase from "./PageBase.js";

export default class extends PageBase {
    constructor(params) {
        super(params);
        this.setTitle("GameMatch");
        this.labelButton = "対戦を申し込む";
    }

    async getHtml() {
        return `
            <div class="listPlayers">
                <section class="unitListItem">
                    <header class="unitListItem_header">
                        <div class="unitPlayerName">
                            <h3>user1</h3>
                            <p class="thumb"><img src="//ui-avatars.com/api/?name=Aa Bb&background=e3ad03&color=ffffff" alt="" width="60" height="60"></p>
                        </div>
                        <button class="unitButton">${this.labelButton}</button>
                    </header>
                    <div class="unitListItem_content unitPlayerScore">
                        <p>RANK: 4 (20勝3敗)</p>
                        <p>過去の対戦成績: 2勝1敗</p>
                    </div>
                </section>
                <section class="unitListItem">
                    <header class="unitListItem_header">
                        <div class="unitPlayerName">
                            <h3>user1</h3>
                            <p class="thumb"><img src="//ui-avatars.com/api/?name=Cc Dd&background=59fa14&color=ffffff" alt="" width="60" height="60"></p>
                        </div>
                        <button class="unitButton">${this.labelButton}</button>
                    </header>
                    <div class="unitListItem_content unitPlayerScore">
                        <p>RANK: 4 (20勝3敗)</p>
                        <p>過去の対戦成績: 2勝1敗</p>
                    </div>
                </section>
                <section class="unitListItem">
                    <header class="unitListItem_header">
                        <div class="unitPlayerName">
                            <h3>user1</h3>
                            <p class="thumb"><img src="//ui-avatars.com/api/?name=Ee Ff&background=2e99f0&color=ffffff" alt="" width="60" height="60"></p>
                        </div>
                        <button class="unitButton">${this.labelButton}</button>
                    </header>
                    <div class="unitListItem_content unitPlayerScore">
                        <p>RANK: 4 (20勝3敗)</p>
                        <p>過去の対戦成績: 2勝1敗</p>
                    </div>
                </section>
                <section class="unitListItem">
                    <header class="unitListItem_header">
                        <div class="unitPlayerName">
                            <h3>user1</h3>
                            <p class="thumb"><img src="//ui-avatars.com/api/?name=Gg Hh&background=872bac&color=ffffff" alt="" width="60" height="60"></p>
                        </div>
                        <button class="unitButton">${this.labelButton}</button>
                    </header>
                    <div class="unitListItem_content unitPlayerScore">
                        <p>RANK: 4 (20勝3敗)</p>
                        <p>過去の対戦成績: 2勝1敗</p>
                    </div>
                </section>
                <section class="unitListItem">
                    <header class="unitListItem_header">
                        <div class="unitPlayerName">
                            <h3>user1</h3>
                            <p class="thumb"><img src="//ui-avatars.com/api/?name=Ii Jj&background=ff0000&color=ffffff" alt="" width="60" height="60"></p>
                        </div>
                        <button class="unitButton">${this.labelButton}</button>
                    </header>
                    <div class="unitListItem_content unitPlayerScore">
                        <p>RANK: 4 (20勝3敗)</p>
                        <p>過去の対戦成績: 2勝1敗</p>
                    </div>
                </section>
            </div>
        `;
    }
}