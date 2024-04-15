"use strict";

import PageBase from "./PageBase.js";

export default class extends PageBase {
    constructor(params) {
        super(params);
        this.setTitle("TournamentMatch");
    }

    async getHtml() {
        return `
            <div class="playBoardWrap">
                <canvas id="playBoard"></canvas>
            </div>
        `;
    }
}
