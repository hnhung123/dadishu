var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * GameView
 */
var GameView = (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super.call(this) || this;
        _this.moleNum = 9;
        _this.moles = new Array();
        for (var i = 0; i < _this.moleNum; i++) {
            var box = _this.getChildByName("item" + i);
            var mole = new Mole(box.getChildByName("normal"), box.getChildByName("hit"), 21);
            _this.moles.push(mole);
        }
        Laya.timer.loop(1000, _this, _this.onLoop);
        return _this;
    }
    GameView.prototype.onLoop = function () {
        var index = Math.floor(Math.random() * this.moleNum);
        this.moles[index].show();
    };
    return GameView;
}(ui.GameUI));
//# sourceMappingURL=GameView.js.map