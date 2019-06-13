/**
 * Mole
 */
var Mole = (function () {
    function Mole(normalState, hitState, downY) {
        this.normalState = normalState;
        this.hitState = hitState;
        this.downY = downY;
        this.upY = this.normalState.y;
        this.reset();
    }
    Mole.prototype.reset = function () {
        this.normalState.visible = false;
        this.hitState.visible = false;
        this.isActive = false;
        this.isShow = false;
        this.isHit = false;
    };
    Mole.prototype.show = function () {
        if (this.isActive)
            return;
        this.isActive == true;
        this.isShow = true;
        this.normalState.y = this.downY;
        this.normalState.visible = true;
        Laya.Tween.to(this.normalState, { y: this.upY }, 500, Laya.Ease.backOut, Laya.Handler.create(this, this.showComplete));
    };
    Mole.prototype.showComplete = function () {
        if (this.isShow && !this.isHit) {
            Laya.timer.once(2000, this, this.hide);
        }
    };
    Mole.prototype.hide = function () {
    };
    Mole.prototype.hit = function () {
    };
    return Mole;
}());
//# sourceMappingURL=Mole.js.map