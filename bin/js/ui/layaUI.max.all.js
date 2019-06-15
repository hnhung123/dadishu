var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var GameUI = /** @class */ (function (_super) {
        __extends(GameUI, _super);
        function GameUI() {
            return _super.call(this) || this;
        }
        GameUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameUI.uiView);
        };
        GameUI.uiView = { "type": "View", "props": { "width": 800, "height": 600 }, "child": [{ "type": "Image", "props": { "y": 25, "x": 25, "skin": "ui/back.png" } }, { "type": "Box", "props": { "y": 195, "x": 154, "name": "item0" }, "child": [{ "type": "Image", "props": { "y": 83, "skin": "ui/mask-01.png" } }, { "type": "Image", "props": { "y": 16, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "x": 6, "skin": "ui/mouse_normal_1.png", "name": "normal" } }] }, { "type": "Box", "props": { "y": 193, "x": 344, "name": "item1" }, "child": [{ "type": "Image", "props": { "y": 83, "skin": "ui/mask-02.png" } }, { "type": "Image", "props": { "y": 16, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "x": 6, "skin": "ui/mouse_normal_1.png", "name": "normal" } }] }, { "type": "Box", "props": { "y": 199, "x": 543, "name": "item2" }, "child": [{ "type": "Image", "props": { "y": 83, "skin": "ui/mask-03.png" } }, { "type": "Image", "props": { "y": 16, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "x": 6, "skin": "ui/mouse_normal_1.png", "name": "normal" } }] }, { "type": "Box", "props": { "y": 286, "x": 127, "name": "item3" }, "child": [{ "type": "Image", "props": { "y": 83, "skin": "ui/mask-04.png" } }, { "type": "Image", "props": { "y": 16, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "x": 6, "skin": "ui/mouse_normal_1.png", "name": "normal" } }] }, { "type": "Box", "props": { "y": 288, "x": 343, "name": "item4" }, "child": [{ "type": "Image", "props": { "y": 83, "skin": "ui/mask-05.png" } }, { "type": "Image", "props": { "y": 16, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "x": 6, "skin": "ui/mouse_normal_1.png", "name": "normal" } }] }, { "type": "Box", "props": { "y": 286, "x": 544, "name": "item5" }, "child": [{ "type": "Image", "props": { "y": 83, "skin": "ui/mask-06.png" } }, { "type": "Image", "props": { "y": 16, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "x": 6, "skin": "ui/mouse_normal_1.png", "name": "normal" } }] }, { "type": "Box", "props": { "y": 391, "x": 115, "name": "item6" }, "child": [{ "type": "Image", "props": { "y": 83, "skin": "ui/mask-07.png" } }, { "type": "Image", "props": { "y": 16, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "x": 6, "skin": "ui/mouse_normal_1.png", "name": "normal" } }] }, { "type": "Box", "props": { "y": 390, "x": 346, "name": "item7" }, "child": [{ "type": "Image", "props": { "y": 83, "skin": "ui/mask-08.png" } }, { "type": "Image", "props": { "y": 16, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }, { "type": "Image", "props": { "x": 6, "skin": "ui/mouse_normal_1.png", "name": "normal" } }] }, { "type": "Box", "props": { "y": 390, "x": 567, "name": "item8" }, "child": [{ "type": "Image", "props": { "y": 83, "skin": "ui/mask-09.png" } }, { "type": "Image", "props": { "y": 0, "x": 6, "skin": "ui/mouse_normal_1.png", "name": "normal" } }, { "type": "Image", "props": { "y": 16, "x": 4, "skin": "ui/mouse_hit_1.png", "name": "hit" } }] }, { "type": "ProgressBar", "props": { "y": 13, "x": 196, "var": "timeBar", "value": 1, "skin": "ui/progress_time.png" } }, { "type": "Box", "props": { "y": 40, "x": 34, "var": "scoreNums" }, "child": [{ "type": "Clip", "props": { "y": 3, "skin": "ui/clip_number.png", "name": "item0", "clipX": 10 } }, { "type": "Clip", "props": { "y": 3, "x": 17, "skin": "ui/clip_number.png", "name": "item1", "clipX": 10 } }, { "type": "Clip", "props": { "y": 3, "x": 33, "skin": "ui/clip_number.png", "name": "item2", "clipX": 10 } }, { "type": "Clip", "props": { "y": 3, "x": 50, "skin": "ui/clip_number.png", "name": "item3", "clipX": 10 } }, { "type": "Clip", "props": { "y": 3, "x": 66, "skin": "ui/clip_number.png", "name": "item4", "clipX": 10 } }, { "type": "Clip", "props": { "y": 3, "x": 82, "skin": "ui/clip_number.png", "name": "item5", "clipX": 10 } }, { "type": "Clip", "props": { "y": 3, "x": 97, "skin": "ui/clip_number.png", "name": "item6", "clipX": 10 } }, { "type": "Clip", "props": { "y": 3, "x": 114, "skin": "ui/clip_number.png", "name": "item7", "clipX": 10 } }, { "type": "Clip", "props": { "y": 3, "x": 129, "skin": "ui/clip_number.png", "name": "item8", "clipX": 10 } }, { "type": "Clip", "props": { "y": 3, "x": 145, "width": 18, "skin": "ui/clip_number.png", "name": "item9", "height": 24, "clipX": 10 } }] }] };
        return GameUI;
    }(View));
    ui.GameUI = GameUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map